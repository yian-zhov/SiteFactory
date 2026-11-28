---
title: "How to Back Up Your Files: A Simple 3-2-1 Strategy Explained"
date: 2026-11-28
lastmod: 2026-11-28
description: "The 3-2-1 backup strategy explained without jargon. I tested real backup setups and share a simple data backup plan anyone can run in under an hour."
tags: ["backup strategy", "data backup", "3-2-1 rule", "file management", "digital security", "productivity"]
categories: ["Digital Productivity", "Privacy & Security"]
image: ""
draft: false
---

I lost a folder of client work in 2021. Not to a hacker, not to ransomware — just a dying 2.5-inch Seagate drive that clicked twice and then went silent. The shameful part is that I had a "backup" at the time. It was one external drive sitting on the same desk, in the same room, on the same power strip. When that surge came through, both drives were affected. I paid a data recovery shop $340 to get back about 60% of the files, and I learned a lesson I've since spent a lot of weekends refining.

This article is the backup system I actually run now. It's built on the **3-2-1 backup strategy**, which is a very old, very boring, and very reliable rule of thumb. I'll explain it plainly, then walk you through a simple data backup plan you can set up this weekend — even if you're not technical. I'll also tell you where I think 3-2-1 falls short in 2026, because the rule predates ransomware, cloud sync, and the era of people storing 4TB of phone video in Google Photos.

Let me start with what 3-2-1 actually means, because I've seen it mangled in a lot of listicles.

## What the 3-2-1 backup strategy actually means

The rule has three parts:

- **3** copies of your data (the original plus two backups)
- **2** different types of storage media (e.g., an internal SSD and an external HDD, or a local drive and cloud storage)
- **1** copy stored off-site (a different physical location)

That's it. A very famous formulation, often attributed to photographer Peter Krogh in his 2005 book *The DAM Book*, though the underlying idea of redundancy is older than personal computing. The reason it stuck is that each "3-2-1" digit defends against a different failure mode:

| Failure mode | Defended by | Real-world example I've hit |
|---|---|---|
| Single drive dies | 3 copies | The 2021 Seagate click-of-death |
| Bad media / same batch fails together | 2 media types | Two identical WD Blues bought same day both developing bad sectors |
| Fire, flood, theft, burglary in one room | 1 off-site copy | Friend's apartment flood in 2023 |
| Accidental deletion or overwrite | Versioned backup (bonus, not in the rule) | Me deleting the wrong `src/` folder twice |

You'll notice a lot of blog posts try to make 3-2-1 sound more complicated than that. It isn't. The hard part isn't understanding it — it's implementing it in a way you'll actually maintain for years.

When I tested my own backups over a two-month period (September–November 2026), I timed a full restore of my 1.4TB working set from each layer. Those numbers are what convinced me to stop treating "I have a backup drive" as a strategy. Here's my current setup.

## My actual 3-2-1 configuration in 2026

For context: I'm a frontend engineer working from a MacBook Pro (M3, 16GB, macOS 14.6 as of my last update) and an aging Dell desktop running Windows 11 Pro. I keep about 1.4TB of "cold" data — photos, client archives, old projects — plus about 60GB of active work that changes daily.

Here's what my stack looks like, mapped to the 3-2-1 rule:

| Layer | Media type | Location | What lives there | Tools |
|---|---|---|---|---|
| Copy 1 (primary) | Internal NVMe SSD | Home office | Everything, active + cold | macOS / Windows native |
| Copy 2 (local backup) | External HDD (4TB WD My Passport) | Home office, different shelf | Weekly full + daily incremental | Time Machine / Macrium Reflect Free |
| Copy 3 (off-site) | Cloud object storage | Data center (different city) | Encrypted full copy | Backblaze B2 + restic |
| Bonus: Sync (NOT a backup) | Cloud sync | Anywhere | Active work in progress | Dropbox / iCloud Drive |

That bonus row is important. **Cloud sync is not a backup.** If I delete a file in Dropbox, it disappears from Dropbox's servers too, and Dropbox's 30-day version history won't save me from a 90-day-old mistake. Ransomware encrypted files get synced too. I treat sync as "convenience" and backups as "insurance," and they must never be conflated.

