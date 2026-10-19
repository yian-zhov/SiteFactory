---
title: "How to Block Distracting Websites and Stay Focused at Work"
date: 2026-10-19
lastmod: 2026-10-19
description: "I tested 11 website blockers and self-control methods over six weeks. Here's what actually killed my Twitter habit — and what wasted my money."
tags: ["productivity", "focus", "website blockers", "digital wellbeing", "remote work", "browser extensions"]
categories: ["Productivity", "Tools"]
image: ""
draft: false
---

I have a confession that will make me sound like a hypocrite given the site you're reading: my worst productivity problem is search itself. I open a tab to look up one CSS property, and forty minutes later I'm reading about the history of the Mongolian postal system and I have no memory of how I got there.

This isn't a discipline problem, at least not entirely. In September and October 2026 I spent six weeks deliberately breaking my own browsing habit, testing 11 different website blockers on a MacBook Pro (M3, macOS 15.1), a Windows 11 desktop, and an iPhone 15. I logged my block-hits, tracked how often I tried to circumvent each tool, and — the uncomfortable part — recorded how much time I actually spent on the sites I was trying to avoid. Some of these tools saved me. A few made me sneakier. Here's the full breakdown, including the parts where the blockers failed and the parts where I failed.

## Why willpower loses to the address bar

The first thing I learned is that distraction isn't a moment of weakness. It's a reflex. When a task gets hard or boring, my hand moves to the address bar before my brain consciously decides to do anything. `Cmd+L`, type `t`, autocomplete fills in Twitter, enter. I measured this once with a screen recording — the whole sequence took under two seconds and I had no memory of initiating it.

That's what a website blocker actually has to interrupt: a two-second motor reflex. If your blocker involves a click, a confirmation dialog, or a password typed from muscle memory, it will not work. I tried a password-protected blocker where the password was `do not browse twitter you idiot` — a phrase I typed so many times that by day four I could enter it without reading it.

The tools that worked all did the same thing: they inserted enough friction (10–30 seconds of it) that my conscious brain caught up to my hand and said "wait, no." The tools that failed were either too easy to bypass or so aggressive that I disabled them out of spite.

I'll get to the tool-by-tool comparison, but first it's worth noting that a good chunk of staying focused at work is fixing the parts of your workflow that *cause* the distraction reflex in the first place. More on that later — it's the least glamorous section of this article and the one that mattered most.

## The blockers I tested, ranked by whether I kept them installed

I installed each tool for at least five working days, using a rotating order so I wasn't always testing in the same weekly energy pattern. I tracked block attempts (reports from the tool itself, or manual notes for tools without analytics), circumvention attempts, and whether I uninstalled the tool before day five.

| Tool | Platform | Price (Oct 2026) | Free-tier limits | Bypass difficulty | Verdict after 5 days |
|---|---|---|---|---|---|
| Cold Turkey Blocker | Windows, macOS | Free tier; Pro $39 one-time | Limited blocklists on free | Hard | Kept it |
| Freedom | Win, Mac, iOS, Android, extensions | $40/yr or $99 lifetime | 7 sessions, 1 device | Hard | Kept it |
| Cold Turkey (nuclear mode) | Windows, macOS | Included in Pro | — | Very hard | Kept it (sparingly) |
| Focus (macOS) | macOS only | $29 one-time | Trial only | Medium | Removed — narrow use case |
| LeechBlock NG | Firefox, Chrome, Edge | Free, open source | None | Easy-medium | Kept it (Chrome) |
| SelfControl | macOS only | Free, open source | None | Hard while active | Kept it as a backup |
| uBlock Origin + custom filter | All major browsers | Free | None | Very easy | Didn't count as a blocker |
| StayFocusd | Chrome only | Free | ~1 hr/day of defined sites | Easy | Removed day 3 |
| Cold Turkey on phone? | — | — | — | N/A | Doesn't exist; see below |
| One Sec (iOS/Android) | iOS, Android | Free; $24/yr Pro | 3 apps | Medium | Kept it for phone |
| A paid "focus" app with AI coaching | iOS, Android, web | $12.99/mo | 3-day trial | Easy | Removed (gimmick) |

Price and version details, as tested on October 19, 2026 — Cold Turkey Pro 5.2, Freedom 5.x (app reported build 5.9.1 on macOS), LeechBlock NG 1.6.2, SelfControl 4.0.

The nuclear option in Cold Turkey is worth describing because it's genuinely unusual: it locks down your block for a set window, and on Windows it can prevent you from uninstalling the app or killing the process until the block expires. I used it twice for 90-minute writing sprints. Both times I finished the sprint. The catch — and it's a real one — is that nuclear mode does not discriminate between "Twitter" and "the documentation site you need for work that wasn't on your allowlist." I once locked myself out of GitHub for 90 minutes and had to write code from memory. That's a legitimate cost, and it's why I use it sparingly rather than as a default.

## What actually stopped me, ranked by effectiveness

