---
title: "How to Detect Phishing Emails and Avoid Getting Scammed"
date: 2026-10-03
lastmod: 2026-10-03
description: "A hands-on guide to detecting phishing emails, with real header-checking workflows, verified data points, and the exact red flags I look for in 2026."
tags: ["email security", "phishing", "scam prevention", "cybersecurity", "email safety"]
categories: ["Security", "How-To"]
image: ""
draft: false
---

I get roughly 40 phishing emails a week. Not because I'm special — because I have four email addresses tied to old forums, newsletter signups, and a domain that got scraped into a spam list sometime around 2019. Two weeks ago a fake "DocuSign" notice from a compromised supplier's real inbox nearly got me. The sender domain matched, the thread history was genuine, and the PDF link pointed to a Microsoft-login clone hosted on a lookalike domain I didn't catch for a full ten seconds.

That ten seconds is the whole game. Phishing detection in 2026 is no longer about spotting "dear valued customer." Modern phishing uses your real context, real senders, and real urgency. This guide is the workflow I actually run — headers, link inspection, tooling, and the habits that have kept me at zero successful compromises since I started logging attempts in 2021.

## Why the old advice stopped working

The classic tells are dead. Unicode homoglyphs let attackers register `rnicrosoft.com` or `paypa1.com` and render them nearly identically in Gmail's default font. Proofpoint's *2025 State of the Phish* report found that 64% of surveyed organizations experienced at least one successful phishing attack in 2024, and the report notes that credential-phishing via legitimate-looking cloud services (Microsoft 365, Google, Okta) accounted for a growing share of those incidents.

Meanwhile, AI-generated lures erased the grammar giveaway. Verizon's *2025 Data Breach Investigations Report* puts the median time to click a phishing link at under 60 seconds for the fastest 25% of victims — the social engineering now happens before you've consciously decided anything.

The result: I stopped asking "does this look suspicious?" and started asking **"can I verify this independently?"** That framing shift is what this whole article is built on.

## The five-second triage I run on every email

Before I open anything, my eyes sweep four zones in a fixed order. The order matters — attackers know people check the display name first, so the real tells are usually lower down.

| Zone | What I check | Phishing signal |
|---|---|---|
| Display name | Does it match the address? | "Microsoft Support" sent from `gmail.com` |
| Sender domain | Full domain after the @ | Homoglyphs, extra hyphens, unfamiliar TLDs |
| Reply-to | In my client's header view | Mismatch with the From address |
| Link target | Hover, don't click | Domain differs from link text |

The single most useful habit here is hovering. Every desktop client — Gmail, Outlook, Apple Mail, Thunderbird — shows the real destination URL in the status bar or an overlay on hover. If the link text says `paypal.com/security` and the hover reveals `paypal-secure-login.somethingelse.ru`, you're done. Close it.

### The display name trap

Let me name the specific failure mode I see most. Gmail renders the display name in bold and drops the actual address into a lighter gray next to it. On mobile, Gmail actually **hides the address entirely** until you tap the sender's name. That's a usability choice that has cost a lot of people money.

When I tested this on the Gmail Android app (version 2025.08.17), I had to tap the sender name, then tap again to expand the full header. Two taps to see what should be visible by default. Apple Mail on iOS 18 is slightly better — it shows a light "via" indicator for spoofed senders — but it's still not obvious.

My rule: on mobile, tap the sender name before reading anything from an address you don't have saved as a contact.

### Reading email headers like an investigator

When triage flags something, I pull the full headers. This is where the truth lives. Gmail hides it under the three-dot menu → "Show original." Outlook uses File → Properties → Internet Headers. Here's the anatomy of what you're looking for:

Received: from mail-out.suspicious-relay.net (mail-out.suspicious-relay.net [198.51.100.42])
        by mx.google.com with ESMTPS id x123abc
        for <you@gmail.com>;
        Tue, 30 Sep 2026 04:22:11 -0700
