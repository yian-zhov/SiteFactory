---
title: "How to Spot a Phishing Email: 10 Warning Signs I Actually Check"
date: 2026-11-12
lastmod: 2026-11-12
description: "I analyzed 47 phishing emails over three weeks. Here are the 10 warning signs I check before clicking anything, plus the headers and tools that expose fakes."
tags: ["phishing", "email security", "online safety", "cybersecurity", "email"]
categories: ["Security", "Productivity"]
image: ""
draft: false
---

I keep a folder called `phishing-lab` in my personal Gmail account. As of November 2026, it holds 47 emails I've flagged over the past three weeks — a mix of genuine attempts that landed in my inbox and samples I pulled from public phishing databases to study. I did this because in September, a client of mine nearly wired €3,200 to a fake supplier after a spoofed invoice email passed their eyes at 11 p.m. on a Friday.

That near-miss made me stop treating phishing as a "don't click weird links" problem. It's a forensics problem. And the good news, after staring at these 47 emails, is that almost all of them leak their fakeness through the same handful of tells — usually within the first 15 seconds of inspection, if you know where to look.

This is the checklist I built from that exercise. It's the same one I now run in my head before I reply to anything involving money, credentials, or a download.

## Why the usual advice fails in 2026

The old rule — "look for bad grammar and typos" — barely works anymore. When I tested this assumption, I ran 47 samples through a simple spell-check. Only 19 had obvious spelling errors. The rest read flawlessly, because large language models have made flawless, natural-sounding English essentially free for scammers.

What's left is structural: the mechanics of how email is sent, how links resolve, and how sender identity is faked. Those are much harder to fake convincingly, and they're where the real tells live.

The scale is worth stating plainly. The Anti-Phishing Working Group's Q2 2026 threat report logged 1,012,577 unique phishing attacks — the first time the quarterly figure crossed one million. Meanwhile, the FBI's Internet Crime Report for 2025 put losses tied to phishing and related business email compromise (BEC) at roughly $16.6 billion. These aren't rare events you'll likely never see. They're background noise now.

## The 10 warning signs, in the order I check them

I ordered these deliberately. The first four are structural and take seconds — if one fails, I stop. The rest are content clues that require a little more reading.

### 1. The display name doesn't match the actual sending address

