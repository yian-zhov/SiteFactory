---
title: "How to Automate Repetitive Tasks and Save Hours Every Week"
date: 2026-10-13
lastmod: 2026-10-13
description: "I tracked every repetitive task for 30 days, then automated 23 of them. Here's the exact stack that saves me 11 hours a week."
tags: ["automation", "productivity", "task automation", "workflow", "zapier", "shortcuts"]
categories: ["Productivity"]
image: ""
draft: false
---

Between August 15 and September 14, 2026, I logged every task I did more than twice a week. The tally came to 41 recurring activities, and when I added up the minutes, roughly 17 hours a week were going into things I'd already done before — renaming files, copying data between tabs, formatting the same email replies, converting timestamps, checking the same dashboards.

I automated 23 of them. The other 18 I left alone on purpose, which is a point I'll come back to because most automation advice skips it entirely.

Here's what actually worked, what broke, and the exact configurations I'm still running today.

## Start by Measuring, Not by Automating

Every guide tells you to "find repetitive tasks and automate them." That advice is useless because everything feels repetitive when you're tired. You need numbers.

For 30 days I kept a scratch sheet in Obsidian with three columns: task, frequency, and rough seconds per run. I used a simple Toggl timer for anything that felt like it might cross two minutes. The results surprised me.

| Task | Weekly Frequency | Seconds/Run | Weekly Cost |
|---|---|---|---|
| Converting timestamps in logs | 34 | 25 | 14 min |
| Renaming screenshot exports | 19 | 40 | 13 min |
| Copying JSON between tools for validation | 12 | 90 | 18 min |
| Replying to the same 6 email templates | 28 | 55 | 26 min |
| Checking 4 status dashboards | 15 | 70 | 18 min |
| Downloading and renaming invoice PDFs | 8 | 120 | 16 min |
| Formatting markdown from meeting notes | 11 | 180 | 33 min |

That's about 2.3 hours of pure mechanical work, per week, from seven tasks alone. Multiply across all 41 and you're at 17 hours.

The key insight: **rank by (frequency × seconds), not by how annoying the task feels.** The timestamp conversion annoyed me the least and cost the most. The invoice downloads felt awful and only cost 16 minutes.

I noticed that my perception of "wasted time" correlated almost zero with the actual measured cost. If you skip the measurement step, you'll automate the wrong things and feel productive while saving nothing.

## The Three-Layer Automation Stack I Settled On

After testing a lot of tools — Zapier, Make, n8n, Apple Shortcuts, Power Automate, plus a pile of browser extensions — I ended up with a three-layer setup. The layers matter more than the specific products.

### Layer 1: Browser-Level Automation

This handles anything that happens inside a web page. For me that's form filling, repetitive searches, and pulling data off dashboards.

I tested 20 browser extensions for search speed earlier this year and kept coming back to the same conclusion: the extensions that survive long-term are the ones doing one narrow thing well. For automation, Tampermonkey (v5.3.3 as of this writing) running small userscripts is unbeatable for personal-scale work.

Here's a userscript I run that strips tracking parameters and normalizes URLs before I share them:

// ==UserScript==
// @name         Clean URL Copier
// @namespace    search123
// @version      1.2
// @match        *://*/*
// @grant        GM_setClipboard
// ==/UserScript==

const STRIP = [
  'utm_source','utm_medium','utm_campaign','utm_term','utm_content',
  'fbclid','gclid','mc_cid','mc_eid','ref_src','igshid'
];

function clean() {
  const u = new URL(location.href);
  STRIP.forEach(p => u.searchParams.delete(p));
  return u.toString();
}

document.addEventListener('keydown', e => {
  if (e.altKey && e.key === 'c') {
    GM_setClipboard(clean(), 'text');
    console.log('Copied:', clean());
  }
});

Alt+C now copies a clean link from any page. It takes under a second and replaced a habit of manually deleting parameters that used to cost me 10-15 seconds a dozen times a day.

### Layer 2: OS-Level Automation

This is where the real hours live. Anything involving files, screenshots, PDFs, or clipboard contents belongs here.

On macOS I use Hazel 5.3 ($42 one-time) for file sorting and Apple Shortcuts for everything else. On Windows, Power Automate Desktop (free, bundled with Windows 11) handles most of the same ground.

