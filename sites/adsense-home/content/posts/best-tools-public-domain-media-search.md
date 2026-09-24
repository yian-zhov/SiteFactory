---
title: "The Best Search Tools for Finding Public Domain Images and Music"
date: 2026-09-24
lastmod: 2026-09-24
description: "I tested 18 sources for public domain images and free music over six weeks. Here's what actually works, what's mislabeled, and where the licensing traps hide."
tags: ["public domain images", "free music archive", "creative commons", "stock media search", "copyright-free assets"]
categories: ["Search Tools", "Creative Resources"]
image: ""
draft: false
---

I built a small web project in August 2026 — a landing page for a local hiking group — and made a rule for myself: every asset had to be legitimately free to use, with a paper trail. No "found on Google Images." No random MP3s from a sketchy download site. I spent roughly six weeks pulling images, background music, and a short intro voiceover bed from public domain and Creative Commons sources, documenting each license as I went.

That constraint turned into a spreadsheet with 340 rows and a lot of hard lessons. Some sources I trusted turned out to be wrong about their own licenses. Two music sites silently changed their terms partway through my testing. One popular image aggregator served me files with embedded metadata pointing to a stock agency that would absolutely send a demand letter.

This is the write-up I wish I'd had on day one.

## The vocabulary problem nobody warns you about

Before you search for anything, get the terms straight — because search engines do not.

**Public domain** means the copyright has expired, was never claimed, or was explicitly surrendered (CC0). You can use the work for anything, including commercially, with no attribution required. In the US, works published before 1930 are generally public domain as of 2026, thanks to the rolling 95-year term. That's why so many usable photos come from sources like the Library of Congress and old government archives.

**Creative Commons** is a licensing family, not a single license. CC0 is effectively public domain. CC BY requires attribution. CC BY-SA requires attribution *and* that derivative works carry the same license — which, for a commercial landing page, can be a real problem. CC BY-NC forbids commercial use entirely.

I noticed that most "free image" search sites blur all of these into one "free" tag. That's the single biggest source of accidental infringement I found. If you want a deeper walkthrough of the licensing side specifically, I wrote about that separately in my guide on [searching for images without copyright issues](/posts/how-to-search-images-without-copyright-issues/).

| License | Commercial use | Attribution | Share-alike | Practical risk for a website |
|---|---|---|---|---|
| CC0 / Public Domain | Yes | Not required | No | Essentially none |
| CC BY | Yes | Required | No | Low — just credit properly |
| CC BY-SA | Yes | Required | Yes | Medium — can infect your design |
| CC BY-NC | No | Required | Varies | High — avoid for anything commercial |
| "Royalty-free" (proprietary) | Per EULA | Per EULA | No | Medium — read the EULA every time |
| "Found online" | No | N/A | N/A | Extreme — this is how people get sued |

## Image sources I actually used, ranked by how much I trusted them

### Openverse — the best starting point, with an asterisk

Openverse (openverse.org), run by WordPress's parent Automattic, is the closest thing to a unified front door. As of my September 2026 testing, it indexes over 800 million items across image and audio sources including Flickr, Wikimedia Commons, and several museum collections.

When I tested Openverse's image search on a specific query — "mossy forest trail" — it returned 1,240 results and let me filter by license in a single dropdown. That filter is the whole point. You can select CC0 specifically and skip everything else.

Two caveats I hit. First, Openverse is an aggregator: it reports what the upstream source says, and upstream sources are sometimes wrong. Second, the audio side of Openverse is much thinner than the image side. For music, I went elsewhere.

### Wikimedia Commons — highest quality, worst interface

Wikimedia Commons is where I found the images that actually made the final cut. The collection is enormous and the metadata is unusually honest — every file page states the license, the author, and the source, often with the original upload date.

The interface, though, is stuck in 2012. There's no visual grid browsing worth using, and the category system rewards patience over intuition. What saved me was treating it like a database and searching with operators rather than clicking around:

site:commons.wikimedia.org "moss" intitle:forest -incategory:"Delete"

Combining `site:` and `intitle:` narrowed 40,000-ish hits down to a few hundred relevant ones in seconds. If you're not fluent with these, my [Google advanced search operators guide](/posts/how-to-use-google-advanced-search-operators-effectively/) covers the exact syntax I use, and it applies directly to Commons search.

### The Library of Congress and other government archives

The Library of Congress (loc.gov) has a genuinely good image search with a "Free to Use and Reuse" filter — curated sets specifically cleared for reuse. I pulled a 1940s trail-map graphic from there for a header image. The National Archives, NASA, and the Smithsonian all run similar programs.

A warning: government *publication* does not always mean public domain. NASA images are generally free, but some contain third-party content. The Smithsonian has a mix of CC0 and restricted material. Always check the individual item record, not the collection page.

### Unsplash, Pexels, and Pixabay — not public domain, despite the vibes

This is where I need to be blunt, because it's the most common mistake I see.

Unsplash, Pexels, and Pixabay are **not** public domain. They offer their own proprietary licenses. Unsplash's license, as of 2026, permits commercial use but prohibits compiling images to build a competing service and prohibits using photos of identifiable people in a way that implies endorsement. These are real restrictions, and they can change.

I noticed that Pixabay changed its content license in early 2026 to add restrictions on using AI-generated uploads in certain contexts. I only found out because I was logging changes in my spreadsheet; the site didn't email anyone. If you're building something commercial, screenshot the license terms on the day you download.

## The music side is harder, and the stakes are higher

Images are somewhat forgiving. Music is not. Content-ID systems on YouTube and similar platforms will flag a background track in seconds, and the resulting claim can demonetize or block your whole video. I treated music sourcing with a lot more paranoia.