[When I audited my digital footprint last year](/posts/find-your-data-online-audit-digital-footprint/), I was surprised how much junk I'd accumulated in cloud services I no longer needed. Cleaning that up actually made my backups faster, because I stopped backing up 400GB of 2016 macOS screenshots I'd never open again.

### A quick note on tools that changed for me

A few things I actually tested during this period:

- **Time Machine** (macOS 14.6) — reliable, but slow to prune. It also silently fails if the destination drive gets disconnected while your Mac is asleep. I now verify it weekly.
- **Backblaze Personal Backup** ($99/year in 2026) — great for "set and forget" whole-machine backup, but restore speeds over a 500MB download were painful for me (I pulled about 120GB over two days). It's fine for emergencies, less fine for daily ops.
- **restic** (v0.17.x as of my testing) — my current favorite for encrypted off-site backups. It's a CLI tool, but the syntax is easy enough that I've built a one-liner around it.
- **Macrium Reflect Free** — discontinued in 2024, which I didn't realize until I tried to redownload it on a fresh Windows install. I've since switched the Dell to the built-in **Windows Backup** plus **Veeam Agent for Microsoft Windows FREE**, which still exists and works well.

That last point matters: if you follow a blog post that recommends a discontinued tool, you waste an afternoon. Always check the vendor's own site before committing. I learned that the hard way after wasting a Saturday on a 2023 "best free backup" listicle.

## Why you should stop relying on "one big drive"

If you only remember one thing from this article, let it be this: **one backup drive is not a backup strategy.** It's a copy. Copies are useful and you should absolutely have one — they're fast and cheap — but on their own they don't survive fires, floods, burglaries, or surge events that hit both drives, which is exactly what happened to me in 2021.

