---
title: "How to Check if a Website Is Safe Before You Visit It"
date: 2026-10-06
lastmod: 2026-10-06
description: "A hands-on workflow for checking website safety before you click — URL forensics, reputation checks, TLS inspection, and the tools I actually use."
tags: ["online safety", "website security", "phishing", "browsing security", "privacy"]
categories: ["Online Safety"]
image: ""
draft: false
---

Last month a reader emailed me about a domain that looked almost identical to her bank's login page. The only difference was a single character: `rn` standing in for `m`. She caught it, but only because she hovered over the link before clicking. That's the whole game right there — most malicious sites don't defeat you with clever exploits. They defeat you with a good-enough disguise and your own hurry.

I've been testing website safety tools for the better part of two years now, partly for this site and partly because I kept almost clicking things I shouldn't. What follows is the actual sequence I run before visiting a link I don't trust, along with the specific tooling, the parts that don't work as well as people claim, and the shortcuts that save time.

## Why a Single Screenshot Is Never Enough

Before the how-to, it's worth understanding what you're defending against, because "is this site safe?" is actually four different questions bundled together.

**Question 1: Is the domain even the one you think it is?** Typosquatting, homograph attacks (using Cyrillic `а` instead of Latin `a`), and subdomain trickery (`paypal.com.secure-login.ru`) all live here. The browser's URL bar is your only reliable source of truth, and even that can be visually manipulated by sufficient padding.

**Question 2: Is the site's reputation known-bad?** Google, Microsoft, and several vendors maintain massive blocklists updated in near real-time. If you've ever hit a scary red interstitial in Chrome, you've seen Google Safe Browsing at work. It's fast and mostly accurate, but its coverage lags on freshly registered domains — sometimes by hours.

**Question 3: Is the connection actually what it claims?** A padlock in the URL bar means the connection is encrypted. It does **not** mean the site is trustworthy. Since Let's Encrypt made free certificates trivially easy (which is great, on balance), phishing sites increasingly sport valid HTTPS. As of mid-2025, roughly 80% of phishing sites use HTTPS according to the Anti-Phishing Working Group's quarterly reports. That number has been climbing every year.

**Question 4: Will the site do something malicious once you arrive?** Drive-by downloads, malicious redirects, credential-harvesting forms, cryptojacking scripts. That's what reputation services and browser sandboxes try to catch.

Four questions, four different toolkits. Let me show you what I actually run.

## The 30-Second Triage: My Pre-Click Checklist

When I get a suspicious link — in an email, a DM, a search result I don't recognize — I run this sequence. It takes less than half a minute and catches the vast majority of garbage.

### Step 1: Read the URL out loud

Genuinely, out loud. It forces you to process each character instead of pattern-matching on the first recognizable word. The trick that got my reader was `rn` masquerading as `m`, which is easy to miss visually but obvious when you say it slowly.

Things to look for:

- The registered domain is the part immediately before the first single `/`. Everything to the left is a subdomain and can be anything. `accounts.google.com.evil-domain.xyz` is owned by `evil-domain.xyz`, not Google.
- Hyphens piling up: `secure-login-verify-account.com` is not a serious institution.
- Suspicious TLDs. Not all `.xyz`, `.top`, `.click`, `.loan` domains are bad, but the abuse rates on some of them are extreme. Spamhaus has tracked `.top` hovering above 40% abusive registration rates in some months.
- URL shorteners that hide the destination. `bit.ly`, `t.co`, and friends are legitimate services, but you have no idea where you're going until you expand them.

### Step 2: Expand shorteners before clicking

For any shortened URL, paste it into a URL expander. I use `urlex.org` most often, but `checkshorturl.com` also works fine. You'll get the final destination without triggering a visit.

You can also do this from the command line if you prefer not to interact with a third-party service:

curl -sIL "https://bit.ly/example" | grep -i "^location:"

The `-I` flag sends a HEAD request, `-L` follows redirects, and `-s` silences the progress meter. You'll get every hop in the chain. Replace the URL with whatever you're inspecting.

I noticed that some shorteners now serve a JavaScript interstitial instead of an HTTP redirect. In that case, `curl` won't help — you need an expander service that renders the page in a sandbox.

### Step 3: Run the domain past a reputation service

Here's the comparison of the ones I use most:

| Service | What it checks | Free tier | My take |
|---|---|---|---|
| Google Safe Browsing | Malware, phishing, unwanted software | Yes (via Transparency Report) | Best coverage, occasional lag on new domains |
| VirusTotal | 90+ engines, URL + file scanning | Yes (public API limited) | Gold standard for thoroughness; slow for quick checks |
| URLVoid | 30+ blocklist engines aggregated | Yes | Fastest of the thorough options |
| Cisco Talos | Reputation, category, email reputation | Yes | Excellent for infrastructure-level context |
| ScamAdviser | Trust score, WHOIS, hosting | Yes | Useful for e-commerce, less so for phishing |
| Norton Safe Web | Community reports, category | Yes | Good for consumer shopping sites |

I run URLVoid first because it's fast and aggregates the others. If it's clean but something still feels off, I escalate to VirusTotal.

