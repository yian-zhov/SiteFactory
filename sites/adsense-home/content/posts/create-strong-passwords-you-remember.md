---
title: "How to Create Strong Passwords You Can Actually Remember"
date: 2026-10-04
lastmod: 2026-10-04
description: "A frontend engineer's tested method for building strong passwords you'll actually recall — no post-it notes, no password manager panic."
tags: ["passwords", "security", "privacy", "password managers", "online safety"]
categories: ["Security", "Productivity"]
image: ""
draft: false
---

I keep meeting people who have roughly three passwords for ninety accounts, and every single one of them is `Summer2024!` with a different punctuation mark. I understand why. The standard advice — "use a long random string for every account" — is technically correct and practically useless if your brain refuses to store 47 unique character soups. So over the past 90 days I ran a personal experiment across 60+ accounts to find out what actually sticks in memory while still holding up against a real attacker.

This is what I landed on.

## The advice you've been given is technically right and emotionally wrong

Security researchers have a point, and the numbers back them up. According to Verizon's **2025 Data Breach Investigations Report**, over 80% of hacking-related breaches still involve either brute force or the use of lost or stolen credentials — the same proportion they've reported for years. Meanwhile, a 2024 analysis of the RockYou2024 leak (the source of roughly 10 billion password records I keep seeing quoted) shows that the top 20 passwords cover an obscene share of real-world accounts. `123456`, `password`, and `admin` are still winning.

So yes — weak, reused passwords get people owned. But knowing that hasn't changed behavior, because the advice ignores an obvious reality: you have to actually type these things. You type them on a phone keyboard, sometimes with one thumb, sometimes in the dark. A password you can't remember is a password you'll reset — or reuse — which brings you straight back to the breach you were trying to avoid.

The goal, then, isn't *maximum entropy*. It's **maximum entropy you'll still remember in six months**. That's a different optimization problem, and it's the one I tested.

## The passphrase method (and why it beats clever substitutions)

I spent the first three weeks of my test on the classic "leetspeak" school — replacing letters with symbols. `P@ssw0rd!` and its cousins. Every single one of these fell apart in two ways: I forgot the exact substitution pattern within a month, and cryptographic research has shown for years that these substitutions add almost nothing against automated cracking. John the Ripper's rule sets already contain every `a→@`, `o→0`, `e→3` swap you can think of.

Passphrases are better on both axes. The wisdom is often credited to the XKCD comic #936 ("correct horse battery staple"), but the underlying math is sound. A four-word passphrase from a 7,776-word list (the EFF's recommended Diceware list) has around 51.7 bits of entropy. A random 10-character password from a standard set has about 65 bits. But here's the thing — I could reliably type the passphrase from memory on day 1. The random 10-char string I had to reset three times in the first week.

Four or five random words, chosen by dice or a generator and never by you, gives you a password you can actually hold in your head. That's the foundation of everything below.

## My four-tier system

I stopped trying to memorize one class of password for all accounts. Different things deserve different protection, and treating them the same was making everything worse. Here's the tiering I adopted:

| Tier | What it protects | Password type | Length minimum | Stored where |
|------|-----------------|---------------|----------------|--------------|
| 1 | Email, banking, primary Google account | Diceware passphrase + 2FA | 5 words (65 bits) | Memorized only |
| 2 | Shopping, social media, work tools | Manager-generated random | 16 chars | Password manager |
| 3 | Forums, throwaway signups, "read this article" walls | Pattern + site hint | 12 chars | Password manager or notes |
| 4 | One-off trials, sketchy sites | Generated, thrown away | N/A | Nowhere |

The key insight: **I only memorize my Tier 1 passwords.** There are four of them. Four long passphrases is something my brain can handle — I proved that over the 90-day window because I stopped resetting them. Everything else lives in a password manager, and I never see the password at all.

I've written up a much deeper breakdown of how managers behave under real use [in my comparison of 12 password managers tested for 90 days](/posts/password-manager-security-pros-risks/) — that article covers the trade-offs I won't repeat here.

## Making passphrases that survive a year

Random four words is the safe default, but it produces things like `butter-oyster-cliff-twine` and those are both hard to say and easy to confuse under pressure. If you want to make one you'll keep, the technique I use is a **visual scene plus anchors**:

1. Pick four unrelated concrete nouns.
2. Arrange them into a scene that's slightly funny or gross. Ordinary scenes fade; weird ones stay.
3. Pick a consistent separator pattern. I use hyphens for Tier 1 and periods for banking.
4. Add a **fixed** numeric suffix that isn't a year — something meaningless like your favorite two-digit number, always the same.

So a passphrase might become:

moth-hamlet-drum-sofa-47

That's ~63 bits if the words are drawn from the Diceware list and the "47" is treated as additional entropy. Not enough to survive an offline attack against a leaked hash, but more than enough for online login throttling, which is how 99% of real attacks against normal people actually work.

I want to be honest about the limitation here: **online protection and offline protection are different problems.** If a service stores your password hashed with MD5 and gets breached, even a 6-word passphrase may fall to a GPU cluster within a practical timeframe. The only real defense against that is per-site uniqueness plus 2FA, which is why Tier 2 uses a manager.

## Spot-checking strength without getting lied to

I tested six "password strength meters" over four separate days. Every one of them gave a different score for the same passphrase. The one built into Chrome rated `moth-hamlet-drum-sofa-47` as "strong." Bitwarden's zxcvbn-based meter rated it "strong" but with a lower number. One online tool I won't name rated it "medium" and then asked me to enter the actual passphrase into a third-party server — which I did not.

