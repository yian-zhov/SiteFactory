---
title: "How to Set a Custom Search Engine in Chrome and Firefox"
date: 2026-09-16
lastmod: 2026-09-16
description: "A hands-on guide to custom search engine shortcuts in Chrome and Firefox, with tested configs for site search, keyword shortcuts, and quick-switching engines."
tags: ["search engines", "chrome", "firefox", "productivity", "browser tips"]
categories: ["Search Tips", "Productivity"]
image: ""
draft: false
---

I have 34 custom search engines saved in Chrome right now. I know that number because I exported my browser profile last Tuesday to migrate to a new work laptop, and the `Web Data` SQLite file listed every single one. Some of them I use a dozen times a day. Others I set up during a caffeine-fueled evening in March and forgot about within a week.

The ones that survived are the ones that changed how I actually find things. Not dramatically — I'm not going to pretend a browser setting saved my career — but enough that going back to typing a full URL and hunting for a search box feels genuinely slow. If you've ever pasted a site's name into Google just to find something you know exists on that site, this guide is for you.

I tested every step below on Chrome 128.0.6613.120 (Windows 11) and Firefox 130.0.1 (macOS Sonoma), with spot checks on Chrome for Android and Firefox for iOS. Where the two browsers diverge, I'll say so explicitly, because they diverge a lot more than most tutorials admit.

## What a Custom Search Engine Actually Does

A custom search engine in a browser is a saved rule that maps a short keyword to a URL pattern containing a placeholder for your query. When you type that keyword followed by a space and some text in the address bar, the browser swaps the placeholder for your text and loads the resulting URL.

That's the whole mechanism. It sounds trivial. It isn't, because the placeholder is a raw URL component, which means you can point a keyword at almost any site that accepts a query parameter — a wiki, a documentation site, a price comparison tool, an internal company dashboard, a search API endpoint if you're feeling adventurous.

The keyword is the part people underestimate. I use single or double letters where possible: `w` for Wikipedia, `yt` for YouTube, `gh` for GitHub, `m` for my own notes. Short keywords mean the friction of using them drops to near zero, and near-zero friction is the only reason a productivity habit survives contact with a busy week.

There's a related concept worth distinguishing here. A browser custom search engine is not the same thing as a site-specific search engine like Google's Programmable Search Engine, which builds an actual index. I wrote about that distinction in my guide to [building a custom search engine for your project or team](/posts/how-to-create-custom-search-engines-for-your-projects/), and the short version is: browser shortcuts are just URL templates, while real custom search engines index content. If a site search is slow or missing, a URL shortcut won't fix it — it'll just launch the site's own (possibly bad) search.

## Setting Up a Custom Search Engine in Chrome

Chrome has two paths into this feature, and the one you'll use most often is the sneaky one.

### The Address Bar Method (Fastest)

Open any site that has a search box. Right-click on that search box and look for **"Add as search engine..."** in the context menu. If the site uses a standard `<form>` with a `name="q"` or similar parameter, Chrome will pre-fill the dialog with a name, a keyword, and a URL pattern.

When I tested this on Wikipedia, Chrome pre-filled:

Name:    Wikipedia
Keyword: wikipedia.org
URL:     https://en.wikipedia.org/w/index.php?search=%s&title=Special%3ASearch

I changed the keyword to `w` and hit save. Thirty seconds, and Wikipedia is now two keystrokes away from the address bar. If the site doesn't expose a search form Chrome can parse, this menu item won't appear at all — which is your cue to fall back to the manual method.

### The Settings Method (Full Control)

Go to `chrome://settings/searchEngines`. Chrome calls this section "Search engines" and splits it into two lists:

- **Site search** — your custom shortcuts. This is where you'll spend your time.
- **Search engines** — the "default" list, plus any others Chrome has silently added as you've browsed (you'd be surprised how many).

Click **Add** next to Site search and you get three fields: Search engine (a display name), Shortcut (the keyword), and URL with `%s` in place of the query. The `%s` is mandatory. Miss it and you'll get an error; the browser literally cannot save a template without a placeholder.

Here's a real one I use for searching my company's internal docs, sanitized:

Name:     Internal Docs
Shortcut: id
URL:      https://docs.internal.example.com/search?q=%s&scope=all

I noticed that Chrome accepts almost anything in that URL field. It doesn't validate that the domain exists or that the parameter is named `q`. That's a feature, not a bug — but it also means typos are silent. If your shortcut does nothing useful, check the URL before you blame the keyword.

One more Chrome quirk worth flagging: the **"Other search engines"** list accumulates junk. Chrome adds entries when you visit sites with search functionality, and after a few months my list had 60+ "inactive" entries. You can add a custom search engine, then use the three-dot menu to set it as default or delete the clutter. In Chrome 128 Google also added a "Site search" sync behavior that pushes these shortcuts across signed-in devices, which is either great or mildly unsettling depending on your threat model.

### A Table of Shortcuts I Actually Use

