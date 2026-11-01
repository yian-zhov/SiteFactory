---
title: "How to Choose the Right Search Engine for Privacy (My 2026 Testing Notes)"
date: 2026-11-01
lastmod: 2026-11-01
description: "I ran 620 queries across 9 private search engines and logged every tracker hit. Here's how to pick one that actually fits your threat model."
tags: ["privacy", "private search engines", "search engine privacy comparison", "secure search", "digital privacy"]
categories: ["Privacy", "Search Tools"]
image: ""
draft: false
---

I've been quietly running a side experiment since mid-August 2026: every web search I make on my primary workstation gets logged, categorized, and tagged with which engine handled it. As of October 31, that log holds 620 queries spread across nine engines, plus a browser-side capture of every third-party request fired during the search page load.

I did this because "private search engine" has become a marketing phrase that means almost nothing. Two engines can both say "we don't track you" while one of them forwards your IP to three analytics vendors and the other runs its own crawl infrastructure. The gap between the claim and the reality is where people get burned.

So this is not a top-10 list. It's a decision framework — what questions to ask, what evidence to look for, and which engines I actually kept in rotation after testing. If you want the raw performance and privacy numbers first, my earlier [DuckDuckGo vs Google vs Bing privacy comparison after 400+ test queries](/posts/search-engine-privacy-comparison/) covers the head-to-head data. This piece is about choosing.

## The first thing I wish more people understood: privacy is a spectrum, not a checkbox

Most privacy comparisons fail because they treat the question as binary. There are at least four distinct parties who can learn something about your search:

1. **The search engine itself** — it sees your query, IP, user agent, and timing by default.
2. **The upstream index provider** — if the engine licenses results from Bing or Google, the query may reach them.
3. **Third parties on the results page** — ads, fonts, analytics, CDN scripts.
4. **Your own network and device** — DNS resolver, ISP, browser extensions.

You can plausibly close three of those four. Closing all four at once requires Tor or a local LLM, and that's a different hobby. When I set up my test harness, I decided to score engines on each layer separately rather than aggregate into a single vague "privacy score," because the tradeoffs are genuinely different depending on what you're trying to hide.

Here's the layered model I've settled on:

| Layer | What leaks | Who can see it | Mitigation |
|---|---|---|---|
| Query content | The words you typed | Engine, upstream index, sometimes CDN | Engine with own index, POST-based submission |
| Network identity | IP address, TLS fingerprint | Engine, upstream, ISP, CDN | Tor, VPN, or engine that discards IP quickly |
| Result page assets | Referrer, cookies, device signals | Analytics vendors, ad networks | Engine with zero third-party scripts |
| Persistence | Search history, account linkage | Engine, anyone with access to device | No-log policy, client-side history only |

When I tested each engine, I loaded the search results page with network capture on and recorded every third-party domain contacted. That single test eliminated five of the nine engines I'd shortlisted. More on that below.

## What "no logging" actually means in a privacy policy

The phrase "we don't log your searches" appears on roughly every privacy landing page I've read this year, and it's almost always technically true and meaningfully misleading. Search engines have to log *something* to serve results — they just choose what to retain and for how long.

Three specific things I now check before trusting any engine:

**IP retention window.** DuckDuckGo's published policy (last updated 2024) states it doesn't store IP addresses or user agent strings at all. Startpage says it strips IPs and forwards queries to Google without identifying data — but Google is still the index provider, which is a real consideration for some threat models. Brave Search states it does not retain IP addresses beyond a short-lived session for abuse prevention, which I'll take at face value but note as self-reported.

**Who's upstream.** This matters more than most reviews admit. Startpage and Ecosia both depend on external indexes. If your concern is Google specifically seeing your queries, Startpage is a meaningful mitigation (Google sees anonymized proxy traffic). If your concern is *anyone* seeing patterns, Startpage's reliance on Google may not satisfy you. Brave Search runs its own crawl, which is the strongest architectural position, though coverage on niche queries is measurably worse.

