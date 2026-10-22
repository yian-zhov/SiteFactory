---
title: "How to Handle a Dispute With a Contractor (Without Losing Your Mind or Your Money)"
date: 2026-10-22
lastmod: 2026-10-22
description: "My field-tested playbook for a contractor dispute: documenting the mess, demand letters, licensing complaints, and when it's actually worth it to sue a contractor."
tags: ["contractor dispute", "home repair", "small claims court", "consumer rights", "contract law"]
categories: ["Legal Tips"]
image: ""
draft: false
---

My kitchen contractor disappeared for eleven days in the middle of a tile job, then came back and told me the remaining work was "extra." I had already paid 70% of a $14,200 contract. That was March 2026, and it kicked off a four-month dispute I eventually resolved without a lawyer. This article is the playbook I wish someone had handed me on day one — because the difference between a contractor dispute you win and one that eats six months of your life comes down to what you do in the first 48 hours.

I'm not a lawyer. I'm a person who has now been through this twice, read a stack of state licensing statutes, and called four contractor licensing boards to confirm what they actually do when you file a complaint. What follows is the practical sequence: preserve evidence, put it in writing, escalate through the right channels, and only then decide whether to sue.

For a fuller picture of where I started, you might want to look at [my earlier piece on handling a bad contractor](/posts/legal-options-against-bad-contractor/) — that covers the broad legal landscape. This one is the granular, step-by-step version for when the contractor didn't finish work and you're trying to decide what's next.

## First, figure out which kind of dispute you actually have

Not every contractor dispute works the same way. The law and the leverage change depending on the category, and picking the wrong lane wastes weeks. Here's how I break them down now.

| Dispute Type | What It Looks Like | Best First Move | Realistic Outcome |
|---|---|---|---|
| **Incomplete work** | Job stalled, contractor gone or evasive | Written demand + license board complaint | Often resolved; completion or refund |
| **Defective work** | Finished but wrong, unsafe, or failing inspection | Third-party inspection report | Repair cost recovery or redo |
| **Payment disagreement** | Contractor claims extras; you dispute charges | Reconcile against the written contract | Negotiated split or small claims |
| **No contract at all** | Handshake deal, texts only | Reconstruct evidence from messages/venmo | Harder; leans on equity claims |
| **Contractor unlicensed** | No license number, or expired | Licensing board + possible restitution fund | Strong leverage; refund possible |

The unlicensed category deserves special attention. In my state, the contractor licensing board runs a **Contractor Recovery Fund** that pays homeowners up to **$30,000 per claim** (with a **$50,000 lifetime cap per contractor**) when an unlicensed or judgment-proof contractor takes your money. I called the board in early 2026 to confirm eligibility and the receptionist walked me through the intake form line by line. That fund is the single most underused remedy I've encountered. Check whether your state has one before you assume litigation is your only path.

## The 48-hour evidence grab (do this before anything else)

The single biggest mistake I made the first time was waiting to "see if he'd come back." By the time I started documenting, he had deleted his business Facebook page and changed his phone number. Here's what I now do within two days of realizing something is wrong.

### Photograph everything, including the boring parts

Not just the unfinished tile. Photograph the materials still in boxes, the subfloor, the dates on receipts, the condition of your home. Timestamped photos are the backbone of any contractor dispute. On iPhone, enable the metadata overlay; on Android, use the built-in camera's location tagging. I also shot short videos walking through each room describing what I saw out loud, because the audio gives a running date-stamp.

### Pull the paper trail and freeze it

Gather the signed contract, every change order, all invoices, payment confirmations, and the full text thread. Export the texts (iOS: tap the contact, scroll down, "Export Chat" via a third-party app; Android: use SMS Backup & Restore). Save the Venmo/Zelle/Cash App payment confirmations as PDFs.

Here's the command I used to hash and archive my evidence folder so I could prove nothing was altered later:

# Create a dated evidence archive with a checksum manifest
mkdir -p ~/contractor_dispute/evidence
cd ~/contractor_dispute/evidence
# Copy all photos, PDFs, and exported texts here first, then:
find . -type f -exec shasum -a 256 {} \; > ../evidence_manifest_2026-03-14.txt
tar -czvf ../evidence_backup_$(date +%Y%m%d).tar.gz .

I'm admittedly a little obsessive about this (I also [protect my digital assets in my will](/posts/protect-digital-assets-in-will/), so the pattern tracks). But an evidence manifest with checksums is real insurance if a dispute ever turns into litigation and opposing counsel questions authenticity.

### Reconstruct the scope of work

Pull out the contract and find the scope-of-work section. If it's vague ("kitchen remodel"), that's actually your problem to solve now. I built a simple spreadsheet mapping each line item to what was actually delivered, with photos in adjacent cells. When I later filed a licensing complaint, that spreadsheet — printed, with photos stapled — was the single document the board's investigator referenced.

If your contract was thin on detail, review what a solid one should have looked like in [my breakdown of home repair contracts](/posts/home-repair-contract-dos-donts/) — it's useful both for future jobs and for understanding what's missing in your current one.

## Put it in writing — the demand letter that actually works

A phone call to your contractor is worth nothing in a dispute. A letter is worth a great deal. Formal demand letters create a paper trail, put the contractor on notice, and often trigger a settlement because the contractor knows a licensing board or judge will eventually read it.

I've written more of these than I'd like. The structure that has worked consistently:

1. **State the facts** in a numbered, chronological list — dates, amounts, what was promised, what was delivered.
2. **Cite the breach** specifically: "Section 3 of our contract dated Feb 2, 2026 requires X. You have not completed X."
3. **Name the remedy you want** — a specific dollar amount or a specific completion deadline. Not "make it right."
4. **Set a firm deadline** — I use 10 business days for a refund demand, 14 for completion.
5. **State consequences** — licensing board complaint, small claims filing, or both.
6. **Include an itemized accounting** of what you paid versus what you received.

For the full anatomy of one, see [How to Write a Demand Letter That Gets Results](/posts/how-to-write-demand-letter/). Send it **certified mail with return receipt**, and also email a copy. That combination defeats the classic "I never got it" defense.

When I tested this on my kitchen contractor, the demand letter itself didn't move him. But it did something more valuable: it established a clean record I later attached to my licensing complaint and my small claims filing. The board investigator told me directly that the certified-mail demand letter was why they took the case seriously rather than treating it as a "he said/she said" complaint.

## Escalating through the licensing board (my favorite lever)

Contractor licensing boards are the most effective free pressure tool homeowners have. Here's what I learned calling four of them across two states in 2026.

### What the board can actually do

- **Investigate** the complaint and pull the contractor's records.
- **Suspend or revoke** the license.
- **Order restitution** through a recovery fund (state-dependent).
- **Refer for criminal prosecution** in cases of fraud or theft by deception.

What the board **cannot** do: force a contractor to finish your job, or award you more than the recovery fund cap. It's leverage, not a full remedy.

### How to file a complaint that gets attention

Most boards have an online intake form. The difference between complaints that get investigated and ones that get closed is documentation density. Include:

- The complaint form (signed).
- A chronological narrative with dates.
- The signed contract and all change orders.
- Proof of payments (bank statements or receipts, not just your word).
- Photos.
- A copy of your demand letter and the certified-mail receipt.
- Your contact information and a specific ask.

I filed in late March 2026 and got an investigator assigned within nine business days. That's faster than most online reviews suggest, and I think the density of my packet is why. The board's website will list average complaint processing times — check yours before you assume the wait is unbearable.

### The recovery fund catch

Recovery funds typically require that you've already obtained a **civil judgment** against the contractor that you can't collect on, or that the contractor was unlicensed at the time of the work. So the fund isn't a shortcut around suing — it's a backstop after you've sued. Still, knowing it exists changes the calculus: even a judgment-proof contractor isn't necessarily a dead end.

## When you should sue a contractor (and when you shouldn't)