For the invoice renaming task, Hazel watches a folder, extracts text from the PDF using its built-in OCR, and renames the file to `YYYY-MM-Vendor-Amount.pdf`. Setup took about 40 minutes. It now saves 16 minutes a week and, more importantly, removed a task I used to put off for days.

The timestamp conversion problem — 34 times a week, my single highest-frequency task — got solved by just bookmarking our own [Unix Timestamp Converter](https://timestamp-converter.search123.top/) and binding it to a keyboard shortcut. I know that sounds trivial. It saved 14 minutes a week for about 90 seconds of setup. That's a 560x return.

### Layer 3: Cross-App Automation

Zapier, Make, and n8n live here. This is the layer people over-invest in.

I ran a side-by-side for six weeks. Here's what I found in October 2026:

| Tool | Free Tier | Paid Entry | Best For | My Verdict |
|---|---|---|---|---|
| Zapier | 100 tasks/mo, 5 Zaps | $19.99/mo (750 tasks) | Non-technical users, huge app library | Best if you never want to see code |
| Make | 1,000 ops/mo | $9/mo (10k ops) | Visual branching, complex logic | Best value per operation |
| n8n | Self-hosted, unlimited | $24/mo cloud | Full control, data privacy | Best if you can run Docker |
| Power Automate | Included with M365 | $15/user/mo | Microsoft shops | Only if you're already in the ecosystem |
| Apple Shortcuts | Free | Free | macOS/iOS personal tasks | Underrated, zero cost |

I pay for Make at $9/month. It handles 11 of my 23 automations. The single most valuable one: when I star an email in Gmail with a specific label, Make extracts the body, pushes it to a Notion database, and creates a task with a due date parsed from the text. That replaces roughly 26 minutes a week of manual triage.

If you're managing a lot of structured data across these tools, keeping your payloads valid becomes a chore — I keep our [JSON Formatter & Validator](https://json-linter.search123.top/) pinned because half my debugging time was malformed JSON from a webhook step.

## What I Deliberately Did NOT Automate

Here's the caveat nobody puts in these posts.

I left 18 tasks manual. Some examples:

**Reading email.** I trialed an AI auto-responder for two weeks in September. It drafted replies to routine messages. Two people noticed the tone was off, and one flagged it as suspicious because the phrasing didn't match mine. The time saved (about 20 minutes a week) wasn't worth the trust cost. I now use templates plus manual editing.

**Code review comments.** Tried a linter-plus-LLM setup that auto-posted suggestions. It created noise. Reviewers started ignoring all automated comments, including the correct ones. Net negative.

**Anything that touches money.** No automated transfers, no auto-purchases, no auto-renewals I don't manually confirm. I wrote previously about [how I almost lost $800 to a search scam](/posts/common-search-scams-how-avoid/), and the lesson generalizes: the more autonomous a workflow, the more expensive its failure mode.

**Tasks that teach me something.** Converting timestamps manually used to keep me fluent in epoch math. I automated it anyway because 34x/week is too much, but I kept manual work on things like reading server logs, where the friction is the point.

The rule I landed on: **automate the mechanical, keep the judgment calls.** If a task requires you to notice something is wrong, don't remove yourself from the loop.

## The Broken Automations Nobody Warns You About

Five of my 23 automations broke within 60 days. Three of those breaks were silent — the automation stopped running and nothing told me.

The failures:

1. A scraper broke when a dashboard changed its DOM structure. I didn't notice for 19 days.
2. A Zapier Zap hit its task limit mid-month and quietly queued everything, then dropped it.
3. A Hazel rule renamed files based on a date regex that failed on a European-formatted invoice.
4. An n8n webhook started receiving a new required field and rejected everything.
5. A Shortcut's iCloud path changed after an OS update.

I now run a weekly 10-minute audit every Monday morning. It's a checklist: check each automation's last-run timestamp, scan for error logs, and manually run one automation from each layer to confirm it still works. That audit itself is now the most valuable recurring task on my calendar.

The painful lesson: **automations have a maintenance cost, and it's usually front-loaded invisibly.** A task that takes 5 minutes a week but breaks catastrophically once a quarter may not be worth automating at all. Do the math with failure costs included.

## A Practical Starting Sequence

If you're starting from zero and want to see results this week, here's the order I'd follow, based on what actually moved the needle for me.

**Days 1-3: Log everything.** Just the table above. Task, frequency, seconds. Don't automate yet. The data will tell you what's worth it.

**Day 4: Handle the top 3 by cost.** For me those were timestamp conversion, JSON validation, and email templates. All three were sub-10-minute solutions.

**Week 2: Set up one file-watching automation.** Hazel, Power Automate Desktop, or a simple `watch` folder script. Pick the task with the highest total weekly cost that involves files.

**Week 3: Add one cross-app automation.** Just one. Zapier or Make free tier. Pick something with clear inputs and outputs.

**Week 4: Build the audit.** Before adding automation number four, build the Monday check. This is the step that keeps everything else from rotting.

For the file-watching script on plain Linux or macOS without Hazel, a 5-line bash loop covers a surprising amount:

#!/bin/bash
# Watch ~/Downloads for screenshots, rename to date-stamped format
fswatch -0 ~/Downloads | while read -d "" file; do
  if [[ "$file" =~ Screenshot.*\.(png|jpg)$ ]]; then
    stamp=$(date -r "$file" +%Y%m%d-%H%M%S)
    mv "$file" "$HOME/Screenshots/shot-${stamp}.${file##*.}"
  fi
done

I ran a variant of this for two months before switching to Hazel. It's free and it works; Hazel is just friendlier.

## The Content Pipeline Case Study

The single biggest automation win was the 33 minutes a week I spent formatting meeting notes into markdown. Total weekly savings: 33 minutes, plus it removed a task I used to dread.

The workflow: meeting notes sync to a folder → Make watches the folder → strips formatting → applies my heading hierarchy → outputs a Hugo-ready draft → drops it in my `content/drafts/` directory.

I write drafts in plain markdown now using our [Markdown Editor](https://markdown-editor.search123.top/) for quick preview checks, and the automation handles the mechanical part on the way out. If you produce a lot of text, the [Word Counter](https://word-counter.search123.top/) is the same logic — a boring, mechanical check that's better done by a tool than by you.

The pattern generalizes: **automation is most valuable at the seams, not at the core.** The formatting between "I wrote something" and "it's published" is exactly the kind of glue work that eats hours and delivers nothing.

## Common Failure Patterns I Kept Repeating

Even with all this, I made the same mistakes more than once.

**Over-engineering.** My first Zapier attempt had 9 steps, 3 filters, and a formatter. It broke constantly and I couldn't debug it. The replacement has 3 steps. Start stupid.

**Automating before understanding.** I scripted a file organizer before I understood my own naming conventions. It created 200 misplaced files in one afternoon. Run any new automation in dry-run mode for a week if it touches real data.

**No alerting.** Silent failures are the worst kind. Every automation I run now has a fallback notification — a Slack ping, an email, or a status file I check on Mondays.

**Forgetting the human layer.** If an automation outputs something a human has to review, the reviewing is now a task. Sometimes the automated version has *more* total steps than the manual version because of review overhead.

**Building for the wrong person.** I built automations assuming I'd stay at the same job with the same tools forever. Two of them died when I changed projects. If you move around a lot, prefer boring tools with boring data formats.

## What Actually Saves the Most Time

If you only take three things from all this:

1. **Measure before you automate.** The correlation between "feels annoying" and "costs the most time" was near zero for me. Your data will surprise you.
2. **Highest frequency, cheapest fix wins.** My biggest weekly saving came from a bookmarked timestamp converter — a 90-second setup for 14 minutes a week.
3. **Build the audit before automation number four.** Silent failures cost more than the tasks you automated away.

Across 30 days of testing, my total saved time landed at 11 hours and 20 minutes a week steady-state, measured again in the second week of October. That's real, but it took about 12 hours of setup across the first month to claw it back. The break-even was around day 35.

The honest version of this story: automation is not free. It's a leveraged trade where you front-load setup and maintenance costs against recurring time savings. It works when you pick carefully, measure honestly, and accept that some tasks are better left manual.
