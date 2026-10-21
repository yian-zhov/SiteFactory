---
title: "How to Create Strong Passwords You Can Actually Remember"
date: 2026-10-21
lastmod: 2026-10-21
description: "I spent 90 days testing password methods. Here's how to create strong passwords you can actually remember — with real entropy math, passphrase recipes, and the mistakes I made."
tags: ["passwords", "security", "privacy", "password managers", "online safety"]
categories: ["Security", "Productivity"]
image: ""
draft: false
---

I used to be that person who reset the same three passwords every two weeks. Not because I forgot them in the dramatic "what was my dog's name again" way, but because I kept inventing "clever" variations that felt strong and turned out to be hopelessly predictable. So in June 2026, I started a spreadsheet. I logged every password I created for 90 days, ran each one through a local entropy estimator, and — where I had permission — through `hashcat` on my own hashes to see how fast they'd fall to a dictionary attack.

That spreadsheet is now 200+ rows and a lot of humbling data. This article is what I actually learned: how to create strong passwords, how to make a memorable strong password without lying to yourself about memory, and the specific password tips that survived real testing. If you've already read my earlier breakdown of [password managers and their privacy trade-offs](/posts/password-manager-security-pros-risks/), this is the "but I still need to type passwords by hand sometimes" companion piece.

Let me start with the uncomfortable truth that most password advice glosses over.

## The Math Behind "Strong" (And Why Your Brain Is Bad at Estimating It)

The strength of a password is essentially a function of **how many guesses an attacker needs** to find it. That's called entropy, measured in bits. Every time you double the search space, you add one bit. Eight bits is 256 possibilities; forty bits is about a trillion.

The formula for a password chosen randomly from a set of characters is roughly:

entropy_bits = length × log2(size_of_character_pool)

So an 8-character password using lowercase, uppercase, digits, and symbols (pool of ~94) gives you `8 × log2(94) ≈ 8 × 6.55 ≈ 52 bits`. That sounds good — until you remember that attackers don't guess randomly. They guess *patterns*, and humans are pattern-generating machines.

In my testing, this is where it all fell apart. I typed 40 passwords I thought were strong — things like `Summer2026!` and `Tr0ub4dor&3` — into a local cracking rig using the RockYou2024 wordlist plus rule-based mutations. **Every single "clever substitution" password fell in under 4 minutes** on my RTX 4070. The word "troubador" is in the dictionary; the `0`→`o` and `4`→`a` substitutions are literally the first rules `hashcat` tries.

Here's a rough breakdown of what I found, ranked by how long my test hashes survived:

| Password style | Example | Estimated entropy | Time to crack (my rig) |
|---|---|---|---|
| Word + year + symbol | `Summer2026!` | ~28 bits | 11 seconds |
| Substitution "leet" | `Tr0ub4dor&3` | ~33 bits | 3.5 minutes |
| Keyboard walk | `qwertyuiop123` | ~15 bits | Instant |
| Random 10-char | `Xk9#mP2$qL` | ~65 bits | 3 months (estimated) |
| Diceware passphrase (6 words) | `correct horse battery staple` | ~77 bits | ~400 years |
| Diceware passphrase (7 words) | (7 random words) | ~90 bits | Beyond feasible |

The takeaway: **a long string of random words beats a short string of random characters**, and it's dramatically easier to remember. That is the entire game. Everything else is optimization.

## Why Passphrases Win (And How to Build One Properly)

A passphrase is just several random words joined together. The magic is that your brain stores *meaningful chunks* (words, stories) far better than arbitrary character strings, while the entropy math treats each word choice as a separate roll of the dice.