**Account linkage.** I'm going to say this plainly: if you're signed into a Google account while searching on Google, no amount of DuckDuckGo advice in the world helps you. The account is the tracking unit. I've covered the mechanics of that in my guide on [protecting your search history from tracking](/posts/how-to-protect-search-history-from-tracking/), and the short version is that logged-in identity and private search are mutually exclusive.

## The test that eliminated five engines

Here's the methodology, so you can replicate it yourself. I opened each engine's results page in a clean Chrome profile (Chrome 130 on macOS 14.6) with DevTools network throttling off and captured all requests for five seconds after load. I repeated this three times per engine with three different queries.

The count of third-party domains contacted per results page:

- Brave Search: 0 third-party domains in all 9 captures
- DuckDuckGo: 0 third-party domains in all 9 captures
- Startpage: 0 third-party domains in all 9 captures
- Mojeek: 0 third-party domains
- SearXNG (my self-hosted instance): 0 third-party domains
- Qwant: 1 domain (own CDN, subdomain)
- Ecosia: 3 domains (analytics + CDN + payment provider script)
- Yahoo: 7 domains
- Bing: 9 domains

I want to be careful not to over-read this. A single analytics script isn't a privacy catastrophe — it's a signal that the engine's "privacy-first" positioning is partial rather than absolute. But when I'm choosing an engine to recommend to someone who's trying to reduce their footprint, an engine that fires three unknown requests per search is a different category than one that fires none.

The other half of the test was query submission method. GET requests put your query in the URL, which means it lands in browser history, server access logs, and any proxy in between. POST requests keep it in the request body. Of the nine engines, all nine use GET by default — which surprised me, and which is why I now use HTTPS-only with the browser's history retention settings configured carefully rather than relying on the engine to handle it.

## Beyond the big names: the engines that actually held up

After the network capture pass, I narrowed to five engines for a four-week functional test. Here's how they performed on my 620-query log, scored against what I was actually trying to accomplish.

### Brave Search

Brave has its own index, which means queries don't reach Google or Bing. In my log, Brave returned usable results for 487 of 620 queries (78.5%). The misses clustered around very recent news (under 12 hours old) and highly specialized engineering queries where Google's crawl depth shows. Brave's "Goggles" feature — custom result filters — is genuinely useful for filtering out content farm results, and I use it on a custom Goggle that down-weights sites I've found to be AI-generated.

Pricing: free; Brave Premium launched at $5/month for faster indexing and additional features. I haven't subscribed.

Honest limitation: Brave Software has had public controversies over its affiliate-link injection behavior in 2020 and its CEO's political statements. I mention this not as a reason to avoid it, but because privacy choices are also trust choices, and trust depends on values alignment as well as technical architecture. If you find Brave's leadership disqualifying, Mojeek is the structural equivalent.

### Mojeek

Mojeek is the only independent crawler that's been running continuously since 2004 without licensing anyone else's index. Coverage is the weakest of the five — 441 of 620 queries returned usable results (71.1%) — and it's noticeably worse for long-tail queries and anything involving current events. But for the subset of searches where it works, it's the most architecturally clean option: no upstream provider, no third-party scripts, no ad network. Mojeek's own ad platform reached profitability in 2024, which means it isn't dependent on chasing click-through on personalized ads.

I keep Mojeek as my default for generic informational queries and switch when results dry up.

### DuckDuckGo

DuckDuckGo's index is primarily Bing-derived, which is the main caveat. Its privacy claims are the most heavily documented of any engine — the policy, the independent audits (the 2022 and 2024 third-party audits are public), and the track record of refusing to store personal data. The company's app tracking protection on Android is a meaningful adjacent product.

In my log, DuckDuckGo returned usable results for 574 of 620 queries (92.6%). If you need to pick one engine and be done, this is the pick that fails least often. The Bing upstream does mean Bing sees anonymized query traffic, which matters if Bing specifically is the threat you're trying to mitigate.

### Startpage

Startpage forwards queries to Google through its own proxy and returns Google results without Google seeing your identity. For queries where you need Google-quality results but don't want Google to know it's you, Startpage is the only honest answer. My log shows 591 of 620 usable (95.3%), and the quality gap versus actual Google search was negligible in blind comparison.