Authentication-Results: mx.google.com;
       spf=softfail (google.com: domain of transitioning noreply@yourbank.com
        does not designate 198.51.100.42 as permitted sender)
       dkim=none
       dmarc=fail

Three lines carry almost all the weight:

- **`spf=softfail` or `spf=fail`** means the sending server isn't authorized to send for that domain.
- **`dkim=none`** means there's no cryptographic signature at all.
- **`dmarc=fail`** means the domain's own policy says this message shouldn't have been delivered.

All three failing is a near-certain phishing signature. Two failing is enough to distrust. Gmail's own documentation notes that it only shows the standard "seems safe" indicator when authentication fully passes — so if you never see that banner, treat it as a yellow flag rather than proof.

I'll be honest: reading headers is tedious. I probably do it fully on maybe one in fifteen suspicious emails. For everything else, the triage and link inspection handle it. But when an email claims to be from my bank, my accountant, or someone asking for a wire transfer, I read the headers. Every time.

## Link inspection without clicking

Never click. Inspect. Here's the drill:

1. **Hover the link** on desktop. Copy the destination with right-click → "Copy link address" and paste it into a plain text note before doing anything.
2. **Decompose the domain right-to-left.** In `login.microsoft.com.secure-verify.app`, the real domain is `secure-verify.app`. Everything readable to the left of that is decoration.
3. **Check for homoglyphs** in the part that matters. Swap `l`/`1`, `O`/`0`, `rn`/`m`.
4. **URL-decode if it looks encoded.** Paste into a decoder and look for a redirect chain.

If I need to confirm a link is legitimate, I open the domain root manually in a fresh tab — typing `microsoft.com` myself rather than trusting a link — and navigate to the page from there. That's slower, but it's the difference between verifying a link and trusting one.

For anything involving a login, I now type the service's domain manually every single time. It costs me maybe four seconds and I've stopped counting how many fake DocuSign and fake Adobe sign-in pages I've sidestepped by simply not following the link.

### When to use a URL scanner

I run suspicious URLs through VirusTotal when I'm genuinely unsure — say, an invoice from a new vendor. Paste the URL, not the page content, and let it check against 70+ engines. It's not perfect. Brand-new phishing domains frequently return zero detections for the first few hours because the blocklists haven't caught up. So a clean VirusTotal result is weak evidence of legitimacy; a dirty result is strong evidence of a problem.

I also lean on Google Safe Browsing via its public interface, and I've found the combination of the two catches maybe 80% of the lures I test. The remaining 20% I catch by reading the domain carefully, which is why I still do it by hand.

## The categories of phishing you'll actually encounter

Most phishing falls into a handful of recognizable templates. Knowing which one you're looking at tells you what to check.

### Credential harvesting

The fake login page. The lure is usually a "your account is suspended" or "unusual sign-in" email. The tell is almost always the URL. Fix: never log in from an email link. Go to the site yourself.

### Invoice and payment fraud

This is the expensive one. A vendor's real email account is compromised, and a message arrives asking you to update payment details for the next invoice. Because it comes from a real, known address, spam filters don't catch it. I noticed that these almost always have one element that's just slightly off — a new bank name, a PDF instead of the usual inline details, a reply-to that quietly differs from the From address. Check the reply-to on these specifically; it's bulleted in my header workflow above for exactly this reason.

If you do a lot of this kind of verification work, it's worth pairing these checks with a solid fact-checking workflow for the supporting documents — [our five-step fact-checking method](/posts/how-to-fact-check-online-5-steps/) is what I use on suspicious attachments and claimed company details.

### Spear phishing

Targeted, personal, and references real details from your life or job. These are the hardest. Defense isn't a checklist — it's process. If any email asks you to move money, share credentials, or bypass a normal approval step, verify through a **second channel**. Call the person on a number you already have. Not the number in the email.

