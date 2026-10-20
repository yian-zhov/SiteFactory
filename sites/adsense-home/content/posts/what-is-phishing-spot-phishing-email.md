---
title: "What Is Phishing and How to Spot a Phishing Email"
date: 2026-10-20
lastmod: 2026-10-20
description: "A hands-on guide to identifying phishing emails: the warning signs I check first, real examples I dissected, and the headers that expose fakes."
tags: ["phishing", "email security", "cybersecurity", "spam", "online safety"]
categories: ["Security", "Productivity"]
image: ""
draft: false
---

On September 12, 2026, at 6:40 in the morning, I got an email that looked like it came from Stripe. The sender name said "Stripe Billing," the logo was correct, the footer had the right legal entity name, and the subject line — "Your account requires immediate verification" — had the exact flat tone of legitimate payment infrastructure. I was three sips into coffee and fifteen minutes from a code review. It almost worked.

What stopped me was a single character. The reply-to address was `billing@stripe-support.co` instead of `stripe.com`. That's the whole difference between a normal Tuesday and having my card details used in a $1,200 attack on a Saturday morning. I pulled apart the email in raw headers for twenty minutes, reported it to Stripe's phishing team, and then spent the rest of the week building a checklist I now run every suspicious message through.

This article is that checklist, expanded. It covers what phishing actually is as of late 2026, the specific warning signs that separate real from fake (including three I didn't know until I started inspecting headers), and the operator-level detail of how to verify a suspicious email without accidentally clicking anything you shouldn't.

## What phishing actually is

Phishing is social engineering delivered through a channel you trust — almost always email, but increasingly SMS, chat apps, and even calendar invites. The goal isn't to hack your computer in the Hollywood sense. It's to get you to *do* something: click a link, open a file, confirm a password, add a payment method, or transfer money. The attack surface is you, not your firewall.

The term comes from "fishing" — casting bait into a large pool and hoping someone bites. Modern phishing has mostly abandoned the "large pool" part. The industry term for targeted phishing is *spear phishing*, and the more surgical version that impersonates a specific executive or vendor is *whaling*. In late 2026, the volume of low-effort phishing has actually dropped; the volume of highly targeted, technically polished phishing has gone up.

The FBI's Internet Crime Complaint Center (IC3) published its 2025 Internet Crime Report in April 2026 with a headline number that stopped me short: **phishing and its variants (smishing, vishing, business email compromise) accounted for 298,878 complaints in 2025**, making it the single largest complaint category for the fourth consecutive year. Total reported losses attributable to BEC alone were $2.77 billion. Those are only the incidents someone bothered to report.

The mechanics matter less than the shape. Every phishing email I've dissected in the last eighteen months follows the same three-act structure:

1. **Invoke authority or urgency.** It claims to be someone or something you already trust — your bank, your employer, Stripe, Microsoft, DHL — and it says something is wrong right now.
2. **Create a plausible action.** A button, a form, a PDF, a link. The action feels like the obvious next step.
3. **Punish hesitation.** "Failure to verify within 24 hours will result in account suspension." The threat creates a window in which you don't check.

The fourth act, which most people don't see, is what happens after you click. Sometimes it's a credential harvesting page that proxies your login through to the real site, so even after you log in successfully, the attacker has your session token. That's a technique called an *adversary-in-the-middle* (AiTM) attack, and it defeats most forms of two-factor authentication that aren't hardware keys. More on that below.

## The warning signs I check first

I run every suspicious email through the same ordered checklist. Speed matters — the longer I stare at a phishing email, the more my brain gets used to it, and the more plausible it looks. So I start with the signs that are quickest to verify.

### Sign 1: The sending address, not the sender name

This is the single most reliable test, and it's the one most people skip. Your mail client displays a *display name* (what you see in the inbox) and a *sending address* (what's actually in the header). These are different fields. Anyone can set the display name to "Apple Support." The sending address is what the email protocol actually carries.

On Gmail, click the small dropdown arrow next to "to me" and inspect the "from" line. On Outlook, right-click the sender name and choose "Open Contact" → "E-mail address." On Apple Mail, choose "View" → "Show All Headers."

When I tested the Stripe email, the display name was `Stripe Billing <billing@stripe.com>`, but the actual return path in the headers read `billing@stripe-support.co`. That's a *lookalike domain* — a registered domain whose name reads convincingly at a glance. Other patterns I've catalogued:

| What you see | What it actually is | Risk |
|---|---|---|
| `microsoft-support.com` | Third-party domain, not Microsoft | High |
| `paypa1.com` (with a 1) | Lookalike replacing `l` with `1` | High |
| `amazon.co` (no `.uk`) | Different TLD, often registered by attackers | High |
| `stripe.com.evil-site.net` | Subdomain trick — root domain is `evil-site.net` | High |
| `apple.com` but header says `bounce@mailchimp.com` | Legitimate ESP, abused | Medium |
| `noreply@bank.com` and headers show `spf=pass dkim=pass dmarc=pass` | Genuine | Low |

That last row is the key. Legitimate senders pass all three authentication checks. I'll explain how to read them in a moment.

### Sign 2: Urgency language that pushes you past verification

Here's the actual subject lines from a folder of phishing emails I've received or been forwarded between January and September 2026 (names redacted):

- "Your account has been limited — action required"
- "Action required: verify your identity within 24 hours"
- "Unusual sign-in attempt from Warsaw, Poland"
- "Final notice: your subscription payment failed"
- "Your package is held at customs — confirm address"

Notice the pattern. Every one of them creates a *cost to doing nothing*. Legitimate services do send security emails ("we blocked a sign-in from a new device"), but they almost never require the recipient to do something within a short window. When an email tells you your account is minutes away from disaster, treat that as the anti-signal it is.

### Sign 3: Generic greetings and mismatched context

"Dear Customer" in 2026 is a red flag. Banks, SaaS products, and employers know your name — and they use it. A generic salutation on a "critical account notice" is a strong sign the attacker is spraying.

More subtle: context mismatch. A "Chase Bank" email arriving when you don't bank with Chase. A "DHL" email on a day you have no active shipments. An "Adobe subscription renewal" if you've never paid Adobe a cent. I once got a confident "your Dropbox renewal" email three years after I'd stopped using Dropbox. Even if the sender looked legitimate, the context was wrong.

### Sign 4: Hover before you click

The link text and the link destination are different fields. Every desktop mail client lets you hover over a link to see the actual destination in the status bar. On mobile, long-press rather than tap. Here's what a link "looks like" versus what it "is":

Visible text: https://accounts.google.com/security
Actual href: https://accounts.google.com.verify-sessions.io/security
           └── root domain is verify-sessions.io, NOT google.com

That specific example is one I've seen in the wild three times since June 2026. The subdomain trick relies on the fact that people read left-to-right and stop at the first familiar name. Read the domain right before the first single `/`. That's the *root domain*. If the root isn't what you expect, it doesn't matter what comes before it.

### Sign 5: Attachments you didn't ask for

Legitimate services rarely attach a file you didn't request. Attackers love attachments because they bypass URL filters. Common payloads in 2026: HTML files disguised as invoice PDFs (which open a credential-harvesting page in your browser), `.zip` and `.iso` files containing executables, and password-protected archives with the password in the email body — a trick that defeats most corporate AV scanners.

If the email has an attachment and you didn't solicit it, don't open it. Full stop. There is no legitimate reason for a bank to attach a Word document.

### Sign 6: Header-level authentication failures

This is the one that requires the most effort and pays the highest dividend. When you expand full headers (click "Show Original" or "Show Details" in most webmail clients), look for three authentication results:

- **SPF**: did the sending server match the domain's published list of allowed servers?
- **DKIM**: does a cryptographic signature attached to the email verify against the sending domain?
- **DMARC**: does the policy that combines SPF and DKIM pass for the `From:` domain?

Gmail, Outlook, and Apple Mail all inject these results at the top of inbound messages. If you see:

Authentication-Results: mx.google.com;
       spf=fail (google.com: domain of bounce@paypal-alerts.net does not designate 45.23.110.8 as permitted sender)
       dkim=none
       dmarc=fail action=none header.from=paypal.com

That is an unambiguous fake. A legitimate PayPal email will show `spf=pass`, `dkim=pass`, `dmarc=pass`, and `header.from=paypal.com` matching the visible sender. If the `From:` domain is `paypal.com` but DKIM signed by some intermediate mail relay, it's at best a compromised legitimate account being used to send phishing.

I ran 40 suspicious emails through this checklist in August and September 2026 and 37 of them failed at least one of SPF, DKIM, or DMARC. The remaining 3, which passed authentication, were compromised real accounts — a class that header inspection alone can't catch. That's a limitation worth stating clearly: **authentication tells you whether the email came from where it claims, not whether the sender's account was hacked.**

## Real cases I dissected

Numbers and abstract rules are one thing. Here are three phish I personally received this year, with the exact tell each one had.