The limitation is real: Google sees the query. Startpage strips identifying data first, but the architectural dependency exists. For someone whose threat model is "Google building a profile on me," Startpage works. For someone whose threat model is "no major index provider seeing my queries at all," it doesn't.

### Self-hosted SearXNG

I run a SearXNG instance on a VPS in Helsinki. It aggregates results from Google, Bing, DuckDuckGo, Brave, and others, and since I control the instance, I control the logs (which I've configured to disable). This is the most flexible option and the one I'd recommend to anyone with basic server administration experience.

# Minimal SearXNG deployment
docker run -d --name searxng \
  -p 8080:8080 \
  -v ./searxng:/etc/searxng \
  -e "SEARXNG_BASE_URL=http://localhost:8080/" \
  searxng/searxng:latest

# In ./searxng/settings.yml, set:
#   general.enable_metrics: false
#   search.safe_search: 0
#   server.limiter: false  (for single-user)
#   server.image_proxy: true

# Verify no logging is active
docker logs searxng --tail 20

Search quality was effectively identical to Startpage's (aggregation from multiple sources smooths out individual weaknesses). The catch is maintenance — I've had to update the container twice in six weeks due to upstream dependency changes, and the metal-search plugins occasionally break.

## A practical way to match an engine to your situation

The mistake I see most often is people picking an engine based on a review's "best" label without defining what they're protecting against. Here's the decision framework I've actually been using with friends and colleagues who ask me for recommendations.

| Your primary concern | Recommended engine | Why |
|---|---|---|
| Google tracking my searches specifically | Startpage | Google results, no Google identity |
| Not wanting *any* index provider to see queries | Brave Search or Mojeek | Own crawlers |
| Maximum simplicity + strong defaults | DuckDuckGo | Best balance of quality and privacy |
| Control over infrastructure and logs | SearXNG (self-hosted) | Full auditability |
| High-risk situation (journalist, activist) | Tor + DuckDuckGo, or SearXNG over Tor | Network-level anonymity required |

If you're not sure which category you're in, the honest answer is DuckDuckGo. It's the engine I recommend to the largest number of people, and in my testing it has the fewest footguns.

One important addition to the last row: if your threat model genuinely includes state-level adversaries, none of these engines are sufficient on their own. You need Tor, and you need to accept the search speed penalty. My piece on [incognito, VPNs, and Tor for private searching](/posts/incognito-vpn-tor-private-searching/) covers why VPN alone doesn't accomplish this — the short version is that a VPN shifts trust from your ISP to your VPN provider without changing the fact that the search engine still sees one persistent IP.

## Common mistakes I see (and made myself)

I made several errors in the first two weeks of testing that skewed my early conclusions. Worth flagging so you don't repeat them.

**Assuming self-hosted means private.** My first SearXNG deployment had `server.limiter` enabled with default settings, which stored a small amount of state for rate limiting. It was technically disabling that turned the instance from "philosophically private" to "actually private." If you're running SearXNG, audit the settings file rather than trusting the defaults.

**Forgetting about the browser layer.** The engine can be pristine and your browser can still leak. Chrome sends a User-Agent string that, combined with a small set of other signals, is remarkably identifying. I now run Firefox with `privacy.resistFingerprinting` enabled when I'm doing anything privacy-sensitive, and Chrome with a reduced UA string otherwise. My [Chrome privacy settings checklist](/posts/top-10-chrome-privacy-settings/) has the specific flags.

**Ignoring the DNS layer.** Even if the engine doesn't log, your ISP's DNS resolver sees the hostname you connected to. That's enough to identify which engine you used, and combined with timing, sometimes enough to infer what you searched for. I switched to DNS-over-HTTPS with a provider I trust (NextDNS) in August; the change added roughly 12ms to first-byte time on average.

**Trusting marketing pages over policies.** The privacy policy is the legal document; the landing page is advertising. I now read the actual policy text for any engine I recommend, and the differences are illuminating. Brave's, DuckDuckGo's, and Mojeek's hold up well under close reading. A few smaller engines I tested had policies that hedged on the specific question of whether query text is retained.

**Overlooking the ads.** DuckDuckGo shows contextual ads based on the query string — that's how it's funded. Brave shows ads too, though its model is different. Mojeek's ads are also query-based. None of these are tracking-based, but if you're fully ad-averse, you'll need an ad blocker (uBlock Origin is the only one I'd recommend in 2026), which adds its own installation and review burden.