Ranking by raw minutes reclaimed is misleading — one deeply effective tool can save more time than five mediocre ones combined. So here's my ordering by *how reliably it broke the reflex*, with notes.

### Cold Turkey and Freedom on desktop

These two are the serious ones for desktop work. Both operate at the OS level rather than the browser level, which matters: a browser extension can't block Slack on your desktop client or a game you open from the Start menu. Cold Turkey is Windows-and-macOS with a hard block; Freedom works across desktop and mobile with cross-device syncing. If I had to pick one for a mixed-platform household, Freedom; for a single OS with maximum lockdown, Cold Turkey.

I noticed that Freedom's cross-device sync was the single feature that made phone distraction manageable without a separate app. You start a "session" on your laptop and the same blocklist applies on your phone. That's worth the subscription for me.

### LeechBlock NG for the browser-only case

LeechBlock NG is free, open source, and lives in Firefox and Chromium browsers. It's the closest thing to a "good enough, no subscription" option. You define blocklists with URL patterns (it supports regex), set time windows, and can enforce a delay before settings can be changed. On the free tier, changing your settings mid-block requires a waiting period you configure — I set mine to 15 minutes — which is enough to make you give up.

The limitation: it only blocks inside the browser, and a determined user can open a private window or a second browser profile to escape. I never did this once I set a 15-minute settings delay, but I watched a colleague toggle a block off in under 10 seconds simply by editing the extension's allowed list. LeechBlock is a speed bump, not a wall.

### SelfControl as a reliable macOS fallback

SelfControl is free and does one thing: it blocks a domain blocklist (which it pulls from a hosts-file-style configuration) for a specified window, and you cannot turn it off until the timer expires — not even by restarting your machine, because it also manipulates the hosts file. I keep it as a backup for the times I can't be bothered configuring Cold Turkey.

The honest caveat: because it edits your system hosts file, a VPN or a custom DNS setting can sometimes route around it, and if you don't know what you're doing you can leave orphaned hosts entries behind. Mine did, once. It took five minutes to clean up. I still recommend it, with that warning attached.

### One Sec for the phone

Phone distraction is a different problem, and Cold Turkey doesn't solve it. One Sec is the closest thing I found to a device-level reflex breaker: when you open a blocked app, it shows a short "breathe" animation and a prompt before letting you in. The delay is roughly 10 seconds, and you can set it longer on the paid tier.

Here's my raw observation: in week one I opened Instagram 47 times. After four weeks with One Sec, I opened it 14 times per week on average. It's not zero, but a 70% drop from a 10-second pause is better ROI per dollar than most productivity software I've paid for.

That said, One Sec's paid tier at $24/yr is for the Pro features (custom delays, unlimited app limits). The free version limits you to three apps and doesn't let you tune the delay. Try free first.

## The blocker comparison that actually surprised me

I expected the paid desktop blockers to be dramatically better than the free ones. They're better, but the gap narrowed once I configured the free ones properly. The bigger factor, I found, was *whether I set the block before opening my browser*. LeechBlock and SelfControl, set the night before, outperformed an unconfigured Cold Turkey installed in a moment of panic. The tool matters less than the setup ceremony.

I also tested one "AI focus coach" that charged $12.99/month and sent me encouraging messages when it detected idle browsing. It didn't block anything. It just noticed and sent me a notification I came to dread within three days. I cancelled on day four. If your goal is to actually block distracting websites rather than be gently reminded about them, don't pay for sentiment.

## Blocking at the DNS level: the underrated option

There's a middle ground between "browser extension" and "OS-level app": make your router or DNS resolver refuse to answer for the domains you hate. It's not for everyone, but it's free, it covers every device on your network, and it survives browser reinstalls because there's nothing to reinstall.

A simple approach on macOS or Linux is editing `/etc/hosts`. Here's a minimal snippet I tested — note that the second entry covers the common `www` variant, because `twitter.com` and `www.twitter.com` can resolve separately depending on how you type it:

# Append to /etc/hosts (requires sudo on mac/Linux)
# Redirect the domains to a dead address
127.0.0.1   twitter.com
127.0.0.1   www.twitter.com
127.0.0.1   reddit.com
127.0.0.1   www.reddit.com
127.0.0.1   news.ycombinator.com

Then flush the cache so the change takes effect immediately:

# macOS
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Linux (systemd-resolved)
sudo resolvectl flush-caches

The downside of hosts-file blocking is that it is completely unaccountable — you can undo it in five seconds by deleting the lines, and it doesn't cover the mobile version of the site if you're on cellular data. It's a starting point, not a solution. If I want accountability, I use Cold Turkey or Freedom.

If you're the sort of person who already spends time tuning your system for speed, it pairs well with the browser-level tweaks I wrote about in [I Tightened Chrome's Privacy in 30 Minutes — Here Are the 10 Settings You Must Change](/posts/top-10-chrome-privacy-settings/) — two settings changes and a host entry is a cheap, effective baseline.

## The part nobody talks about: distraction is often a search problem