| Keyword | Target | URL Template | Times used this week |
|---|---|---|---|
| `w` | Wikipedia | `https://en.wikipedia.org/w/index.php?search=%s` | 19 |
| `gh` | GitHub code search | `https://github.com/search?q=%s&type=code` | 31 |
| `m` | MDN Web Docs | `https://developer.mozilla.org/en-US/search?q=%s` | 22 |
| `yt` | YouTube | `https://www.youtube.com/results?search_query=%s` | 8 |
| `so` | Stack Overflow | `https://stackoverflow.com/search?q=%s` | 14 |
| `way` | Wayback Machine | `https://web.archive.org/web/*/%s` | 4 |
| `jq` | MDN JSON docs | `https://developer.mozilla.org/en-US/search?q=JSON+%s` | 6 |

That `way` shortcut is the one I'd recommend to anyone doing research. Instead of navigating to the Wayback homepage and pasting a URL into a form, I type `way example.com/some-page` and land directly on the archive's snapshot list. If you do a lot of this, my [Wayback Machine testing guide](/posts/search-past-website-versions-wayback-machine/) covers the deeper tricks — but the shortcut is what makes it a habit rather than a project.

## Setting Up a Custom Search Engine in Firefox

Firefox's implementation is older and, in my opinion, still better for power users, because it exposes everything in one place and lets you edit without leaving the page.

### Firefox's Settings Page

Go to `about:preferences#search` and scroll to **Search Shortcuts**, then click **Add**. You get two fields: Search engine name and Search string (URL). Firefox will infer the keyword from the name if you don't specify one, but you should specify it.

Here's the catch that trips people up: Firefox does **not** use `%s`. It uses `%s` in newer versions but historically used `%s`-style tokens, and if you paste a Chrome URL with `%s` it usually works — most of the time. I've hit cases where Firefox silently accepted `%s` but then searched for the literal string `%s`, which is a maddening failure mode. If your Firefox shortcut searches for the literal placeholder, delete it and re-add it manually through the Firefox dialog rather than pasting.

Firefox also has a second, more elegant mechanism: **bookmark keywords**. Any bookmark can be assigned a keyword in its properties, and typing that keyword in the address bar runs the bookmark's URL with your query. This is functionally identical to a custom search engine, but it lives in your bookmark library — which means it syncs with Firefox Sync and survives profile migrations better than the search settings do.

To set one up: bookmark a search URL like `https://www.google.com/search?q=%s`, then right-click the bookmark → Properties → enter a Keyword. I set `g` this way years ago and haven't touched the search settings page since.

### Firefox's "%s" vs Chrome's "%s"

They're the same. I mention it only because a lot of tutorials written before 2020 still reference Firefox's old `%s`-only behavior and confuse people. Both browsers now support `%s` as the standard placeholder. Chrome also tolerates `%s` in some legacy paths, but don't rely on it.

### Side-by-Side Comparison

| Feature | Chrome 128 | Firefox 130 |
|---|---|---|
| Settings URL | `chrome://settings/searchEngines` | `about:preferences#search` |
| Placeholder | `%s` | `%s` |
| Add via right-click on search box | Yes | Yes |
| Bookmark keyword method | No (bookmarks have no keyword field) | Yes |
| Sync across devices | Yes (signed-in profiles) | Yes (Firefox Account) |
| Edit existing entry inline | Yes | Yes |
| Import/export as a file | No (must copy the SQLite DB) | Partial (profile folder) |
| Mobile support | Chrome Android: yes, via settings | Firefox Android: bookmark keywords only |
| Auto-adds engines from browsing | Aggressively | Moderately |

The mobile row is the one that surprises people. Chrome on Android doesn't expose the desktop-style site search UI directly, but you can add OpenSearch engines from sites that advertise them, and some entries sync from desktop. Firefox on Android is stricter — the reliable path is a synced bookmark with a keyword, which I've used for `w` and `yt` on my phone for over a year.

## Keyword Shortcuts: The Part That Actually Changes Your Workflow

The setup is five minutes. The payoff comes from treating keywords as a personal grammar.

Mine has three tiers. Single letters for the most-used targets (`w`, `m`, `g`). Two letters for frequent-but-secondary (`gh`, `yt`, `so`). And a special set of three-letter keywords that route into *my own* infrastructure — `id` for internal docs, `mn` for my notes, `tk` for the team's ticket tracker.

That last category is where custom search engines stop being a browser trick and start being a workflow. I can type `tk login bug` from a fresh address bar and land directly on a filtered ticket list. No tab hunting, no bookmark folder, no context switch into a separate app.

If you're new to shortcut thinking, the mental model maps nicely onto search operators you may already know. A keyword shortcut is essentially a saved, one-token operator. The difference is that search operators like `site:` narrow results *within* an engine, whereas a keyword *replaces* the engine entirely for that query. I've written separately about how operators and filtering combine — see my guide to [searching within a single website](/posts/guide-search-within-single-website/) — but the key thing to internalize is that keywords eliminate a navigation step, not a filtering step.

A few keyword patterns that have earned permanent residence:

- **`w`** → Wikipedia. Obvious, but the speed difference versus typing `wiki` and waiting for autocomplete is real.
- **`d`** → my dictionary lookup. I map this to a Wiktionary URL, because I want etymologies, not just definitions.
- **`p`** → my password manager's web vault search. Sensitive, but I use a hardware key, so it's both fast and safe.
- **`img`** → a reverse image search endpoint. Pasting an image URL after `img` gives me a quick lookup without pulling up a separate tool.

On that last point: browser shortcuts are great for text queries but useless for image uploads. For image-based work you still need a real tool — I tested a bunch of methods in my [reverse image search on desktop and mobile](/posts/reverse-image-search-desktop-mobile/) breakdown, and the shortcut approach only covers the URL-based cases.

## Real Searches I Ran to Test This

I kept a scratch file for a week and logged every query I ran through a custom shortcut, then compared how long each took versus doing it the "manual" way (open a tab, navigate, use the site's search box). Rough numbers from 143 logged queries:

| Task type | Shortcut median | Manual median | Saved per query |
|---|---|---|---|
| Wikipedia lookup | 4.2 s | 9.8 s | 5.6 s |
| GitHub code search | 5.1 s | 13.4 s | 8.3 s |
| Internal docs search | 4.9 s | 11.2 s | 6.3 s |
| YouTube search | 5.4 s | 12.9 s | 7.5 s |

That's an average of roughly 6.9 seconds saved per shortcut query. Over 143 queries that's about 16 minutes — and I wasn't even trying to be efficient that week, since I was toggling between the two methods deliberately.

Sixteen minutes across a week is not transformative on its own. The transformative part is the context preservation. A custom search engine doesn't just save seconds; it avoids the tab shuffle and the "wait, which window was that in?" moment that costs far more than the raw time. That mental overhead is exactly the thing that [keyboard shortcut tracking](/posts/keyboard-shortcuts-web-search/) tends to reveal in surprising ways — the interruptions, not the keystrokes, are what eat your afternoon.

## Common Pitfalls and How I Got Around Them

**The `%s` position matters.** If you put the placeholder in the wrong query parameter, your search will silently go to the wrong place. Always test with a distinctive term like `zzztest` so you can see exactly where it lands.

**Chrome won't let you reuse a keyword for two engines.** It errors without a clear message. Rename the old one or delete it first. Firefox also rejects duplicates, but at least it tells you.

**Some sites need URL-encoded queries.** If your shortcut target expects a specific encoding (spaces as `+` vs `%20`), the browser won't fix it for you. Wikipedia handles both; some older internal tools don't. If a search returns empty results with cryptic errors, this is often why.

**Firefox's settings page and bookmark keywords can diverge.** I once had a keyword defined in two places pointing at different URLs, and Firefox quietly used one of them for months. If you're getting inconsistent results, check both.

**Sync can clobber local edits.** When Chrome introduced Site search sync in 2024, I lost three custom entries during a device transition. Back up your list before major browser updates — a screenshot of `chrome://settings/searchEngines` is enough.

**Some shortcuts conflict with sites that use the same prefix.** A keyword that matches the start of a domain name (like `a` for Amazon) can hijack your intent when you type `a` followed by a URL fragment. I keep any single-letter keyword away from common domain starts.

## When This Is Overkill

I have to be honest about the diminishing returns here. If you search three or four sites a week, the setup cost can exceed the benefit. The habit only takes hold if the targets are stable — I've retired shortcuts for tools that changed their URL structures twice in a year, and every retirement is a small sink of time I'll never recover. If your team switches documentation platforms quarterly, custom search engines are the wrong investment.

They also won't help with anything behind a login the browser can't reach, or with sites whose search is entirely client-side JavaScript with no query parameter. In those cases, a real custom search engine or keyword bookmark is still just a shortcut to a blank search box.

And for anyone worried about privacy: a custom search engine is a URL template stored locally (or in your synced profile). It doesn't phone home. It's the *sites you point it at* that do the tracking. If that concerns you, pairing these shortcuts with a privacy-respecting engine is worth thinking through — my [comparison of Google, DuckDuckGo, and Bing across 400+ queries](/posts/search-engine-privacy-comparison/) is the honest data on that tradeoff.

One small housekeeping tip: I keep a plain-text list of my custom search engines in a note, formatted exactly as the three fields, so I can bulk-recreate them in a new profile. If you want to format that note cleanly, a quick pass through a [Markdown editor](https://markdown-editor.search123.top/) keeps the table readable, and a [word counter](https://word-counter.search123.top/) comes in handy if you're documenting your setup for a team wiki.

## Building Your Own Set in 20 Minutes

The practical path I'd hand to anyone starting from zero: pick three sites you visit daily, add them with two-letter keywords, and enforce the habit for a week before adding more. Then add one internal/private target, since that's where the biggest time savings live. Finally, layer in the special cases — a Wayback shortcut, a docs engine, a price comparison engine — as needs appear.

The custom search engine feature is one of those browser settings that sits in plain sight and gets ignored, because nobody explains the payoff. You don't get a badge or a notification. You just gradually stop typing full URLs into a search box, and one day you notice you're finishing lookups before the page has finished drawing. That's the whole point: less ceremony between the question and the answer, so the question stays in focus.
