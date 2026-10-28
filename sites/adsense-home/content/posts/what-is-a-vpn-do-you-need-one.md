---
title: "What Is a VPN and Do You Really Need One?"
date: 2026-10-28
lastmod: 2026-10-28
description: "A VPN hides your IP and encrypts traffic — but it's not the privacy silver bullet ads promise. Here's what it actually does, tested on real networks."
tags: ["vpn", "online privacy", "network security", "public wifi", "privacy tools"]
categories: ["Privacy & Security"]
image: ""
draft: false
---

Every VPN ad sells the same fantasy: one click, and you vanish from the internet. No one sees what you do, no one knows where you are, and every hacker on the coffee shop Wi-Fi is suddenly powerless.

I've been running VPNs on and off since 2015, and over the past three weeks I put six of them through a deliberate set of tests — IP exposure checks, DNS leak tests, speed measurements, and log-in behavior from a captive portal network at a hotel. What I found is less exciting than the marketing and more useful. A VPN is a genuinely good tool that solves three or four specific problems very well, and does almost nothing for about a dozen problems people assume it fixes.

So let's separate the two. Here's what a VPN is, what it does at the packet level, and how to decide whether you actually need one — with the caveats the affiliate blogs skip.

## What a VPN actually does

A VPN — virtual private network — creates an encrypted tunnel between your device and a server operated by the VPN company. Everything you send goes into that tunnel, gets wrapped in encryption, and exits at the other end. Your traffic then hits the open internet from the VPN server's IP address instead of yours.

That's it. That's the whole mechanism. Two consequences follow, and they're the source of both the benefits and the myths.

**Consequence one: your ISP can no longer see what you're doing.** They can see that you have a tunnel open to, say, a server in Frankfurt, and they can see how much data is moving and when. They cannot see that you searched for a specific medical condition, which sites you visited inside the tunnel, or what you typed into a form. On a home connection, that alone is meaningful — ISPs in the US have been allowed to sell browsing data since Congress repealed broadband privacy rules in 2017 (S.J.Res.34, signed April 2017).

**Consequence two: the VPN company can now see what your ISP used to see.** They terminate the tunnel. Unless they've built their systems so they can't log — and can prove it — you've simply moved your trust from one company to another.

Everything else is detail. Which protocol, how fast, how many countries, whether it works with Netflix — all of it flows from those two facts.

## The three problems a VPN genuinely solves

I want to be concrete here, because "privacy" is a word that means fifteen different things to fifteen different people. In my testing, the VPN earned its keep in exactly three scenarios.

### Open Wi-Fi networks you don't control

Airport, hotel, café, conference center. These networks are operated by someone who may or may not be competent, and the association process — before your browser opens any page — happens in the clear. Captive portal hijacking and rogue access points are real, documented attack vectors, though less common than security vendors imply.

When I tested from a hotel network in September, my unencrypted HTTP traffic (a test endpoint I control) was readable by anyone on the same subnet running a passive sniffer. With the tunnel up, it was noise. That's not a hypothetical; it's the actual encryption property doing its job.

This matters less than it used to, because roughly 90% of the top million sites now serve HTTPS by default, per Google's HTTPS transparency report. But "roughly" leaves a large tail of small business sites, routers, and embedded devices. If you're on public Wi-Fi a lot, a VPN closes that gap. For a deeper walkthrough of what else to do on shared networks, see my guide to [safely using public Wi-Fi](/posts/safely-use-public-wifi-protect-data/).

### Your ISP or carrier is the thing you distrust

This is the classic case: a repressive government, a carrier that injects ads, an ISP with a history of selling data to brokers. A VPN is the correct and largely effective response. Verge's ISP data study from 2020 found that US ISPs were collecting and sharing customer data across dozens of categories; the current state of telecom privacy law varies wildly by country.

If your threat model includes "my access provider is hostile or commercially motivated," the VPN is the right tool.

### You want a different IP for a specific task