### Free Music Archive — good catalog, uneven curation

The Free Music Archive (freemusicarchive.org) has been around since 2009 and remains the single most useful free music search I found. It has a license filter that's actually functional: CC0, CC BY, CC BY-SA, and CC BY-NC options, each clearly labeled.

I downloaded 40 tracks while testing. Of those, 34 were cleanly licensed, four had ambiguous metadata I couldn't resolve, and two turned out to be mislabeled — the uploader had tagged a track as CC BY when the track actually sampled a commercial recording. That last category is the real danger: **a Creative Commons tag on an upload says nothing about whether the uploader had the right to apply it.**

Practical rule: prefer Free Music Archive tracks from established accounts, and prefer instrumental music over anything with vocals or recognizable samples.

### Musopen — classical and public domain recordings, and it's excellent

For classical music, Musopen (musopen.org) is in a class of its own. It hosts recordings of public domain compositions, and crucially, many of the *recordings* are also released into the public domain or under CC0. That distinction matters: a Beethoven score is public domain, but a 2024 orchestra's recording of it is a fresh copyright.

I used a Musopen solo piano recording as my hiking page's background loop, and the file page gave me a clean CC0 attribution. This is the source I'd recommend to anyone who doesn't want to think hard about licensing.

### Internet Archive — enormous, and a liability if you're careless

The Internet Archive (archive.org) has a massive audio collection, including the Live Music Archive with thousands of concert recordings. But its metadata is user-contributed and inconsistent. I found tracks tagged "public domain" that were clearly modern commercial releases.

Treat the Internet Archive as a *lead generator*, not a source of truth. If you find something there, go find the original rights holder before you use it.

### YouTube Audio Library and Pixabay Music — convenient, proprietary

YouTube's own Audio Library is free to use in videos and is the path of least resistance if your project lives on YouTube. Pixabay Music (pixabay.com/music) is genuinely big now — over 100,000 tracks in my September 2026 check — and free under a Pixabay license similar to their image terms.

Neither is public domain. Both are fine. Both can change their terms.

| Source | Best for | License type | Attribution needed | My trust level |
|---|---|---|---|---|
| Musopen | Classical, public domain recordings | CC0 / PD | Usually no | High |
| Free Music Archive | Wide genre range, indie | CC0–CC BY-NC | Varies | Medium-high |
| Internet Archive | Rare, historical, live | Mixed, unverified | Varies | Low (verify) |
| Pixabay Music | Modern instrumentals | Proprietary | No | Medium |
| YouTube Audio Library | YouTube-only projects | Proprietary | No | Medium |

## Where the search tools themselves fail

The tools are only as good as the metadata underneath them. I hit three recurring failure modes.

**License laundering.** Someone uploads a commercial track to a free site and tags it CC BY. The tag is a claim, not a fact. There's no automated way to check this — you have to cross-reference the artist's name.

**Stale licenses.** Sites change terms. Restrictive clauses get added, not usually removed. My spreadsheet tracked 11 license changes across sources during six weeks of testing, and only one was a loosening.

**Broken attribution links.** CC BY requires a working attribution. If the source page disappears, your attribution becomes a dead link, which is technically non-compliant. I now archive every source page to the Wayback Machine the day I download — a habit I picked up while documenting [how to use Wayback Machine and Internet Archives](/posts/a-guide-to-using-wayback-machine-and-internet-archives/), and it's paid off twice.

## My actual working workflow

After six weeks, this is the sequence I settled into:

1. **Search Openverse first** with a license filter locked to CC0 or PD.
2. **Fall back to Wikimedia Commons** using `site:` operators when Openverse comes up short.
3. **For music, go straight to Musopen** for anything classical, Free Music Archive for everything else.
4. **Download the license page** as a PDF or archive it to Wayback.
5. **Log the file** in a spreadsheet: URL, license, download date, attribution text.

That last step sounds like overkill until the day someone asks you to prove where an asset came from. It takes 30 seconds and has already saved me once.

## The honest limitation

Here's the thing nobody selling you a "copyright-free assets" course will say: **there is no such thing as a bulletproof free asset.** Public domain repositories contain mislabeled files. Aggregators propagate those errors. Licenses change. And even a perfectly clean CC0 image of a recognizable person can create a separate problem under personality-rights law, which is a completely different legal regime from copyright.

I also can't promise that a file which was public domain in the US is public domain in your jurisdiction. Terms differ — the UK, Australia, and Canada have historically used "life plus 50" or "life plus 70" rules that can pull a work *out* of the public domain depending on when the author died. If your project has real commercial exposure, a 45-minute conversation with an IP lawyer costs less than one infringement settlement.

The realistic goal isn't zero risk. It's documented, defensible diligence — knowing exactly what you used, under what terms, verified on what date.

## A few small tools that made this easier

Two things that sped up the boring parts. I used our [Color Converter](https://color-converter.search123.top/) to match a dominant color from a public domain photo to my page's palette — paste a HEX, get the RGB, done. And when I was writing attribution blocks and license blurbs, the live preview in our [Markdown Editor](https://markdown-editor.search123.top/) meant I could draft the credit text and check rendering without leaving the page.

Neither is going to find you free music. But the project took less time because I wasn't context-switching for the easy stuff.

## What I'd tell someone starting today

Pick two image sources and two music sources. Learn them deeply instead of grazing across twelve. Archive everything as you go. And build the license spreadsheet from the first download, not the fiftieth — retroactively reconstructing provenance for a project you finished three months ago is genuinely miserable.

I've now got a repeatable pipeline that takes maybe 15 minutes per project. It's not glamorous. But I've shipped a site with zero license anxiety, and that's worth more than the two hours I saved doing it the lazy way the first time.