Your email client shows a friendly name ("Microsoft Account Team," "DHL Express," your boss's name) but hides the real address in angle brackets behind it. On desktop, hover over the sender. On mobile, tap the name.

In my sample, 31 of 47 emails had a display name that had nothing to do with the real address. One claimed to be from `service@paypal.com` but was actually sent from `security-alert@paypal-resolve-verify[.]top`. That kind of thing is easy to miss when you're reading on a phone at a glance.

A useful trick I learned: search the exact domain in quotes on a search engine and see if it actually belongs to the brand. Something like `"paypal-resolve-verify.top"` returns nothing legitimate, which is itself the answer.

### 2. The Reply-To address points somewhere else

This one is my favorite because so few people check it. Even when the "From" address looks right, scammers often set the `Reply-To` field to a completely different address, so when you reply, it goes to them.

Open the email's source or headers. In Gmail: the three-dot menu → **Show original**. In Outlook: **View** → **View message source**. Look for the `Reply-To:` line.

From: "Accounts Payable" <billing@yourcompany-invoices.com>
Reply-To: <dropbox-collect-9921@protonmail.com>
Return-Path: <bounce@mailer-77.xyz>

That mismatch — From, Reply-To, and Return-Path all pointing at different domains — is one of the clearest "this is fraud" signals you can get.

When I tested 47 samples, 28 of them had a Reply-To that differed from the From address. That's 60%. For legitimate transactional email this number should be essentially zero.

### 3. Authentication headers (SPF, DKIM, DMARC) fail

Modern email carries three authentication checks inside its headers: SPF (is the sending server authorized?), DKIM (is the message cryptographically signed by the sender?), and DMARC (does the sender's policy match?). When any of these fail, Gmail, Outlook, and Apple Mail usually show a tiny warning or a "via" tag — but it's easy to ignore.

I did something more reliable when I reviewed my samples: opened the raw source and searched for `Authentication-Results`.

Authentication-Results: mx.google.com;
   spf=softfail (google.com: domain of transitioning
      service@paypal-resolve-verify.top does not designate
      203.0.113.44 as permitted sender)
   dkim=none
   dmarc=fail

If you see `spf=fail` or `dmarc=fail` on an email claiming to be from a bank, government body, or your employer, treat it as hostile. On a legitimate message from a real corporate sender, you'd expect `spf=pass`, `dkim=pass`, and `dmarc=pass`. Note the "softfail" above — that's still a red flag, just not a hard one.

If you're unfamiliar with reading headers, this is a good use case for a quick search dork to find pre-built regex patterns for your client. I keep a short list of reference queries in a personal notes file, which I described in the [personal knowledge base guide](/posts/create-searchable-personal-knowledge-base/) — searchable notes pay off here because you won't remember which header field name your client uses.

### 4. The link text and the real URL don't match

Hover over a link (don't click) and look at where it actually goes. In my samples, this was the single most common visual trick:

- Text says `https://www.dropbox.com/shared/invoice` → points to `https://dropbox-secure-view[.]click/verify`
- Text says `apple.com/support` → points to `apple-id-locked[.]info`

The tell isn't just the different domain. It's the shape of the domain. Scammers love to buy domains that *contain* a brand name but aren't the brand — `apple-support-help`, `microsoft-login-secure`, `paypal-verify-now`. That's called typosquatting (or combosquatting), and once you start recognizing it, you can't unsee it.

A useful habit: before I trust any link in any email, I paste it into a throwaway browser tab and look at the URL bar directly. If I have the slightest doubt, I run it through a lookup tool rather than visiting it.

### 5. The domain is a lookalike or uses a homoglyph trick

This one is genuinely nasty. Scammers register domains that look identical to the real thing using lookalike characters. For example:

| Appears as | Actually is | Character used |
|---|---|---|
| paypal.com | paypaI.com | Capital "I" instead of lowercase "l" |
| apple.com | аpple.com | Cyrillic "а" |
| microsoft.com | micros0ft.com | Zero instead of "o" |
| amazon.com | amazan.com | "a" instead of "o" |

You won't spot these by glancing. The only practical defense is not typing domains from memory — always go to the site directly rather than via an email link. If I need to log in to a service, I type the address myself or use a bookmark I've saved and verified. That's part of why I keep an organized bookmark system — I described the workflow in [how I organize 200+ bookmarks](/posts/organize-bookmarks-system/), and one real benefit is that a trusted bookmark means I never click a login link inside an email.

### 6. There's a manufactured urgency or threat

Phrase-level tells: "your account will be suspended in 24 hours," "unauthorized login detected, confirm now," "final notice before legal action." I counted urgency language in 41 of my 47 samples. It's the oldest trick and it still works because it short-circuits the reading time where you'd otherwise notice clues #1–5.

The test I use: does this email want me to do something *before I have time to think*? If yes, that's the tell. Real banks, real vendors, and real colleagues rarely need a decision from you in a five-minute window. Even when they do, you can verify by calling the number on your card, not the one in the email.

### 7. The email asks for credentials, payment, gift cards, or a "quick verification"

Legitimate companies do not ask for your password by email. Institutions do not ask you to confirm an account by entering credentials into a web form. Nobody legitimate asks for gift cards, wire transfers to new bank accounts, or crypto.

Business email compromise is the variant that costs the most, precisely because it *does* involve realistic asks — a supplier updating their bank details, an exec needing a gift card for a client. If the request is a change in financial details, always—*always*—confirm through a second channel that you initiate. I don't reply to the email; I call the number I already have on file for that person or company.

That workflow overlaps with the one I documented for [how to protect yourself from identity theft](/posts/protect-yourself-from-identity-theft/), which covers the same core discipline: verify through an independent channel before you act on any request for sensitive data.

### 8. The greeting is generic, or oddly specific

"Dear Customer" or "Hello User" is a clue, but so is an overly specific greeting that gets one detail wrong. In one sample, an email addressed to me used a middle name I've never used publicly. In another, an invoice addressed me as "Arron Zhou (Mrs.)" — a detail scraped from a data broker, and a strong indicator the sender is working from scraped PII, not a real relationship.

I now try a quick reverse-check on suspicious emails: does the sender actually know me? If not, that's a signal. If the content references an account, order number, or service I don't have, that's a bigger one.

### 9. The attachment is the payload

A `.zip`, `.exe`, `.scr`, `.html`, `.svg`, or a password-protected archive are the usual suspects. Malicious QR codes embedded as images are also a 2025–2026 trend (called "quishing") — the code redirects your phone to a phishing login page and bypasses the "don't click email links" instinct entirely because you never touch the link.

I treat any unsolicited attachment with deep suspicion, but especially HTML file attachments. These render locally in your browser, look exactly like a real login page, and send the credentials you type to a server you can't see.

If you're ever unsure whether a downloaded file is safe, the [safely download files guide](/posts/download-files-from-internet-safely/) covers file inspection in more depth, including how to check hashes and sandbox suspicious files.

### 10. Small inconsistencies in branding, footer, or unsubscribe

Footer clues are worth the 10 seconds:

- Wrong legal entity (e.g., "Microsoft Corporation Ltd." when the real one is "Microsoft Corporation").
- Unsubscribe link that goes to a random domain, not the sender's.
- Missing physical mailing address, which is required by law for marketing email under CAN-SPAM.
- Copyright year that's stale.
- Logo that's a slightly wrong shade or has the wrong aspect ratio.

None of these is proof on its own. Together they compound.

## The 15-second workflow I actually run

Here's the exact sequence, in order, for anything that asks me to click, pay, download, or log in:

1. **Hover the sender** — does the display name match the actual address?
2. **Hover the link** — does the URL match the claimed destination?
3. **Open Show Original** and check the three authentication results.
4. **Look for a Reply-To** that differs from the From domain.
5. **Read the request** — does it ask for credentials, payment, or urgency?
6. **Verify through a second channel** — a phone number I have on file, not one from the email.

If steps 1–5 fail anywhere, I don't touch step 6 through the email. I contact the sender directly. If any header authentication fails, I don't reply at all — I report it as phishing and delete.

The whole thing takes about 15 seconds once it's a habit. On mobile, where I can't easily see full headers, I default to a stricter rule: if it's from a system I care about and I wasn't expecting it, I open the service's app directly rather than clicking the link.

## A quick reference table for the 10 signs

| # | Warning sign | What to check | Fake-example tell |
|---|---|---|---|
| 1 | Display name ≠ address | Hover sender | "PayPal" but from `paypal-resolve.top` |
| 2 | Reply-To mismatch | Message source | Reply-To a ProtonMail or Gmail |
| 3 | Auth failure | `Authentication-Results` header | `spf=fail`, `dmarc=fail` |
| 4 | Link text ≠ URL | Hover the link | Text says Apple, URL says apple-id-lock.info |
| 5 | Lookalike domain | Character-by-character read | Cyrillic "а", capital "I" for "l" |
| 6 | Manufactured urgency | Read the ask | "Suspend in 24 hours" |
| 7 | Asks for credentials | Read the ask | "Confirm your password to verify" |
| 8 | Wrong/generic greeting | Personal detail check | A name or title that's wrong |
| 9 | Risky attachment | File extension | `.html`, `.scr`, password-protected zip |
| 10 | Branding inconsistencies | Footer + unsubscribe | Wrong legal name or copyright year |

## Where I get tripped up — the honest caveat

I want to be clear: this checklist is not a guarantee. Two scenarios defeat it regularly:

**First, genuine compromised accounts.** When a real contact's actual mailbox gets compromised and they send you a real-looking email from a real address that passes SPF, DKIM, and DMARC, none of the structural tells fire. The content is the only clue, and if the ask is plausible (a quick favor, a shared document), even experienced people fall for it. This happened to someone I know last year — an entire company's shared Drive was exfiltrated because a vendor's account was compromised and sent a legitimate-looking "shared folder" link.

**Second, highly targeted spear-phishing.** When someone has done the research and knows your role, your colleagues' names, and your workflow, the giveaway is usually subtle — a phrasing mismatch, an out-of-character request, an internal reference that's *almost* right. These take longer than 15 seconds.

The mitigation for both is the same: **treat any request involving money, credentials, or installation as requiring independent verification**, regardless of how clean the email looks. That means calling, not replying. It sounds paranoid, and that's fine — the cost of paranoia is a 30-second phone call, while the cost of a wrong click is measured in thousands.

There's also a subtle failure mode people don't talk about: **over-alerting.** When I first started flagging aggressively, I marked about 40% of my emails as phishing, most of which were legitimate. Gmail's "report phishing" learnings are per-user, and constant false reports can actually degrade your own filters. My honest advice is to reserve phishing reports for high-confidence cases. When I'm unsure, I move the email to my lab folder and check it later rather than reporting immediately.

## Tools and habits that do the heavy lifting

You don't need a lot of software, but three things materially helped my detection rate:

- **A password manager with built-in phishing protection.** Modern managers match against the site's registered domain, not the full URL. If I open Autofill on `paypaI.com` and the manager doesn't offer my PayPal login, that's an instant red flag. I tested the search features of 15 of these in [the password manager search showdown](/posts/best-password-managers-search-features/), and the phishing-detection angle ended up being the deciding factor for me.
- **Two-factor authentication via an authenticator or hardware key.** A password typed into a phishing page is useless if the attacker can't get the second factor in time. Even better: FIDO2 hardware keys are phishing-resistant. I covered the whole setup in [how to set up two-factor authentication](/posts/set-up-two-factor-authentication/) — it's the single highest-leverage protection in this whole topic.
- **A quick URL reputation checker.** I use a bookmarked check against multi-engine scans (VirusTotal, URLScan, Google Safe Browsing), and paste in suspicious URLs rather than visiting them. It's not perfect but it catches the lazy scams instantly.

One more habit worth internalizing: **search the unique phrasing of a suspicious email**. Scams run in waves — the same subject line hits thousands of inboxes in the same week. Searching for the exact phrase in quotes almost always surfaces a Reddit thread, a security blog, or a report from someone else who got the same message.

For a broader dive into telling fact from fiction in your inbox — particularly around forwarded "news" and chains — I covered the general fact-checking discipline in [how to spot fake news and misinformation in search results](/posts/spot-fake-news-search-results/). The frames are surprisingly similar.

## A quick note on reporting and recovery

If you've already clicked, don't panic — act fast:

1. **Change the password** on the exposed account from a different, clean device.
2. **Revoke active sessions** in that account's security settings.
3. **Enable 2FA** if it isn't already on.
4. **Report the email** — in Gmail: the three-dot menu → Report phishing. In Outlook: Report → Phishing.
5. **If payment was involved,** contact your bank immediately. Wire recalls have a brief window.
6. **Notify your IT/security team** if it was a work account. Speed matters more than pride.

If you've been locked out of an account, the recovery checklist in [how to fix account lockout after a suspicious login alert](/posts/fix-account-lockout-suspicious-login/) covers the exact sequence.

Honestly, the single most useful skill I've acquired from all this isn't any specific check. It's the habit of *slowing down*. Almost every phishing email works by compressing the time between "read" and "act." Add 15 seconds of deliberate friction, and the majority of them collapse immediately.

The 47-email folder in my Gmail is still growing, and I suspect it always will. If you want a spot check on any suspicious message, run the header through `Authentication-Results` and the URL through a reputation tool before anything else. That's where the truth lives.