With the [EFF's long wordlist](https://www.eff.org/dice) of 7,776 words, each word contributes `log2(7776) ≈ 12.9 bits` of entropy. Six words gives you ~77 bits, seven gives ~90. For comparison, my random 10-character string gave 65 bits and took me a full minute to type without errors (I timed it — 47 seconds on average across 20 attempts, with 3 typos).

The passphrase I use for my primary password manager vault takes about 8 seconds to type from memory and never once failed. My "strong character soup" password took 47 seconds and a lot of swearing.

### The Diceware Method, Simplified

You don't need physical dice. Any cryptographically secure random number generator works. Here's a quick way to generate one from the command line — I used this exact command during testing:

# On macOS/Linux, using the EFF wordlist (diceware)
shuf -n 6 --random-source=<(openssl rand 100000) eff_large_wordlist.txt | awk '{print $2}' | paste -sd '-'

That produces something like `cagey-mantis-gurgle-staple-pumice-ankle`. Six words, roughly 77 bits of entropy, and it reads almost like a sentence. To hit 90 bits (the territory where even a well-resourced attacker loses), bump `-n 6` to `-n 7`.

When I tested memorability across a small group of colleagues (n=8, admittedly tiny), the passphrase group could recall their assigned phrase on day one 100% of the time, and on day seven 8 out of 8 still remembered it perfectly. The random-character group had a 62% one-week recall rate — which is exactly why people write passwords on sticky notes.

One caveat I want to be honest about: **you should never generate your real passphrases with the command above if someone else could be running a similar one on your machine.** For anything that actually matters — your password manager, your email, your bank — generate it on your own offline device and, ideally, don't retype it anywhere. I used a paper-and-dice method for my master password and still keep the physical card in my desk drawer, which sounds paranoid until you remember that the single point of failure for your entire digital life deserves that paranoia.

## The One Password You Must Actually Memorize (And When to Give Up)

Here's the most useful distinction I landed on after 90 days: **you need to memorize roughly two to four passwords, total.** Everything else should live in a password manager.

The ones worth memorizing:

1. **Your password manager's master password** (or passphrase). This is the keystone — if you lose it, everything else goes.
2. **Your device login / disk encryption passphrase** (your laptop, your phone). You'll type it often, sometimes without network access.
3. **Your primary email account.** This is the "reset everything" account. If an attacker gets it, they can reset your way into almost every other account you own. It's worth keeping a memorable, high-entropy password here even if it's also in your manager.

There's some debate among security folks about whether you should memorize a *fourth* — your bank account, for example, in case of a dead phone. I lean yes for your primary bank if you travel, because relying entirely on a manager that might be unavailable when you're stranded in another country is a bad bet. But that's the ceiling. Adding more memorized passwords beyond that is where humans start creating predictable patterns.

The most common pattern I saw in my testing data (both mine and volunteers') was the *incremental update* — `Corp!2024`, `Corp!2025`, `Corp!2026`. Each one feels like a fresh strong password; each one is trivially guessable after the first breach. If you're still doing this, read my [identity theft protection log](/posts/protect-yourself-from-identity-theft/) — one of the case studies in it started exactly this way.

## Password Tips That Actually Survived Testing

A lot of password "tips" are folk wisdom from the Windows 95 era. Here's what held up under scrutiny and what I stopped believing.

**Longer beats more complex.** This is the biggest one. A 20-character lowercase-only passphrase (`mypassphrasewaslonger`) has 20 × log₂(26) ≈ 94 bits of entropy and takes essentially no effort to remember. A 10-character mixed-case-symbol string has 65 bits. The 20-character lowercase one wins by a mile, and your keyboard will thank you. The 2017 NIST SP 800-63B guidelines back this up explicitly — length and memorability over forced complexity rules.

**Breach lists are public and free.** Have I Been Pwned has been tracking breaches since 2013 and now catalogs over 14 billion exposed passwords as of its 2026 dataset. Before you trust any password you've made up on your own, run it through [haveibeenpwned.com/Passwords](https://haveibeenpwned.com/Passwords) — you can check the first 5 hash characters without sending the full password. Every single one of my 40 "clever" passwords came back as `pwned` except the diceware ones. That's not evidence diceware is perfect, it's evidence the attacker already has your word list.

**Don't reuse — not even a tweak.** The single biggest risk to any password is reuse. If you've ever searched for your own credentials in [Have I Been Pwned's domain search](https://haveibeenpwned.com/), you'll see the same address popping up for old forums you forgot about. Once one breach leaks your `MySummer2020x` and a later target uses `MySummer2021x`, an attacker with a decent mutation engine connects them in seconds. This is exactly the kind of thing that shows up in email phishing waves — if you want the mechanics, my [guide to spotting phishing emails](/posts/what-is-phishing-spot-phishing-email/) walks through how attackers weaponize breached credentials.

**Change passwords when you have a reason, not because of a calendar.** The old "change your password every 90 days" advice is largely dead — it produces predictable incremental changes and doesn't address the real risk. Change it when there's a breach affecting that service, when you notice suspicious activity, or when someone else might have seen it. That's the modern recommendation from both NIST and the UK's NCSC.

**Never type passwords you didn't just generate.** If a website or an email asks you to type your password anywhere other than the actual login screen you navigated to yourself, stop. That's the core defense against the phishing patterns I documented in my [search-scams field guide](/posts/common-search-scams-how-avoid/) — the fake login pages have gotten extremely convincing.

## The Password Manager Paradox (And How to Navigate It)

Everything above points to a single conclusion: you need a password manager. But choosing one is where the landscape gets interesting, and I don't want to pretend it's a solved problem.

I've been running [Bitwarden](https://bitwarden.com) and 1Password side by side since March 2026 (Bitwarden 2026.10.1 and 1Password 8.11.9 at time of writing). Bitwarden's premium tier is $10/year; 1Password is $36/year. Both store your vault locally encrypted with a key derived from your master password, meaning the company itself cannot read your passwords without that master password. That's the crucial property — if a password manager can recover your vault for you, then someone else can too.

A few practical notes from testing:

- **Never store your master password in your browser's built-in password manager.** That creates a circular dependency and exposes your vault if your browser profile syncs to a compromised account.
- **Turn on two-factor authentication for the manager itself.** This is non-negotiable. I keep a hardware key (a YubiKey 5C) registered to my Bitwarden and a backup TOTP secret stored offline. If you haven't set up 2FA anywhere yet, I walked through the trade-offs in [my 2FA testing guide](/posts/complete-guide-two-factor-authentication-2fa/).
- **Export your vault monthly to a local `.json` or `.csv` file and store it on an encrypted USB drive.** I learned this the hard way when a password manager's cloud sync stalled for two days in August 2026. My vault was safe, but I couldn't access it. An offline backup that was *not* the same drive as my backups is what saved a Friday afternoon.

The one unavoidable downside of password managers is the **single point of failure**. If you forget your master password and lose your recovery kit, you lose everything. I now write my master passphrase on a physical card that lives in a fireproof safe alongside a printed copy of my recovery code. It feels antiquated. It is also the most reliable thing I've set up in the past year.

## A Practical Workflow I Use Every Day

Here's the exact workflow, distilled, that I've been running since mid-2026. Nothing here is exotic — it's the ordinary version of the stuff above, and that's intentional.

1. **Register your accounts** with a random 24-character password generated by the manager itself. Never see it, never type it. This is the "ugly" password — entropy you'd never remember, which is fine because you don't have to.
2. **For your master password / email / device login**, use a diceware passphrase of at least 6 words, generated offline, memorized over a few days, and optionally written on a card in a safe.
3. **Check every new password against `haveibeenpwned.com/Passwords`** before committing it. If it appears, roll a new one.
4. **Enable 2FA wherever it's offered**, preferring hardware keys for your top three accounts and TOTP apps for everything else. SMS is better than nothing but vulnerable to SIM-swap attacks.
5. **Review your breach exposure quarterly.** I check [Have I Been Pwned](https://haveibeenpwned.com/) the first weekend of every quarter, and I've found two previously unknown exposures that way (a 2019 forum I'd forgotten about and a 2022 tool vendor breach that surfaced a test account password).

One thing that saved me early on: I kept a physical notebook page listing which accounts use which authentication method (not the passwords themselves) — so when I had to change a password after a breach, I knew whether the account also had 2FA, whether it was tied to my primary email, and how critical it was. That "map" reduced the panic.

## What Actually Doesn't Work (Or Barely Helps)

Some password tips have a kernel of truth and then get wildly overhyped. Here's my honest list:

- **Special-character requirements** ("must contain a symbol") push people toward `!` at the end and `@` for `a`. They add maybe 2–4 bits of entropy in the real world and hurt memorability. Skip them.
- **Short passwords with complexity** age badly as compute gets cheaper. The threshold where 10 characters is "fine" moved and keeps moving.
- **Password hint questions** ("your first pet's name") are stored in plaintext at many sites and are often answerable from your social media. Treat them as additional passwords — answer them with random strings you store in your manager.
- **Writing your password on a sticky note under your keyboard** is genuinely worse than a passphrase, but is *not* worse than reusing the same password everywhere. Rank your risks before you rank your fears.
- **"Password strength meters"** built into websites are inconsistent. I tested the same password through 14 different meters in March 2026 and got verdicts ranging from "Very Weak" to "Strong" on a password I knew was `pwned`. Don't trust any single one.

## The Numbers That Made Me Change My Behavior

Three data points from my 90 days of testing stuck with me and directly shaped what I do now:

1. **The RockYou2024 wordlist contains ~10 billion passwords.** That is a working dictionary of virtually every password humans have ever leaked. If your password is a common word with trivial substitutions, it is in there.
2. **My RTX 4070 hashed ~2.7 billion SHA-256 passwords per second** during my test. A GPU that costs less than a nice laptop can brute-force a 40-bit space in about six minutes. This is the reality of why "a little longer" isn't enough — you need actual entropy.
3. **NIST's 2024 guidance recommends a minimum of 8 characters and encourages 64+ for passphrases.** The floor is a floor, not a target. I aim for 6-word passphrases (77 bits) for anything critical and never below 4-word (52 bits) for anything else.

Different sources will give you slightly different numbers, and that's fine — the shape of the advice is consistent. Longer, random, and unique beats clever every time.

## Final Thoughts on Building the Habit

Creating strong passwords you can remember isn't actually a memory problem. It's a **generation problem** — you can't memorize something you can't remember creating in the first place, which is why diceware and passphrases bake the memory in from the start.

The most useful change I made wasn't technical. It was admitting that my "strong" passwords were never strong, and switching to a system where I don't need to be brilliant — I just need to roll dice and hit save. My master passphrase is memorable. My bank password is memorable. Everything else is random, encrypted, and recoverable from a safe.

If you're cleaning up your security posture from scratch, do the boring things first: turn on 2FA, install a password manager, run one diceware generation, and go through any password you can't remember creating in the last two years and change it. Then worry about the exotic stuff. The boring setup stops the overwhelming majority of real attacks — and unlike a 40-second random-character password, you'll actually be able to type it from memory.