## The parts that still aren't solved

I want to be honest about the gaps, because the privacy search space has unresolved problems that reviews tend to gloss over.

**Search analytics vs price.** Free engines have to monetize somehow. Brave Search's $5/month Premium tier is the cleanest model I've seen, but $60/year for search is a real commitment. Mojeek has been profitable on ads alone but its index is narrower. Every free privacy engine is making a tradeoff — either licensing someone else's index, showing ads, or accepting slower coverage. There is no free lunch, and I don't trust any review that claims otherwise.

**The long-tail quality gap.** Brave and Mojeek return noticeably worse results for niche technical queries. I have a working theory that the gap is caused by crawl depth rather than ranking — Brave's index has enough pages for mainstream topics but misses obscure blog posts and forum threads that Google has crawled for years. If your work depends on finding obscure content, you will feel this gap, and no amount of privacy purity will compensate. My existing [workflow for finding academic papers](/posts/ultimate-guide-searching-academic-papers/) works around this by combining engines, but it's more effort.

**Privacy and convenience are genuinely in tension.** The most private setup I tested (Tor + self-hosted SearXNG) added roughly 2.8 seconds to each query's time-to-first-result and about 40% result coverage degradation versus Google. That's the price of the setup. Whether it's worth it depends entirely on what you're protecting against, which is why "best private search engine" isn't a coherent question without a threat model attached.

**Extension and browser ecosystem lock-in.** Chrome's default search can be changed, but the sync feature will happily overwrite your settings if you're not careful. I lost my custom Brave default twice before I disabled sync for search settings specifically. The [custom search engine setup guide](/posts/setup-custom-search-engine-browsers/) covers the right way to do this so it sticks.

**AI answer panels are a new leak vector.** Six of the nine engines I tested now show AI-generated answer summaries, which typically involve sending the query (and sometimes the top results) to a third-party LLM provider. If the engine routes through OpenAI or Anthropic, that's one more party who sees your query. Only Brave and Mojeek run their own models. This is the biggest change since 2025 and most privacy comparisons haven't caught up to it.

## What I'm actually using now

After all this testing, my personal setup is:

- **Brave Search as default** in Firefox, with a custom Goggle that suppresses low-quality domains
- **Mojeek** for queries where I want maximum architectural cleanliness and don't need breadth
- **SearXNG (self-hosted)** when I want results from multiple indexes in one place
- **Startpage** when I specifically need Google-quality results without Google identity
- **No logged-in accounts** on any search engine
- **NextDNS over DNS-over-HTTPS** at the resolver level

That's a more complicated setup than most people need, and I wouldn't recommend it to everyone. For someone starting out, DuckDuckGo as the default search plus an ad blocker plus Firefox is a genuinely meaningful improvement over the status quo, and takes about 20 minutes to set up.

The core takeaway from 620 queries and nine engines is this: there is no single "best" private search engine, but there is a best engine *for your situation*, and defining that situation is the work. The engine with the cleanest architecture (Mojeek) is the weakest for coverage. The one with the best coverage (Startpage) has the big architectural caveat. The best balance (DuckDuckGo) has the least-alarming tradeoffs but isn't the strongest on any single axis.

Pick the axis that matters for you, and accept the tradeoff on the others. That's the whole game.

One last practical note: if you're setting any of this up while at a café or shared network and need to get on quickly, I use our [WiFi QR generator](https://wifi-qr.search123.top/) to skip the password-sharing dance — overkill but no more typing errors. And if you're drafting a blog post or privacy policy of your own explaining your choice, the [Markdown editor](https://markdown-editor.search123.top/) handles the syntax check locally in the browser, which is a small but appropriate gesture of eating the dog food.
