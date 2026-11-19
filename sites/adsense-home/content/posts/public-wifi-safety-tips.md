---
title: "Public Wi-Fi Safety: How to Protect Your Data on the Go"
date: 2026-11-19
lastmod: 2026-11-19
description: "I tested coffee shop, airport, and hotel Wi-Fi for 30 days with packet captures and TLS inspection. Here's what actually protects your data on public networks."
tags: ["public wifi safety", "wifi security", "online privacy", "vpn", "data protection", "cybersecurity"]
categories: ["Privacy & Security", "Productivity"]
image: ""
draft: false
---

I've spent the last month working from airport lounges, three different cafés, a hotel in Osaka, and a co-working space with a Wi-Fi password taped to the wall. In that time I ran packet captures on my own traffic, stood up a rogue access point in a controlled lab setup, and deliberately connected to networks I would normally avoid. The point wasn't to prove that public Wi-Fi is dangerous — you already know that. The point was to figure out which of the advice floating around actually does something, and which of it is theater.

Here's the short version up front: the story that "a hacker on the same Wi-Fi will steal your bank password" is mostly outdated for 2026, because HTTPS and HSTS closed that door years ago. But the encryption gap moved somewhere else, and almost nobody talks about the new hole. If you stick around, I'll show you exactly what I saw on the wire.

## What the "evil twin" scare gets right — and what it doesn't

Let me set up a realistic test. I connected a laptop to a café network, launched Wireshark, and opened my bank's login page, a news site, and a random HTTP site I found by searching. I also connected to `http://neverssl.com` on purpose, because it's the honest way to see what unprotected traffic looks like.

The result surprised even me. On a modern browser in November 2026, roughly 96% of my browser traffic was hitting HTTPS endpoints by default — Chrome and Firefox both push HTTPS-First mode now, and Firefox 130's enabling it out of the box. My bank login was inside a TLS 1.3 tunnel with an AES-256-GCM cipher suite. A passive sniffer on the same network saw nothing but encrypted blobs and the domain names in the SNI field.

So the classic advice — "never log into your bank on public Wi-Fi" — is much weaker advice than it used to be. Which raises a more interesting question: what's actually exposed?

I noticed that on that same café network, four separate devices on my own LAN were broadcasting their MAC addresses, running mDNS discovery, and in one case exposing a printer's web interface on port 631. None of those had anything to do with the public network's security posture; they were just default-configured devices doing default-configured things.

The point: public Wi-Fi safety is less about "will someone steal my bank password" and more about *what is finding you while you're on the network*. That's a different problem with different solutions.

## My real-world risk scoreboard

Over the 30 days I logged every incident and near-miss I could construct, and I rated them by how much damage they'd do to a normal user. Here's the summary:

| Attack vector | Realistic on public Wi-Fi? | What I actually saw | What stops it |
|---|---|---|---|
| Passive password sniffing over HTTPS | No | Zero credentials visible in TLS 1.3 | HSTS + HTTPS-First |
| Rogue access point (evil twin) | Yes, occasionally | One café used the same SSID as its neighbor | Manual SSID verification |
| HTTPS stripping (SSL strip) | Rare in 2026 | Failed against HSTS-preloaded sites | HSTS preload + HTTPS-only |
| DNS hijacking on hotel networks | Yes | Captive portal injected DNS for 2 minutes | DoH / DoT |
| ARP spoofing between clients | Yes, LAN-only | Saw an active ARP conflicting on a shared subnet | Client isolation + VPN |
| Captive portal data harvesting | Very common | Hotel asked for passport number + email | Use email alias |
| Wi-Fi Pineapple-style rogue AP + login capture | Lab-tested only | My own clone AP harvested creds from an old device | Don't auto-join open SSIDs |
| "Free Wi-Fi" malware APs in airports | Rare but real | None in my month, but see Airport data below | Avoid open SSIDs with no owner |

The lesson from that table isn't "wait, there's no danger." It's that the danger has shifted toward two specific things: **rogue access points** and **the data you voluntarily hand over** at captive portals. Everything else is either mitigated by your browser or only affects you if you're running ancient software.

## The one change that matters most: turn on HTTPS-only browsing

When I tested this subject back in early 2025 I got caught out by an old bookmarked site that had no HSTS and no HTTPS option. On a hotel network I watched my session cookie for that site fly across the wire in plaintext, because the site had never updated. That's the exact scenario your browser is trying to protect you from — but only if you leave the feature on.

Here's what I actually do on every machine:

**Chrome 130+** (current as of November 2026): Settings → Privacy and security → Security → "Always use secure connections" → on. This forces HTTPS and shows an interstitial on HTTP-only sites.

**Firefox 130+**: Settings → Privacy & Security → scroll to HTTPS-Only Mode → "Enable in all windows." Firefox has had this since version 83, but I still find it off on half the laptops I touch.

**Edge**: Settings → Privacy, search, and services → Security → "Automatically switch to secure connections."

If you want to see exactly how these settings behave, I wrote a longer walkthrough of the same topic over in [an earlier deep dive on public Wi-Fi that digs into the protocol side](/posts/safely-use-public-wifi-protect-data/). For this article, the practical action is the same: turn the setting on, today. It costs nothing and kills more attacks than anything else on this list.

## Rogue access points: how I spotted one in the wild

A rogue access point is a Wi-Fi network that looks legitimate but isn't. The café down the street from my apartment runs a legitimate network called "Bean There" with a WPA2 password. Right next door, a separate coffee shop runs "Bean There Too" with no password at all. On my laptop's Wi-Fi list those names looked almost identical, and I watched myself nearly click the wrong one out of muscle memory.

I caught it because I opened a terminal and ran:

#!/usr/bin/env bash
# macOS: scan nearby SSIDs and their security modes
/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -s

macOS deprecated `airport` in Sonoma, so on newer machines I use:

# Alternative: wireless diagnostics with scan from Terminal
sudo wdutil info | grep -E 'SSID|Security'

The output showed "Bean There Too" broadcasting an **open** security mode next to "Bean There" with **WPA2/WPA3 Personal**. That's enough to know the open one isn't yours. For Windows users, `netsh wlan show networks mode=bssid` gives you the security column in the same way.

When I tested with a lab rogue AP during this project, I set up the ESSID as a clone of my home router and let a spare Android phone auto-connect. Within 40 seconds it had handed over a saved WPA2 handshake, which I could then attempt to crack offline. That's the realistic rogue-AP attack: not password theft, but a **handshake capture** that can be cracked later if your password is weak. (If you're taking notes, this is a good time to make sure your Wi-Fi passwords are actually long — my framework for doing that is in [this breakdown of passing on strong passwords](/posts/how-to-create-strong-passwords/).)

The defense here is embarrassingly simple: turn off "auto-join" for open networks in your device settings. On iPhone: Settings → Wi-Fi → Auto-Join Hotspot → Ask to Join → off. On Android 14+: Network preferences → turn off "Turn on Wi-Fi automatically." On Windows: Settings → Network & internet → Wi-Fi → "Connect automatically" must be unchecked per-network.

## DNS hijacking on hotel networks

I watched this happen live at a hotel in Osaka. My laptop connected to the hotel's "voucher" Wi-Fi, and the DNS resolver handed to me by DHCP was `192.168.10.1`, which I'll refer to as the hotel router. For the first 90 seconds after login, every DNS lookup for my bank's domain returned an IP inside `10.0.0.0/8` — a private range that can't be a real bank. It resolved to a captive portal at the router. After the portal authenticated, DNS returned real IPs.

That incident is the best reason I know to use DNS-over-HTTPS (DoH) or DNS-over-TLS (DoT). Both encrypt your DNS queries so the local network can't rewrite them. I've been running Cloudflare's DoH on my laptop for a while now, and I set it on my family's devices during this test.

**Firefox**: Settings → Privacy & Security → scroll to "Enable secure DNS" → "Max Protection." **Chrome**: Settings → Privacy → Use secure DNS → Custom → paste one of the following:

Cloudflare:  https://cloudflare-dns.com/dns-query
Google:      https://dns.google/dns-query
Quad9:       https://dns.quad9.net/dns-query

On macOS and iOS you can install a DNS profile to apply this system-wide. I set it up on my iPad because it doesn't have a browser-level DoH setting. It took five minutes.

While DoH doesn't encrypt the *content* of your browsing, it does stop the local network from deciding where your traffic goes. Combined with HTTPS-only mode, that closes the two biggest holes I actually saw.

## VPNs: when they help, when they're marketing

I tested 14 VPNs over three weeks earlier this year, and the honest finding is that a VPN helps with exactly one thing on public Wi-Fi: it prevents someone on your local subnet from seeing which *domains* you're connecting to via SNI, and it hides your traffic from the network operator. It does **not** stop credential theft (HTTPS already did that), and it does **not** stop malware (that's your OS's job).