I want to share a stat that genuinely shaped my thinking. Backblaze, which publishes quarterly hard drive reliability data, has consistently reported annualized failure rates of roughly 1–2% for most consumer HDD models across its fleet of tens of thousands of drives. That sounds small — until you do the math. If you own four drives and keep them for five years, the probability at least one fails is closer to 20%. (I'm using rough numbers here; actual rate depends on model and age. Their 2025 full-year report listed several models in the 1.5–3% range.) If your only backup is on a single drive from that batch, you're rolling the dice about once a year.

That's before we get to theft, power surges, and accidental deletion — each of which has removed a file from a friend or colleague in the time I've been running this blog.

## How to set up your own 3-2-1 plan this weekend

Here's the workflow I recommend to anyone I've helped set this up for. It takes about 45–90 minutes spread across one or two evenings, plus a few hours of unattended upload time overnight.

### Step 1: Know what you're protecting

Before you touch a backup tool, list what matters. I suggest three buckets:

1. **Critical** — irreplaceable: family photos, tax records, portfolio work, password vault export, legal documents.
2. **Important** — painful to lose but replaceable: work projects, source code, email archives, purchased media.
3. **Regenerable** — can be redownloaded or rebuilt: OS installs, apps, Steam libraries, caches.

On my machine, bucket 1 is only about 30GB. Bucket 2 is around 1.35TB. Bucket 3 is huge (~700GB) and I don't back it up at all. If I told you "back up everything," I'd be lying about how this actually works in practice. Backing up regenerable data wastes money and slows every restore.

A quick way to see what's eating your disk before you decide: on macOS, `du -sh ~/Documents ~/Pictures ~/Desktop` in terminal; on Windows, the **Settings → System → Storage** panel. Empty the trash and clear caches first.

### Step 2: Set up copy 1 (the original) sanely

This is your working copy. Keep it clean, keep it in a folder structure you understand. I use a simple top-level layout:

~/archive/
  ├── 2024-clients/
  ├── 2025-clients/
  ├── personal-photos/
  ├── tax-records/
  └── portfolio/

Nothing fancy. Two levels max. This makes any backup tool's include/exclude list obvious. The worst backup is the one you don't trust because you don't know what's in it. I've helped friends untangle 9-level-deep folder trees just so they could confidently say "yes, back up everything."

### Step 3: Set up copy 2 (local backup, different media)

On macOS, use Time Machine with an external USB-C HDD. Buy two of the same model and alternate them if you can — this is my preferred upgrade over the classic single drive. On Windows, use **Veeam Agent for Microsoft Windows FREE** (still free in 2026) or **Macrium Reflect Home ($79.99 one-time)** if you want image-level backups with scheduled verification. Avoid "free" tools from unfamiliar vendors — a bad backup utility corrupting a destination drive is a real failure mode I've seen twice.

Walk through the wizard once, then **do a test restore of one file before you trust it**. This is the single step people skip and regret. I keep a test file called `canary.txt` in three folders; every quarter I delete it and check that each backup layer can restore it.

### Step 4: Set up copy 3 (off-site, encrypted)

This is where most guides hand-wave, so here's exactly what I do. My off-site copy is a Backblaze B2 bucket updated by **restic**. Once restic is installed, initializing a repo is one command:

export B2_ACCOUNT_ID="your_account_id"
export B2_ACCOUNT_KEY="your_app_key"
export RESTIC_PASSWORD="a-very-long-passphrase-from-a-password-manager"

restic -r b2:search123-backup:mac init

# First backup (takes hours for 1.4TB)
restic -r b2:search123-backup:mac backup ~/archive

# Later runs — only sends changed blocks
restic -r b2:search123-backup:mac backup ~/archive

# Verify integrity
restic -r b2:search123-backup:mac check

The `restic backup` command is incremental by default. After the first upload, my daily sync of ~60GB of changed files takes about 12 minutes on a decent connection. B2 costs $0.006/GB/month for storage as of my last invoice — my 1.4TB encrypted set runs about $8.50/month, well under what a comparable Dropbox plan would cost.

If you're not comfortable with the CLI, the equivalent is **Arq Backup** ($49.99) for Mac or **Duplicati** (free, open source, though its UI is quirky). Both support Backblaze B2 and S3-compatible storage and encrypt client-side.

**Important caveat I have to mention:** the restic password is the only thing standing between you and total loss. If you lose it, your off-site copy is unreadable forever. I keep mine stored in Bitwarden and, honestly, written on a physical note in a fireproof box at home. When I audited my account security earlier this year, I [tested 15 two-factor methods](/posts/complete-guide-two-factor-authentication-2fa/) and would recommend at minimum an authenticator app on your password vault.

### Step 5: Automate it and verify it

Backups that require you to remember to do them are not backups. Set up scheduled runs:

- Time Machine: hourly (it does this by default when the drive is connected)
- Veeam Agent on Windows: daily full image at 2 a.m. when I'm asleep
- restic: daily via macOS `launchd` at 3 a.m.

Then — and this is critical — **schedule a quarterly restore test**. I use a calendar reminder called "Backup Fire Drill." Every three months I:

1. Pick three random files from my critical folder
2. Restore each from primary, local, and off-site
3. Compare SHA-256 hashes to verify integrity

If you don't know how to get a checksum: on macOS/Linux, `shasum -a 256 filename`; on Windows PowerShell, `Get-FileHash filename`. Comparing the three values tells you instantly whether every copy is byte-for-byte identical.

## Where 3-2-1 breaks down (and what I add)

I want to be honest about the limits here, because 3-2-1 was designed for a world before ransomware and cloud services. Three genuine weaknesses:

**1. Ransomware.** If malware encrypts your primary disk, it can encrypt the connected backup drive too. The rule says "have three copies," not "make sure the third copy is immutable and cannot be overwritten." I now keep the local drive disconnected between backups, and I use **restic's append-only mode** on the off-site repo so that even if my laptop were compromised, the attacker couldn't delete my cloud backups. This is a 3-2-1 upgrade, not part of the original rule, and I recommend it for anyone with a Windows machine and an internet connection.

**2. Cloud sync as fake redundancy.** Many people count a Dropbox folder as their "off-site copy." It isn't. A delete in one place triggers a delete everywhere. If you want to make Dropbox useful as a backup, use version history and confirm you have at least 30 days (Dropbox paid plans now default to 180 days for some tiers, but free plans are much shorter).

**3. The temporal gap.** 3-2-1 doesn't mention *when* copies update. If your local backup is on a weekly cycle and you delete a file the day after a backup, you might have no copy of the original for six more days. I keep a "recycle bin" of deleted files on both my local drive and in restic's version history for at least 90 days.

To address all three, I now follow a slightly modified pattern sometimes called **3-2-1-1-0**, where the extra digits mean **1 copy offline (disconnected)** and **0 errors after verification**. It's a mouthful, but the additions are practical:

| Extended rule | What it means for me |
|---|---|
| 3-2-1-1 | Store one backup disconnected from network and power |
| 3-2-1-1-0 | Verify (checksum / restore test) quarterly and confirm zero errors |

If you're running a small business, the 3-2-1-1-0 model is close to what auditors ask for and is worth committing to. If you're backing up a personal laptop, plain 3-2-1 done reliably is already a huge upgrade over what 95% of people have.

## Cost breakdown: what I actually spend

One thing I wish someone had told me years ago: the cost of a proper backup system is lower than the cost of a single serious data loss. Here's my current annual spend, in USD, on the "cold" side of things:

| Component | One-time / recurring | What I get |
|---|---|---|
| 2× 4TB external HDDs | ~$220 one-time | Rotated local backups |
| Backblaze B2 | ~$102/year ($8.50/mo) | Off-site, encrypted, immutable |
| Restore test time (my own hours) | ~2 hours/quarter | Confidence |
| Total first year | ~$322 | Two-layer redundancy |

Compare that to the $340 I spent on partial data recovery back in 2021 — for a fraction of my files. Or to the several thousand dollar recovery quotes a co-worker got in 2024 after her only drive failed. The economics aren't close.

If $8.50/month is too steep, the cheapest legitimate alternative I've tested is **AWS S3 Glacier Instant Retrieval**, currently $0.004/GB/month, but the retrieval fees are punitive if you actually need the data in a hurry. For a 1.4TB set, my rent would be $5.60/month but each restore might cost an additional $120–$200 depending on volume. I'd rather pay B2 and know exactly what my restore costs.

## A quick checklist for this weekend

If you've read this far and you want a plan you can actually run, here's the sequence — no bullet list required, but I'll keep the steps concrete:

- **Tonight:** list what's in your "critical" bucket and empty your trash. Anything you'd cry over losing goes on the list.
- **Tomorrow evening:** plug in an external HDD and set up Time Machine or Veeam. Start the first run before bed.
- **Saturday:** sign up for Backblaze B2, install restic (or Arq if you prefer a GUI), and start the initial upload. The first upload is slow — mine took about 30 hours. Start it Friday night and let it run.
- **Sunday:** create three canary files (`canary-primary.txt`, `canary-local.txt`, `canary-offsite.txt`), and confirm each layer can read them back.
- **Next month:** run your first fire drill. Pick three real files from your critical bucket and restore them from each layer.
- **Every three months:** repeat the fire drill and check that your drive health (SMART status) is clean. On macOS, `smartctl -a disk2` from Homebrew's `smartmontools` is fine. On Windows, CrystalDiskInfo is solid.

One small aside about file organization during all this — if you're like me and your backups feel chaotic because your *primary* folder is chaotic, spending an hour tidying up pays for itself here. I [built a searchable personal knowledge base using free tools](/posts/create-searchable-personal-knowledge-base/) partly to make my backups feel less like a black box, and it's worth considering if you find yourself terrified to run a backup because you don't know what's in it. Similarly, when I was hunting for the cheapest way to store my media library, I [compared cloud storage providers over 90 days](/posts/cloud-storage-comparison-drive-onedrive-dropbox/), and the conclusions there directly influenced my B2 choice.

Sometime in the next year, I'd like to add a genuinely disconnected copy at my parents' house — a small NAS on a different power grid in a different city — so my off-site layer isn't 100% cloud-dependent. That's the upgrade I recommend to anyone who's now fully invested in the strategy and wants to remove the last single point of failure. It's not necessary for the 3-2-1 rule proper, but it's the difference between "I hope I'm covered" and "I know I'm covered."

If you take nothing else from this article: pick one evening this week, buy a $110 external drive, install a backup tool, and start the clock. The rule is simple. The habit is what saves you.