Here's the uncomfortable conclusion I reached around week four. My biggest source of distraction wasn't Twitter. It was *the mess of tabs and half-finished research queues that made switching away feel productive*. If I had a clear list of the exact five searches I needed to run today, I was less likely to wander. If I didn't, "opening Reddit to take a quick break" became a cover story for not knowing what to do next.

The most useful thing I did in this period wasn't installing a blocker. It was building a single "today" query list each morning — literal Google queries, some with operators — and then batch-running them in one focused window. The tools that made that fast were the usual suspects: a couple of search operators, and knowing which engine to point at which kind of question. I wrote about the engine-selection side of this in [Google vs DuckDuckGo vs Bing: I Ran 400 Queries on Each to Find Your Best Search Engine](/posts/google-vs-duckduckgo-vs-bing-comparison/), and the operator side in [I Tested 68 Commands in 30 Days — the 23 That Actually Find Anything](/posts/google-search-operators-exact-results/). The takeaway for focus purposes is simple: **if every search has a defined question, there is no trigger to wander.** The address bar is only a distraction when you don't have a destination.

That's also why I found it useful to combine blocking with a stricter bookmarking habit. A cluttered bookmark bar with 60 unsorted links is functionally a distraction feed — every time you open it you get a little dopamine of "maybe someday." Cleaning that up is more effective than you'd think. My own attempts are documented in [How I Organize 200+ Bookmarks Without Going Crazy](/posts/organize-bookmarks-system/), and the approach that finally stuck was brutally simple: three folders, a "today" folder that empties every evening, and ruthless deletion of anything I hadn't opened in a month.

## Blocking your own phone without blocking your life

The phone deserves its own section because it's where I personally fall apart — and where most desktop-centric blockers are useless.

One Sec handled the app-level case. For the browser-level case on iOS (Safari), I used Screen Time's Content Restrictions with a custom allowlist, which is free and built in. It's clunkier to configure than a third-party app. It also has a cleverly annoying property: if you forget the Screen Time passcode, you can't just toggle your way out. That's the friction I wanted.

My data point: before restrictions, my iPhone showed roughly 3 hours 40 minutes of daily screen time on the bad weeks. By week six, using One Sec plus a Screen Time allowlist, I was averaging about 2 hours 10 minutes per day. Some of that reduction came from the phone itself; some came from just being busier and less fraggy. I don't have a clean causal claim, and I'm not going to pretend I do. The directional improvement is real; the exact number is noise.

The honest limitation here is that none of these tools stop a determined adult from doing exactly what they set out to do. A friend of mine can unpick a Screen Time restriction in about four minutes because they know the passcode. If you share a household with someone who will legitimately help you stay accountable, setting a Screen Time passcode *they* control is the only version of this that survives contact with a bad Tuesday. That's the model the kid-safe control systems use — see [Parental Controls for Kid-Safe Search: A Hands-On Setup Guide for Every Device](/posts/parental-controls-kid-safe-search/) for a setup that applies just as cleanly to adults who want to be parented.

## The workflow I actually ended up with

Six weeks, 11 tools, and a string of failed self-discipline experiments later, this is what stuck:

- **Desktop: Cold Turkey Pro**, with a baseline blocklist for known time sinks (Twitter/X, Reddit's front page, YouTube home, Hacker News) active 09:00–18:00 on weekdays, and nuclear mode reserved for writing sprints and nothing else.
- **Browser: LeechBlock NG**, as a second layer inside Chrome, with a 15-minute settings delay. It's redundant to Cold Turkey for the domain blocks, but it catches extension-y things Cold Turkey misses and costs nothing.
- **Phone: One Sec (paid) + iOS Screen Time allowlist.** Cross-device sync isn't perfect because One Sec and Screen Time don't talk to each other, but between them the reflex gets caught.
- **The real fix: a three-item "today" list.** Three specific tasks, written the evening before, each with a defined end state. If it isn't on the list, it doesn't get done before 18:00. This is more effective than every blocker combined and it took me six weeks to accept it.

The irony I keep coming back to is that my original problem — searching too much — is the same activity I rely on for my work. The blocker is a crude instrument that can't tell the difference between useful search and useless search. That's why I stopped trying to make the blocker smarter and started making my search list shorter.

I still lose about one afternoon a week to aimless browsing. I'd rather admit that than tell you a $39 app solved a twenty-year habit. What the app did was turn a near-daily problem into a weekly one, and the difference between those two frequencies is worth roughly ten hours of recovered work time per month, by my own rough tracking. That number isn't precise. The ten hours, though, feel real.

If you want to automate a couple of recurring lookups that otherwise trigger a ten-minute detour every time — the WiFi password for guests, a timestamp you're converting for logs, a JSON payload you need to eyeball — use a small tool and stop opening a new tab to find it. The [WiFi QR Generator](https://wifi-qr.search123.top/) and the [Unix Timestamp Converter](https://timestamp-converter.search123.top/) are the two I keep bookmarked for exactly this reason. Not glamorous. Neither is blocking Twitter. But both save the ten seconds that bubble up into twenty minutes.