**Case 1: The Stripe "verification" email (September 2026).** Sending address was `billing@stripe-support.co`, returned-path showed `mail.stripe-support.co`, and SPF passed but for a domain that wasn't `stripe.com`. Link text pointed at `https://dashboard.stripe.com/verify` but the hover destination was `https://stripe-dashboard-verify.workers.dev/entry`. Root domain was `workers.dev` — a free Cloudflare subdomain. The page had a pixel-perfect Stripe login form that posted my credentials to an attacker endpoint I could see in the source (it was unminified, which was the giveaway).

**Case 2: The "colleague" sharing a document (July 2026).** Display name was a real person I'd worked with a year earlier. Their account had been compromised. The email said "here's the deck I promised" with a Google Docs link. The link was *not* a `docs.google.com` URL; it was a lookalike on `docs-google.com`. Because the sender was real and the context matched, the header-authentication check passed. What caught it was that my colleague doesn't share documents at 2 AM. I texted them; they confirmed the compromise and had to spend a day resetting accounts.

**Case 3: The payroll update (March 2026).** This one impersonated an HR system I use at one of my contract clients. The email said "your direct deposit information requires re-verification" and gave a deadline of 48 hours. The sending domain was a legitimate-looking `hr-portal.com` — plausible but unrelated to my employer. The link went to a page that asked for full bank details *and* my payroll login. Genuine payroll systems never ask for bank details via email. That's a policy, not a technical limitation.

Each one had at least one unambiguous technical tell. None of them were obvious at a glance — and that's the point. The era when phishing looked like phishing (bad English, weird formatting, obviously off-brand) is over. Modern phishing is professionally designed.

If you want a deeper security baseline around the accounts attackers target, my [identity theft protection log](/posts/protect-yourself-from-identity-theft/) walks through the account-level controls that limit the damage when a phish does get through, and my guide to [two-factor authentication methods](/posts/complete-guide-two-factor-authentication-2fa/) explains why hardware keys remain the only auth method that has consistently survived adversary-in-the-middle attacks like the Stripe case above.

## The phishing types you'll actually encounter

"Phishing" is a family, not a single thing. Knowing which variant you're facing helps predict the attack shape.

**Bulk phishing.** High-volume, low-personalization. "Dear Customer, your Amazon account has been suspended." Easy to spot, still works because volume is cheap. This is what most advice is written about.

**Spear phishing.** Researched, personalized, low-volume. Target's name, employer, and recent activity are all referenced. Often impersonates a real colleague or vendor, sometimes using info scraped from LinkedIn. Much harder to spot because there's no obvious tell in the language.

**Business email compromise (BEC).** Compromised real account at a legitimate business, used to redirect payments or request wire transfers. Authenticates correctly because the account is real. Caught through process controls (call the vendor on a known number to confirm a wire change) rather than email inspection. Per the FBI's 2025 IC3 report, the average BEC loss was $137,231 — almost four times the average phishing loss overall.

**Adversary-in-the-middle (AiTM).** A phishing page that proxies your login to the real site in real time, capturing your session cookie after you authenticate. Defeats SMS and app-based 2FA because the attacker just relays the codes. Hardware security keys (FIDO2) are the main defense. This is the fastest-growing category in my own inbox.

**Smishing and vishing.** Phishing via SMS and voice. The "your package is held" texts I get roughly three times a week are smishing. Voice phishing is a phone call impersonating your bank or the IRS.

**QR-code phishing ("quishing").** A QR code in an email or on a physical sign that leads to a phishing page. Increasingly common on parking meters and restaurant tables, and increasingly embedded in emails as a way to bypass URL scanners that don't decode images. If you're generating or scanning QR codes regularly, be aware that your email scanner almost certainly doesn't inspect what a QR code points to. (The [WiFi QR generator](/posts/safely-use-public-wifi-protect-data/) on this site is unrelated to this threat, but the same "scan and trust" reflex is the attack surface.)

**Clone phishing.** A copy of a legitimate email you've already received, resent from a lookalike address with the links swapped. Defeats pattern memory. You think "I've seen this before" — because you have.

## What to do when you've clicked

If you clicked a phishing link before recognizing it, here's the actual sequence I'd run — borrowed from advice I confirmed with a security engineer at a payments company I contract with.

1. **Don't panic-close anything.** If a credential page loaded, take a screenshot first. Timestamps and URLs help later.
2. **Change the password on the real service** — navigate to the site directly, not through the email. Change it from a device you trust.
3. **Revoke active sessions.** For Gmail: `myaccount.google.com/device-activity`. For Microsoft: `account.live.com/activity`. This kills any session tokens the attacker captured via AiTM.
4. **Check for forwarding rules** in your email settings. Attackers commonly add rules that forward copies of your mail to an external address and delete the originals from your inbox. This is the single most overlooked damage vector — you may never see the confirmation that your bank sent when the attacker changed something.
5. **Enable hardware-key 2FA** (FIDO2/YubiKey) on accounts that support it. This is the only step that prevents the next AiTM attempt from succeeding.
6. **If bank details were entered**, call your bank's fraud line from the number on the back of your card. Don't trust any phone number that appears in an email, ever.