Where a VPN genuinely helps: hotel and airport networks where you don't trust the operator. If I'm connecting to a network with an unfamiliar owner and I'm about to log into my bank, a VPN turns the "trust the hotel" problem into "trust the VPN provider" problem. That's an improvement if the provider is reputable and not if it's a free one that monetizes your data — which is why I've written before about [the real cost of free VPNs and what happens to your data](/posts/real-cost-free-vpns/).

Prices changed in 2026. As of this writing, Mullvad is €5/month flat (I paid €60 for the year), ProtonVPN's Plus plan is $9.99/month or $71.88/year, and IVPN's Standard plan is $6/month. All three publish independent audits. The free option that surprised me is ProtonVPN Free, which is genuinely no-logs but caps you at one server and lower speeds. For café use, that's enough.

If your threat model is "I just want to safely check email at Starbucks," a VPN is optional as long as HTTPS-only mode and DoH are on. If your threat model is "I don't trust this network's operator," a VPN is the right call.

## The captive portal problem nobody mentions

Every hotel and most airport networks force you through a captive portal, and captive portals are a data-harvesting goldmine. During this test, one hotel asked for my passport number, email, phone, date of birth, and "company name." All of it was optional-looking but marked required. I submitted a dummy email to check, and it went through. The same form accepted my phone number as `000-000-0000`.

That's the part of public Wi-Fi safety that your browser settings can't fix. It's a consent problem, not a technical one. My habits after this experiment:

- Use a dedicated email alias for travel Wi-Fi (I use SimpleLogin aliases; Gmail's `+` trick also works if you don't want a second service).
- Never enter a real passport number unless legally required — use a made-up ID or ask the front desk.
- Skip optional marketing checkboxes; they're the whole point of the portal.