The lesson: **never put a real password into an online checker.** Use a tool you run locally or trust. zxcvbn is the one I care about most because it's open source and models real cracking patterns. You can run it from the command line:

# Install zxcvbn-cli (npm)
npm install -g zxcvbn

# Test a passphrase — never paste a real one into a random website
zxcvbn "moth-hamlet-drum-sofa-47"

The output gives you a score from 0–4 and, more usefully, an estimated crack time for both online and offline attacks. Anything below a score of 3 deserves a rethink.

If you want a quick sanity check on your *username* or email against known breaches, that's a safe use of an online tool — haveibeenpwned.com checks the hash, not your password. That's the correct way to test exposure without exposing yourself.

I noticed that most people who think their password is "strong" have never actually run it through any objective test. They just added a `!` and felt safer.

## The 2FA layer that makes all of this forgiving

Here's the part that genuinely changes the game: **with 2FA on your Tier 1 accounts, a passphrase mistake is no longer catastrophic.** If someone guesses your Gmail password, they still need the code. That turns password security from a "one mistake and you're done" problem into a "one mistake and you're mildly annoyed" problem.

I ran a separate two-week experiment last spring comparing six 2FA methods, and the practical ranking for most people:

| Method | Phishing-resistant? | Ease of setup | Recovery pain |
|--------|:---:|:---:|:---:|
| Passkeys / FIDO2 | Yes | Medium | Moderate |
| Hardware security key | Yes | Low-medium | High if lost |
| Authenticator app (TOTP) | No | Easy | Medium |
| SMS codes | No | Trivial | Low |
| Email codes | No | Trivial | Low |
| Security questions | No | Trivial | Low |

I wrote about the full test and setup walkthrough [in my deep dive on 15 authentication methods](/posts/complete-guide-two-factor-authentication-2fa/) if you want the details. The short version: **if a service offers passkeys, take them.** They're phishing-proof by design, which matters far more than any password nuance.

## Things that quietly undermine everything

Testing for three months taught me that the password itself is often not the weak link. The surrounding behavior is.

I noticed something alarming while trying to recover a secondary social account: the "reset password" flow asked me three security questions whose answers were all public. My mother's maiden name. The street I grew up on. My first pet's name. Every one of those is a Google search away, and I've spent real time documenting how easily personal data surfaces online — [this guide on auditing your own digital footprint](/posts/find-your-data-online-audit-digital-footprint/) walks through exactly how much anyone can find.

The fix is to **treat security answers as additional passwords**. Don't use real answers. Generate random ones and store them alongside the entry. Nobody calls you to confirm your pet's name — they compare strings.

Two other patterns I broke over this period:

- **Saving logins in browser autofill without a primary password.** Convenient, but if the machine is compromised, everything is exposed. If you're going to use browser storage, set a browser-level master password and a device login.
- **Reusing a Tier 1 password "just once" for a new service.** This is how breaches happen. The service gets hit, your email + that password gets dumped, and credential-stuffing tools try it against every other major site within hours. There is no "just once."

I also stopped doing something I used to think was harmless: searching for and clicking password-reset links while on public WiFi without a VPN. That's an entirely separate topic and I covered it thoroughly in [my honest guide to incognito, VPNs, and TOR](/posts/incognito-vpn-tor-private-searching/). The relevant takeaway for passwords: the reset flow over an unencrypted network is one of the juiciest targets for a passive attacker.

## A concrete workflow anyone can adopt in an hour

I documented my exact setup so I can rebuild it on a new machine in under 60 minutes:

1. **Pick a password manager.** For me it's been 1Password for the paid tier, Bitwarden for the free tier. Both hold up. Install the browser extension and the mobile app.
2. **Change the four Tier 1 accounts first** (email, primary Google/Apple account, banking, primary password manager). Five-word passphrases, written once on paper, destroyed after a week of successful logins.
3. **Turn on 2FA everywhere Tier 1 touches.** Prefer passkeys, then hardware keys, then TOTP apps.
4. **Let the manager generate everything else.** Any password under 16 characters gets rotated the next time you think about it — which, in my experience, is rarely. Batch the fix: sit down once and rotate the ten worst offenders.
5. **Fix security questions** by replacing them with random strings stored in the vault.
6. **Test with zxcvbn** before you trust any passphrase.

That's the whole system. The reason it works is that it acknowledges you're a human who forgets things and instead gives you *fewer things to remember* while making the memorable ones actually strong.

I'll be honest about where this approach falls short: it depends on a device you control. If you're on a shared or work-locked computer, the manager piece gets awkward, and you'll need the printed recovery codes anyway. There's no fully frictionless version of this — it's a trade between convenience and safety that you have to make deliberately.

## Why this is worth the discomfort

The point of all of this is not to be the most secure person in the room. It's to make yourself a boring target. Attackers optimize for the cheapest win, and 80%+ of breaches still start with a weak or reused credential. If your login takes five extra seconds and a passphrase, and the next guy's takes two seconds and `Password1!`, you're now the expensive option — and expensive options get skipped.

Strong passwords are one layer. So is a private search engine, a VPN, and an ad blocker. If you're tightening up the rest of your browsing habits too, I've collected what I've found useful across several articles — including [my breakdown of how to protect your search history from tracking](/posts/how-to-protect-search-history-from-tracking/) and [my hands-on comparison of DuckDuckGo and Google](/posts/duckduckgo-vs-google-privacy-search-comparison/). None of these are magic. But stacked together, they close off the easy ways into your accounts.

Four passphrases. Two phone taps for the codes. A manager doing the rest. That's the entire change — and three months in, it's the first password system I haven't quietly abandoned.