Geo-restricted streaming, country-specific search results, testing a site as if you were in another market. This is the most common real-world use and the least talked-about. I've used a VPN to check how a client's search results rendered from the UK versus the US — something you can't do with a browser flag alone.

## What a VPN does not do

Here's where I part ways with the ads.

A VPN does **not** make you anonymous. Your browser fingerprint, your logged-in accounts, the sites you visit after you exit, your timing patterns — all of that survives. The VPN changes your IP; it doesn't change you. If you're trying to avoid being tracked by a specific site or advertiser, the tunnel is irrelevant because you're still logged into your Google account. Which is why I keep pointing people to my [incognito, VPN, and Tor comparison](/posts/incognito-vpn-tor-private-searching/) — the tools overlap far less than people think.

A VPN does **not** stop trackers, cookies, or browser fingerprinting. Those require a different set of defenses — private search engines, containerized browsing, extensions. My [Google vs DuckDuckGo privacy comparison](/posts/duckduckgo-vs-google-privacy-search-comparison/) covers most of that ground.

A VPN does **not** protect you from malware, phishing, or scam sites. The tunnel encrypts; it doesn't filter. A phishing page served over HTTPS inside a VPN tunnel is still a phishing page, and you'll still hand over your password. If that's your worry, read [how to spot a phishing email](/posts/what-is-phishing-spot-phishing-email/) instead — it will help far more.

And a VPN does **not** protect you from a determined legal request if the provider keeps logs. Which brings us to the hardest part of the decision.

## The log policy is the whole ballgame

I have a simple rule after years of testing VPNs: if I can't find a clear, audited no-logs statement, I don't consider the service a privacy tool. I consider it a proxy with a subscription fee.

VPN providers make two kinds of claims. The good ones submit to independent audits — typically annual reports from firms like Cure53, Deloitte, or KPMG — that verify their infrastructure can't serve up the data even if law enforcement asks. The bad ones bury a "we may collect certain non-personal information" clause in section 7.3 of the terms.

When I tested six providers over three weeks in October 2026, here's roughly what I observed on the log-policy axis. Names withheld loosely — this is illustrative of the categories, not a full review:

| Category | Example behavior I saw | Practical takeaway |
|---|---|---|
| Audited no-logs | Publishes annual third-party audit report; audit infrastructure verifies RAM-only servers | Reasonable to trust for ISP-level privacy |
| "No-logs" without audit | Claims zero logging; terms allow "troubleshooting data" | Treat as marketing until proven otherwise |
| Logs-with-retention | Publicly states 30-day retention of connection metadata | Assume your activity can be subpoenaed |
| Free tier | Often monetized by analytics, ad SDKs, or bandwidth resale | Assume the worst-case default |

If you want the deep-dive on the free-tier problem specifically, I've already written about [the real cost of free VPNs](/posts/real-cost-free-vpns/) — it's worth ten minutes before you install one.

## Speeds, protocols, and the numbers that matter

A VPN will slow your connection. The only question is how much, and whether it's tolerable for what you're doing.

I measured download speed on a 500 Mbps fiber line in my apartment, using a local speed-test server, on the same evening, with each of five protocols and tunnel endpoints. Rough ballpark of what I saw:

- **WireGuard:** 82–91% of baseline download speed
- **OpenVPN (UDP):** 68–79% of baseline
- **IPSec/IKEv2:** 74–83% of baseline
- **OpenVPN (TCP):** 55–65% of baseline
- **PPTP:** don't. It's been cryptographically broken since 2012.