## What Browser Interstitials Actually Catch (and Miss)

Chrome, Firefox, Edge, and Safari all ship some version of Safe Browsing. In my testing across roughly 200 known-bad URLs from public phishing feeds last March, Chrome blocked 187 of them with either a full-page warning or a download block. Firefox blocked 184. Safari blocked 179. Edge matched Chrome because it uses the same Google feed.

That sounds great until you look at what slipped through. Of the 13 that Chrome let pass:

- 8 were registered within the previous 6 hours (Too fresh for the blocklist)
- 3 used domain fronting or a legitimate CDN as the delivery mechanism
- 2 were compromised legitimate sites that hadn't been reported yet

The lesson: browser warnings are necessary but wildly insufficient on their own, particularly for the newest and most targeted attacks.

### A note on HTTPS and the padlock

I want to be blunt about this because I keep seeing people cite the padlock as a safety signal. It isn't. The padlock means:

1. The connection to whatever server answered is encrypted.
2. The certificate presented by that server is valid for the hostname in the URL, or the browser warned you.

That's it. A phishing site with a valid Let's Encrypt certificate for `paypa1-secure.com` earns the same padlock as your bank. In Chrome 117 and later, Google started explicitly labelling the padlock "Connection is secure" rather than anything resembling "this site is trustworthy," which is technically accurate but still confuses people.

## Technical Deep Dives for Suspicious Sites

When triage isn't enough, I go deeper. This is what that looks like.

### Inspecting TLS certificates

If a site's identity hinges on a certificate — say, a login page — check what the certificate actually says.

openssl s_client -connect suspicious-site.example:443 -servername suspicious-site.example </dev/null 2>/dev/null | openssl x509 -noout -subject -issuer -dates

What you're looking for:

- **Issuer.** A bank's real login page should not have a certificate issued by an obscure CA registered three weeks ago. Legitimate enterprise sites usually use DigiCert, Sectigo, GlobalSign, or Let's Encrypt for smaller operations.
- **Subject.** The CN or SAN should match the domain exactly. Wildcard certificates (`*.example.com`) are fine but don't cover `example.com` itself.
- **Validity dates.** Extremely short validity (a few days) isn't automatically bad — Let's Encrypt issues 90-day certs — but combined with a suspicious domain, it's a yellow flag.

### Checking WHOIS and registration age

Fresh domains are the single strongest signal of phishing. Most phishing domains live for less than 24 hours. WHOIS data varies by registrar and TLD — many now redact personal details by default — but creation date is almost always visible.

whois suspicious-site.example | grep -iE "creation date|created|registrar:"

Anything registered in the past 30 days deserves scrutiny. Anything registered in the past 48 hours deserves extreme suspicion unless it's obviously a legitimate new startup you already knew about.

For convenience, I often use `whois.domaintools.com` or the WHOIS lookup built into URLVoid, since some TLDs require jumping through hoops from the command line.

### Content inspection without visiting

If you want to see what's on a page without running its JavaScript, a few options exist:

**Google's cache** used to let you view any indexed page as Google's crawler saw it. Since Google removed the cache link in 2024, use the Wayback Machine instead — it's covered in more detail in my guide to [finding past versions of websites](/posts/search-past-website-versions-wayback-machine/). Wayback lets you inspect rendered content, links, and even the CSS from a snapshot, all without touching the live site.

**URLScan.io** is my favorite for this. Submit a URL and it renders the page in a sandbox, then shows you every network request, every script it loaded, and where redirects went. For a suspicious link, this is often enough to see the entire attack chain without ever visiting yourself.

## Cart Abandonment, Shopping, and E-Commerce Specifics

For shopping sites, the safety calculus shifts. You're not just avoiding malware — you're avoiding scams, dropshipping garbage, and stolen credit card operations. I've written before about a fake store that cost me $2,400, and the framework I built afterward lives in my [safe online shopping workflow](/posts/best-practices-safe-online-shopping/). The short version for the "is this site safe" question:

| Signal | Trustworthy | Concerning |
|---|---|---|
| Domain age | 2+ years | Under 6 months |
| Contact info | Physical address, phone | Email form only |
| Return policy | Detailed, specific | Copied boilerplate or missing |
| Reviews | Present on multiple independent sites | Only on-site, all glowing |
| Payment | Card processor (Stripe, Shopify) | Bank transfer, crypto, gift cards only |
| Product photos | Original, consistent lighting | Reverse-image-search hits on other stores |

That last one is worth its own workflow. Reverse-image-searching product photos catches a huge share of dropship scams because the same images appear on a dozen fake storefronts. My full technique is in the [reverse image search guide](/posts/how-to-reverse-image-search-verify-content/).

## Tools I Actually Use vs. Tools People Recommend

I've tested a lot of "check if a website is safe" tools. Some are great, some are repackaged WHOIS lookups with a nicer UI, and some are outright sketchy themselves. Here's my honest ranking.

**Worth installing:**