This is where most people burn money on lawyers they don't need, or skip small claims because it feels intimidating. I want to be honest about the trade-offs.

### Small claims court: usually the right call

If your claim is under your state's small claims limit — **$10,000 in California, $5,000 in New York, $20,000 in Texas as of 2026** — and the facts are clean, small claims is almost always the best route. Filing fees are typically **$30–$100**, no lawyer is required (and in some states, not allowed), and cases are heard within 30–90 days.

I've done this before for a security deposit issue and wrote the process up in [my small claims step-by-step guide](/posts/file-small-claims-court-case/). The same mechanics apply here.

### Superior court: only when the stakes justify it

If your loss exceeds the small claims limit, or the contract involves complex issues, you'll be in superior court, where lawyers start at **$250–$500 an hour** and a contested case can easily burn **$15,000–$40,000** in fees. Unless your loss is well above that, litigation is a losing proposition on pure math. The only reasons to pursue it: your state has fee-shifting provisions in contractor licensing law (some do — check), or the contractor's insurer is likely to settle rather than litigate.

### The "is it worth it" test I actually use

Ask yourself three questions in order:

1. **Can I collect?** A judgment against someone with no assets is a piece of paper. Check public records for the contractor's entity status, liens, and prior judgments.
2. **Is my documentation strong enough that a judge will see it clearly?** If I'm relying on verbal promises, my odds drop hard.
3. **Is my time worth more than the claim?** At a $10,000 claim, an eight-week small claims case is worth it. At $600, filing itself is the only cost that makes sense.

In my case, the arithmetic favored small claims: I'd paid $10,200 of a $14,200 contract and gotten roughly $6,500 of work, so my damages landed around $3,700 plus my costs. Small claims was the obvious venue.

## The small claims filing, step by step

I'm not going to re-litigate every detail (the linked small claims guide covers it deeply), but here's the sequence I actually ran in 2026:

1. Confirm defendant's legal name and registered agent
   — check secretary of state business search
   — call the licensing board for the name on the license

2. File the claim at the county courthouse where the work was performed
   — bring the demand letter, contract, receipts, photos
   — pay filing fee ($75 in my case); request fee waiver if eligible

3. Serve the defendant
   — certified mail (check your state permits it)
   — or sheriff's service (more reliable, ~$75)
   — keep the service receipt; without it the case is dismissed

4. Prepare your evidence packet
   — chronological binder, tabbed by date
   — one-paragraph summary page at the front
   — bring three copies (judge, defendant, you)

5. Show up on time, dress plainly, speak only facts
   — do not argue; state what happened and what you want

The judge in my case asked three questions: was there a written contract, what did I pay, and what did I get. My binder answered all three in the first two tabs. I got a judgment for $3,850 plus filing costs in about 40 minutes of court time.

## What I'd tell myself two years ago

Two honest caveats before you head into this.

**First:** even winning doesn't mean getting paid. My judgment is now in collections — I filed a writ of execution and had the sheriff levy against the contractor's business bank account. If you skip that step, a judgment is often worthless. Check your state's procedures for wage garnishment, bank levies, and property liens, and be prepared to file the paperwork yourself. This step alone is where most of my actual time went.

**Second:** the licensing board and small claims can run in parallel, and they should. I've seen contractors suddenly find the money to finish a job when both are active at once. Don't treat them as sequential.

One more practical note: keep the paper trail going even after you file. Every text, every payment, every missed deadline belongs in the file, timestamped. When a contractor changes lawyers or strategies mid-case, a clean record is what saves you.

If a contractor was the one suing you — or if you've been served in a related dispute — the first-move playbook I wrote about in [what to do if you're being sued](/posts/what-to-do-if-youre-being-sued-a-first-time-defendants-guide/) covers that scenario in the detail it deserves.

The short version of everything above: document relentlessly, put everything in writing, file with the licensing board early, and let small claims — not a lawyer — do the heavy lifting when the numbers make sense. Your leverage comes from being the best-organized person in the room, and that's a lever you can pull starting tonight.