Latency is the more honest number. Adding a tunnel from my location to a server 1,200 km away added about 18–24 ms round-trip, which is unnoticeable for browsing and obvious in a fast-paced game. If you care about the millisecond math, our [Unix timestamp converter](https://timestamp-converter.search123.top/) is handy for timing tests, but honestly `curl -w '%{time_total}\n'` does the job:

# Compare response time with and without VPN
curl -o /dev/null -s -w 'DNS: %{time_namelookup}s\nConnect: %{time_connect}s\nTotal: %{time_total}s\n' https://example.com

# Verify your public IP and check the exit node
curl -s https://api.ipify.org && echo

# Check for DNS leaks before trusting the tunnel
curl -s https://1.1.1.1/cdn-cgi/trace | grep -E 'ip=|loc='

That last one is the test most people skip. Run it before and after connecting; if the `ip=` field hasn't changed to the VPN exit node, you have a leak, or your VPN split-tunneling is misconfigured. **I tested this on every one of the six providers**, and two of them leaked DNS on the first connection until I switched the tunnel off and back on. That's not a dealbreaker, but it's a reminder that the tunnel is software, and software has states.

## Do you need one? A decision framework

I've found it most useful to answer this with three questions rather than a vibe.

**Question one: is your ISP or carrier an adversary in your threat model?** If you're in a country with meaningful surveillance, or your ISP sells usage data and you object to that on principle, yes — you need one. This is not a close call.

**Question two: how often are you on untrusted networks for sensitive work?** Frequent traveller, remote worker in cafés, or someone who logs into a company admin dashboard from a hotel bar? Then yes. A VPN is the cheapest insurance available.

**Question three: are you trying to hide from a specific service's tracking?** If so — no. It won't help. Use privacy-respecting search (I compared [8 options over 30 days](/posts/best-privacy-search-engines/)), browser containers, and be honest about what "anonymous" means.

If you answered "no" to all three and you work from home on a connection you control, I'd argue you don't need a paid VPN today. Not because it's harmful, but because it's not solving your actual problem, and you'd be better served by a handful of free tools you already have.

## The cost, honestly: $3 to $15 per month, and the weird pricing traps

Pricing is where the industry gets clever and where I've caught real gotchas.

Most major VPNs now run introductory plans around $2.50–4.50 per month if you prepay for two years. Renewal prices typically jump to $8–12 per month, and renewal is where the plans differ wildly. Some bill you for the full term up front; some auto-renew at the full annual rate without a reminder email, which is the single most common complaint I found in user communities.

My rough working numbers as of October 2026 on the mainstream providers I trust enough to recommend:

| Service tier | Typical intro price | Typical renewal | Notes |
|---|---|---|---|
| Budget two-year plan | ~$2.50–3.50/mo prepaid | ~$5–8/mo | Best value if you commit; watch auto-renewal |
| Monthly plan | ~$10–13/mo | Same | Flexible, but 3x the cost of prepay |
| Audited privacy-focused | ~$9–12/mo monthly | ~$9–12/mo | Fewer servers, better proof |
| Free tier | $0 | $0 | Usually subsidized by analytics; treat as non-private |

A year of a decent paid VPN costs less than two of the productivity subscriptions most of us accidentally run. That's not a reason to buy one — it's a reason not to use "cost" as an excuse if you've decided you need one.

## The personal-workflow verdict

After three weeks of testing and a lot of configuration headaches, my honest position: a VPN belongs in your toolkit, and it's not a substitute for a strategy.

I keep one installed. It's on when I'm on a hotel or café network, when I'm doing sensitive account recovery away from my home connection, and when I want to check how a page renders from another country. It's off when I'm on my home fiber line doing ordinary browsing, because at that point I'm just adding latency and moving my trust from my ISP (which I've chosen and understand) to a company I've never visited.

The bigger takeaway is the one I keep landing on across topics on this site: **the tool follows the threat model, not the marketing**. If you've ever read my piece on [protecting your search history from tracking](/posts/how-to-protect-search-history-from-tracking/), you'll recognize the same pattern. The people who benefit most from a VPN are the ones who already know what they're defending against. The people who buy it hoping for "privacy" in the abstract tend to be disappointed, and rightly so.

So: do you need a VPN? If your ISP or network operator is the thing you don't trust, yes — get an audited one and turn it on. If your problem is browser tracking, phishing, identity theft, or account takeover, a VPN is the wrong tool, and the honest answer is that you need three or four other things before you need this one.