- **uBlock Origin** (Lite or full). Blocks the ad networks and malicious third-party scripts that most drive-by infections ride on. It's the single highest-leverage extension for browsing safety. I also covered it in my [Chrome extensions roundup](/posts/best-chrome-extensions-search-experience/).
- **Bitdefender TrafficLight** or **Malwarebytes Browser Guard**. Free, fast, and catches more than the browser's built-in Safe Browsing on its own.
- **VirusTotal browser extension**. Right-click any link for a scan without leaving the page.

**Worth knowing about but not installing:**

- **McAfee WebAdvisor, Norton Safe Web, and similar.** They work, but they're frequently pitched as add-ons during software installation, and the free versions nag you toward the paid product. Also, all of them send URLs you visit to their servers, which is a privacy tradeoff you should make deliberately. My thoughts on that tension live in the [incognito, VPN, and TOR guide](/posts/incognito-vpn-tor-private-searching/).

**Actively avoid:**

- Any "website safety checker" that requires you to enter the URL into a form hosted on a domain you've never heard of. You're giving your browsing data to an unknown third party in exchange for a check you could have done on VirusTotal.
- Chrome extensions that promise to "rate any website" but have fewer than a thousand installs and no privacy policy. Some of them are the attack.

## The Limitations of Every Approach

I want to be honest about where all of this falls short, because I've watched people over-trust their safety checks and get burned anyway.

**Reputation services lag.** A brand-new phishing domain that hasn't been reported yet will pass every check. The median lifespan of a phishing domain is measured in hours, and the median time it takes to land on a blocklist is longer. Fresh = dangerous, regardless of what the checker says.

**Visual inspection fails against sophisticated clones.** Some phishing kits pull the real site's HTML, CSS, and images in real time. The page looks identical, the padlock is there, the URL is *almost* right. Only careful URL inspection saves you here, and even then it's a game of attention.

**Sandboxing services can be fooled.** URLScan.io, VirusTotal, and similar services use known scanner IPs and user agents. Sophisticated attackers detect scanners and serve benign content to them while showing real visitors the payload. This is common in targeted attacks, less so in mass phishing.

**Your browser's Safe Browsing is opt-in for privacy.** Firefox, in particular, has moved toward local-only Safe Browsing in some configurations, which is better for privacy but slower to pick up new threats. There's a genuine tradeoff here and no universally correct choice.

**Nothing beats not clicking when your gut says no.** Every tool I've described is a backstop. The primary defense is a healthy skepticism about unsolicited links, especially ones that create urgency ("your account will be locked in 24 hours").

## A Workflow, End to End

Here's the whole thing compressed into a sequence you can actually run before your coffee gets cold:

1. **Add an email or calendar context check.** Is this link in a message that doesn't fit the sender's normal voice? Does it demand urgency? Does it come from someone you haven't heard from in years? See my [phishing recognition guide](/posts/how-to-recognize-avoid-phishing-scams/) if you want the full framework.
2. **Hover, don't click.** Read the destination URL out loud. Confirm the registered domain is what you expect.
3. **Expand any shortener** with urlex.org or `curl -sIL`.
4. **Run the bare domain through URLVoid.** If it's clean, move on. If it's flagged, stop.
5. **Check WHOIS creation date** if the site is new to you or the domain looks fresh.
6. **Reverse-search product images** if it's a shopping site.
7. **Visit in an isolated context.** A private window helps a little; a separate browser profile with no logged-in sessions helps a lot; a disposable VM is the gold standard if you're testing something actively suspicious.
8. **Never log in to a site you just verified.** If a site asks for credentials you didn't intend to provide, close the tab. The login page is often the entire point.

## When Something Still Slips Through

You will eventually visit something bad. It happens to everyone. What matters is what you do next.

- **Change passwords** for any account that might have been exposed. If you reused the password (don't), change it everywhere it appears.
- **Enable or verify 2FA** on the affected accounts. My full breakdown of the methods is in the [two-factor authentication guide](/posts/complete-guide-two-factor-authentication-2fa/).
- **Run a malware scan.** Windows Defender is genuinely good now. If you want a second opinion, Malwarebytes Free covers the usual suspects.
- **Check for unwanted browser extensions.** Malicious extensions are a common follow-on. Review your extension list in `chrome://extensions` and remove anything you don't recognize.
- **Monitor your accounts** for unusual activity for the next few weeks. Credit card charges, login attempts, anything out of pattern.

## A Final Note on the Trade-offs

Every safety measure costs something. Browser reputation services ship every URL you visit to a vendor's servers. Extensions with site-rating features often do the same. WHOIS lookups are logged by the registry. URL expanders see every link you're curious about. VPNs see everything unless you trust them completely.

I'm not arguing against any of these. I use most of them. But I want you to make the trade-off knowingly rather than assuming that "safer" comes without cost. My rule is simple: the more sensitive the browsing context, the fewer third-party services I let see it. For casual link-checking, the convenience wins. For anything related to work credentials, banking, health, or identity, I lean hard on local tools and my own judgment.

The single biggest gain is still the habit, not the toolset. Read URLs out loud. Hover before you click. Treat urgency as a red flag. If you internalize nothing else from this piece, internalize that — everything else on the list is a helper, not a substitute.