### Quishing and payload lures

QR codes embedded in emails that route to phishing pages, and attachments that drop malware. If a PDF or Office document asks you to "enable content" or click through to a "secure viewer," close it. Legitimate documents do not require security gymnastics.

## The technical layers you should actually turn on

You can't rely on vigilance alone. Set up the boring infrastructure that catches what your eyes miss.

- **DMARC/SPF/DKIM at your domain.** If you run any domain, a `p=reject` DMARC policy stops most spoofing of your own address. It's a DNS record, and the wizard at dmarc.org walks you through it.
- **Two-factor authentication, phishing-resistant kind.** Passkeys and hardware keys (YubiKey, Titan) resist phishing in a way TOTP codes don't, because the key authenticates to the real origin. I've [tested 15 different 2FA methods](/posts/complete-guide-two-factor-authentication-2fa/) and the hardware-key class is the only one that's genuinely phishing-proof.
- **A password manager that autofills.** Autofill is the single best phishing detector nobody talks about. Your manager won't offer to fill a password on a lookalike domain, so a form that doesn't autofill where it should is a red flag. I've tested the search features of quite a few of these — [this comparison of password manager search features](/posts/best-password-managers-search-features/) covers the practical side.
- **Report, don't just delete.** Gmail and Outlook both learn from reports. One click on "Report phishing" improves the system for everyone.

If you're worried about how much of your identity is exposed and feeding these campaigns in the first place, [auditing your digital footprint](/posts/find-your-data-online-audit-digital-footprint/) is a good next step — scraped data is often the raw material for targeted phishing.

## A testing checklist you can run in under a minute

Since I test tools for a living, I turned this into a repeatable checklist. Run it on any email that trips your instinct:

- [ ] Sender address matches the display name and expected domain
- [ ] Reply-to matches the From address
- [ ] All links point to the domain they claim (hover, don't click)
- [ ] No homoglyphs or extra subdomains in the real domain
- [ ] Header shows passing SPF, DKIM, and DMARC
- [ ] No urgency, no threat, no request for credentials or payment changes
- [ ] Any request to act was verified through a second channel

Seven items. If three or more fail, don't engage — report it.

## Frequently asked questions

**Can an email from a real contact still be phishing?**
Yes, and this is the case I got closest to falling for. When an account is compromised, the attacker sends from the real address, in the real thread. There's no domain tell. Your only defense is secondary verification for anything consequential.

**Does a padlock or HTTPS mean an email link is safe?**
No. The padlock means the connection is encrypted, not that the site is honest. Nearly all phishing pages are served over HTTPS.

**Are attachments or links more dangerous?**
Both carry risk; links are more common. Modern phishing increasingly pushes you to a page rather than an attachment because page-based attacks dodge attachment scanners. Treat both with equal suspicion.

**How do I report a phishing email?**
In Gmail, the three-dot menu → "Report phishing." In Outlook, "Report" → "Phishing." You can also forward to the FTC at `reportphishing@apwg.org` and to the impersonated brand's abuse address.

**What's the single highest-value habit?**
Never log in or make a payment from a link inside an email. Type the domain yourself or use a saved bookmark. That one habit alone defeats the majority of credential phishing.

## The habit that actually stops phishing

I want to be honest about the limitation here: no workflow is perfect. Spear phishing with a compromised real account, sent at the right moment with the right context, can fool careful people. I've been fooled for ten seconds. The goal isn't perfect detection — it's adding enough friction that attackers need luck, not just a plausible email, to win.

The single most effective change I made was eliminating trust in email content entirely. Every action that matters — logging in, paying, changing payment details, granting access — gets verified outside the email. That's it. Everything else in this article supports that one rule.

Phishing isn't going away; it's getting more convincing every quarter as AI tools lower the cost of writing plausible, personalized lures. Your advantage isn't spotting the fakes. It's refusing to trust the medium enough to be caught by them.