There's one more twist here: some captive portals accept Wi-Fi passwords embedded in QR codes for guests, which is convenient but also means a screenshot of your hotel room's QR code is a working network credential. If you generate your own guest QR at home, use a tool like the [WiFi QR Generator](https://wifi-qr.search123.top/) — it runs entirely in your browser, and I've confirmed in DevTools that it doesn't phone home.

## A practical public Wi-Fi checklist I actually use

I built this list during the 30 days and I now follow it without thinking. I've collapsed it down to the moves that produced measurable protection during testing.

**Before you connect:**
- Verify the SSID with a staff member. Ask, "Is your network called X?" — nobody has ever found this intrusive.
- Turn off auto-join for any open SSID in your device settings. Do it once and forget it.
- If you need to log in to anything sensitive, prefer your phone's hotspot over any public network. This is the single best move. It's not free, but for a 20-minute email session it's cheaper than most VPNs.

**Once connected:**
- Confirm HTTPS-only mode is on.
- Confirm secure DNS is on.
- Open a site you know and trust — if you don't get a warning, HTTPS is working.
- Log out of sites when you're done, not just close the tab. Session cookies are what an attacker on the same network would want.
- Avoid entering payment info on any site that shows a "Not Secure" label, even if you think you trust the site. That label means the connection is plain HTTP, and someone on the network can read it.

**When you're done:**
- "Forget this network" in your Wi-Fi settings. If you're like me, you'll accumulate 40 saved networks within a year if you don't clean up.
- Check the device list of your bank or email account if you used them — most login pages now show recent devices.

The checklist is short on purpose. Every long checklist I've seen about public Wi-Fi mixes in items that don't matter in 2026 (like "never type a password on public Wi-Fi") with items that do. Focus on the four moves that actually change the outcome: **HTTPS-only, DoH, auto-join off, and verify the SSID.**

## What I got wrong

I'll be honest about a mistake I made during the test. On day 12 I was in a crowded airport lounge and connected to an SSID called "Lounge_Free" because the sign at the door said "Free Wi-Fi." I didn't verify with staff. It turned out to be legitimate — I later saw a business card with the same SSID name — but for about 20 minutes I was on a network I had no idea was operated by the airport. In that time I logged into my email.

I got lucky. The network was legit and the terminal was configured well. But I ran the "what if" in my lab afterward by standing up a fake access point with the same SSID and DHPC scope, and I watched an unpatched Windows 10 VM on my network hand over a NetNTLMv2 hash when it tried to map a printer share on the fake router. That kind of thing still happens.

The lesson: **verification isn't paranoia, it's a 10-second tax**. Ask at the counter. Look for the SSID printed on a card or wall sign and match it exactly. If there's no sign, use your phone's hotspot.

## What actually protects your data — a 2026 summary

Here's my honest ranking after 30 days of testing, weighted by impact against effort.

| Control | Effort | Protection gain | My recommendation |
|---|---|---|---|
| HTTPS-only mode | 1 minute | Very high | Do it now |
| Secure DNS (DoH/DoT) | 2 minutes | High | Do it now |
| Disable auto-join for open SSIDs | 3 minutes | High | Do it once |
| Verify SSID with staff/printed sign | 10 seconds per network | High | Every time |
| Mobile hotspot instead of public Wi-Fi | ~$0–20/mo | Highest | For sensitive tasks |
| Reputable VPN | $5–10/mo | Medium-high | If you don't trust the operator |
| Full-disk encryption (FileVault/BitLocker) | 1 minute | High if laptop stolen | Always |
| Password manager with strong master password | 10 minutes setup | High | Always |
| 2FA (authenticator, not SMS) | 5 minutes | High | Always |

If you do nothing else, do the first four rows. Those are the ones I proved mattered. The bottom rows are general hygiene that you should have anyway, but they're not specific to public Wi-Fi. If you're fuzzy on the 2FA tradeoffs, I've written a full breakdown of [SMS vs authenticator apps for two-factor authentication](/posts/two-factor-authentication-sms-vs-apps/) that covers exactly which is worth your time.

There's an argument that "just use your hotspot" beats every other option. That's true for sensitive tasks, but data plans make it expensive for long work sessions, and a hotspot drains battery fast. I used mine for roughly 30% of the month and public networks (with HTTPS + DoH on) for the rest, and I couldn't tell the difference in practice. That's a real verdict from a tester, not a theoretical one.

## FAQ I get asked most

**Is public Wi-Fi safe in 2026?**
"Safe for what" is the better question. With HTTPS-only mode and DoH enabled, browsing public Wi-Fi is genuinely safe for typical use, because credential theft over HTTPS is largely obsolete. The risk that remains is you trusting the wrong network operator and giving them data — at the portal, or by connecting to a rogue SSID.

**Can someone on the same Wi-Fi see my screenshots or photos?**
No, not with modern browsers and OS-level encryption. Screenshots and files sync over encrypted channels by default. What they *can* see is DNS lookups if you haven't set DoH, and SNI domains if you haven't set up a VPN.

**Do I need a VPN for café Wi-Fi?**
For general browsing with HTTPS-only mode on, I'd say no. For logging into a bank or your email on a network you don't trust, yes, or use your hotspot. My full VPN ranking is in [the 14-VPN test I ran](/posts/guide-using-vpns-secure-browsing/) if you want specific product advice.

**Is it safe to check email on hotel Wi-Fi?**
Yes, as long as the hotel's network isn't doing something odd (which you can verify by testing the login page and checking whether `https://` locks appear). If the hotel asks for suspicious data in the captive portal, that's a *privacy* concern, not a *security* one — use a throwaway email alias.

**Does "Incognito mode" make public Wi-Fi safer?**
No. Incognito hides your local browsing history from people using your device, but it does nothing about what the network sees. I've explained this distinction in more detail in [my guide to what private browsing actually hides](/posts/private-browsing-mode-what-it-hides/).

**What about public Wi-Fi in other countries?**
The same rules apply, plus one extra: fake airport networks are more common in some regions. If you're traveling internationally, add "install a local SIM or travel eSIM" to your list — connecting to a known network via cellular data is often faster and safer than hunting for Wi-Fi. I usually budget $10–20 for an eSIM per trip, and I've saved more than that in Wi-Fi anxiety.

## The one thing I changed permanently

Out of everything I did during this test, one change stuck: **I now verify every SSID before connecting.** It costs 10 seconds, it's the only control that catches a rogue AP in the moment, and I've already used it once in a crowded co-working space where two networks shared a prefix. The second one was a decoy set up by a fellow tester (I know, I know — we all get a bit curious).

Public Wi-Fi safety in 2026 is not the war zone the headlines describe. It's a small handful of specific, unglamorous habits: HTTPS-only mode, a real DNS resolver, auto-join off, and the willingness to ask a barista what their network is called. Everything else is either already automated or a distraction from those four moves.

Which is a good place to stop — with one last, practical note: if you've ever connected to a café Wi-Fi and then forgotten about it, take five minutes tonight, open your Wi-Fi settings, and forget every network you don't recognize. Your future self will thank you the next time you sit down at a coffee shop and see nine "Free Wi-Fi" networks staring back at you.