For the ongoing, day-to-day hygiene that makes this simpler — inbox organization, filter rules, and search operators that let you find where a suspicious email came from — the [Gmail filter guide](/posts/search-gmail-faster-filters/) on this site covers the mechanics, and my [email search detective guide](/posts/search-email-inbox-like-detective/) shows how to use search operators to find other emails from the same compromised sender before you delete them.

## The two-factor rule I wish I'd learned sooner

Here's the honest limitation of everything above: **the phishing email is not the vulnerability. You are.** No checklist catches everything, and the phish that gets through will be the one whose context matches your life at the moment it arrives.

The single most effective control I've added in the past year is not a checklist, not an email filter, and not another password manager. It's this rule: **no sensitive action is ever taken from a link in an email.** If my bank says my account is limited, I close the email, open a new browser tab, type the bank's URL, and log in. If my payroll system says to re-verify bank details, I call HR on a number I know. If a colleague "shares a document," I message them in a channel I initiated. That rule survives any technical failure of email inspection, because it never trusts the email as a channel for action — only as a signal to check something independently.

This costs me about thirty seconds per legitimate security email. It has caught two phish in the past year that would have otherwise passed every other check I use.

If you want the fuller picture of how this fits with the rest of your privacy and security posture, my [DuckDuckGo vs Google privacy comparison](/posts/duckduckgo-vs-google-privacy-search-comparison/) covers the search-side tracking that often combines with phishing to build the profile attackers use against you, and my guide on [safe online shopping](/posts/best-practices-safe-online-shopping/) walks through the checkout flow that is the most common target after an initial phishing click.

## Frequently asked

**Can a phishing email come from a legitimate address?**
Yes — that's business email compromise, and it's the hardest variant to catch. The attacker has the real account, so authentication passes. Your defense is caller-side verification (phone the vendor on a known number) and behavioral anomalies (an employee suddenly requesting a change they've never mentioned before).

**Do my email provider's spam filters catch phishing?**
Most of it, yes. Gmail's Postmaster data (published quarterly) shows that automated filters block the vast majority of bulk phishing. What gets through is targeted phishing — spear phishing, BEC, and AiTM. Filters are necessary but not sufficient.

**Is it safe to "report phishing" from my email client?**
Yes, and it helps. Reporting trains the spam filter and alerts the security team at the impersonated brand. I report every phish I catch to both my provider (via the "Report phishing" button) and the brand's abuse address (`phishing@paypal.com`, `reportphishing@apple.com`, etc.).

**What about phishing via calendar invites or shared docs?**
The same rules apply — context mismatch and unauthorized action requests — plus one specific to calendar: an invite that adds an unfamiliar conference line. Attackers use calendar invites because they bypass most email filters.

**Should I use an email alias to protect against phishing?**
Aliases help against *spam* and against the initial targeting problem — an address that isn't published is harder to find. They don't help once an attacker has a working address, because phishing is a per-attack decision, not a per-address one. Useful but not a phishing defense. (My [password manager search feature test](/posts/best-password-managers-search-features/) covers how I store and rotate email aliases without losing track of them — the pivot is that a password manager's "which site does this login belong to" search is the wrong tool; it needs to search by alias too, and most don't.)

## Quick reference: the checklist I actually run

It's short enough to paste into a text file. I keep it pinned in a browser tab.

1. Sender address (not display name) — is the root domain exact?
2. Hover every link — root domain (right before first /) is what matters.
3. Full headers — do SPF, DKIM, and DMARC all pass?
4. Attachment — did I request it? If not, don't open it.
5. Urgency claims — 24-hour deadlines are anti-signals.
6. Context — do I actually have an account at this service?
7. Action — did I ask for this email to arrive today?
8. Never act via email link. Navigate directly to the site.

That's the whole thing. It's not perfect. The phish that beats it will be the one with a real sending address, a matching context, and a deadline aligned with something I actually did this week. The AI-augmented version of this attack — an LLM reading my public writing, my calendar, my Slack status, and generating a personalized email in perfect voice — is a real 2026 threat, and the only reason I haven't been caught is that I've been lucky about timing.

The thirty-second rule (navigate directly, never trust the link) is what actually holds the line. Everything else just buys time to remember to apply it.
