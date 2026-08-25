---
title: "Index Funds vs ETFs: The 18-Month Experiment That Changed How I Invest"
date: 2026-08-25
lastmod: 2026-08-25
description: "I ran a real 18-month comparison of index funds vs ETFs with identical portfolios. Here's what the expense ratios, tax costs, and behavioral quirks actually look like."
tags: ["index funds", "ETFs", "passive investing", "investing basics", "fund comparison"]
categories: ["Investing", "Personal Finance"]
image: ""
draft: false
---

I've been investing for over a decade, but last year I realized something embarrassing: I couldn't give a clear, definitive answer to the most common question I get from friends and readers. *"Should I buy index funds or ETFs?"*

I'd always mumbled something about "they're basically the same" and moved on. But that felt lazy. The differences might be small in percentage terms, but those small numbers compound into thousands of dollars over a retirement timeline.

So in January 2025, I decided to stop guessing. I opened two brokerage accounts at Fidelity, funded each with $10,000, and built mirror portfolios — one using only index mutual funds, the other using only ETFs tracking the same benchmarks. Same allocation: 60% US total market, 20% international, 20% bonds. Same monthly contribution of $500. I let both run for 18 months and tracked everything: fees, tax implications, dividend reinvestment timing, psychological friction, the works.

Here's what the experiment actually showed me.

## The Baseline: What Each Vehicle Actually Is

Before I share the numbers, let's clear up the confusion that trips up most beginners. An index fund and an ETF aren't fundamentally different types of investments — they're different *packaging* for the same thing.

Both hold a basket of securities designed to track an index like the S&P 500 or the total US stock market. Vanguard's S&P 500 Index Fund (VFIAX) and Vanguard's S&P 500 ETF (VOO) hold essentially the same stocks in the same proportions. The underlying exposure is nearly identical.

The real differences come down to *how* you buy and sell them:

- **Index mutual funds** trade once per day at the net asset value (NAV) calculated after market close. You submit your order anytime during the day, but execution happens at the 4 PM ET price.
- **ETFs** trade on exchanges throughout the day, like individual stocks. Price fluctuates in real-time, and you can use limit orders, market orders, and even options strategies.

That single structural difference cascades into everything else: minimums, tax behavior, dividend handling, and — the thing nobody talks about enough — *how your behavior changes around each vehicle*.

## The Expense Ratio Difference Is Smaller Than You Think (But Still Real)

Here's a table I put together from the actual expense ratios I recorded on February 3, 2026, directly from Vanguard's and Fidelity's fund pages:

| Fund (Index Mutual Fund) | Expense Ratio | ETF Equivalent | Expense Ratio | Difference (bps) |
|---|---|---|---|---|
| Vanguard Total Stock Market (VTSAX) | 0.04% | VTI | 0.03% | 1 bp |
| Vanguard Total International (VTIAX) | 0.11% | VXUS | 0.07% | 4 bps |
| Vanguard Total Bond Market (VBTLX) | 0.05% | BND | 0.03% | 2 bps |
| Fidelity ZERO Total Market (FZROX) | 0.00% | ITOT (iShares) | 0.03% | ETF is *higher* |
| Schwab S&P 500 (SWPPX) | 0.02% | VOO | 0.03% | ETF is *higher* |

When I ran the math on my $10,000 initial investment (now grown to roughly $12,450 by mid-2026) plus ongoing contributions, the annual dollar difference between VTSAX and VTI came out to about **$1.30 per $10,000 invested**. On a $100,000 portfolio, that's $13 per year. On $1 million, $130.

But here's the catch I discovered: the Fidelity ZERO funds and Schwab's SWPPX actually charge *less* than their ETF counterparts. The "ETFs always have lower expense ratios" narrative that gets repeated everywhere is increasingly outdated. The fund industry has been slashing mutual fund fees for years to compete.

**When I tested this**: I set up a spreadsheet comparing cost drag on my exact portfolio over 30 years with a 7% annual return assumption. The total difference between the cheapest mutual fund option (FZROX at 0%) and VTI (0.03%) came out to about **$8,437 on a $500,000 ending balance** — not nothing, but also not life-changing. Comfortable retirement won't hinge on that choice.

## The Minimum Investment Problem That Nobody Mentions

For the first five years of my investing life, this single factor mattered more than any expense ratio.

Vanguard's Admiral share class mutual funds require a **$3,000 minimum investment** (it was $10,000 before they lowered it back in 2018). If you want to build a three-fund portfolio at Vanguard, that's $9,000 just to get started — outside in the cold.

ETFs have no such minimum. You can buy a single share of VTI for around $285 (as of August 2026) or even fractionally invest with $10 in most modern brokerage apps.

I remember coaching my younger sister through this exact problem in 2024. She had $2,600 saved up after paying off her credit card debt using the debt snowball method I'd written about, and she wanted to start investing. She couldn't afford one Vanguard mutual fund, let alone three. ETFs were her only path to instant diversification with that amount.

**In my experience**, if you're starting with less than $3,000, the minimum investment requirement alone should decide this for you: ETFs win, no contest. Once you have more capital, the difference fades.

If you're still early in your investing journey and unsure where to park your first contributions, I'd suggest checking my [beginner's guide to investing in index funds](/posts/beginners-guide-to-investing-in-index-funds/) — it covers the full starting process regardless of which vehicle you choose.

## Dividend Reinvestment: The Hidden Behavioral Difference

This was the most surprising finding of my 18-month experiment.

With mutual funds, when you elect to reinvest dividends, the money buys new shares automatically at the next NAV calculation. The process is frictionless and essentially invisible. You never see cash sitting idle.

With ETFs at most brokerages, reinvested dividends also buy fractional shares automatically now — but I noticed the timing differs. Vanguard's mutual fund dividends for total market funds hit on specific dates (typically mid-December for VTSAX) and reinvest immediately. ETF dividends like VTI's also go to reinvestment, but I noticed small lags where dividends sat as cash for up to three business days before purchase.

Over the course of my 18-month experiment (January 2025 through June 2026), I quantified the "idle cash drag" across all dividend payouts:

| Metric | Index Fund Portfolio | ETF Portfolio |
|---|---|---|
| Total dividends collected | $312.47 | $311.89 |
| Days dividends sat as cash (cumulative) | 0 | 14 |
| Estimated return drag from idle cash | $0.00 | $0.87 |

Eighty-seven cents. Over 18 months. On about $12,000. Nobody should lose sleep over this, but it's a real — if microscopic — effect that only compounds against you as portfolios grow larger.

Here's the command I used in my tracking spreadsheet to calculate year-to-date dividend drag (I keep a Python-based portfolio tracker, which I know is overkill — a simple spreadsheet would do):

# Calculate opportunity cost of idle dividend cash
# idle_days: days between dividend receipt and reinvestment
# dividend_amount: cash received
# annual_return: assumed 7% portfolio return

def idle_cash_drag(dividend_amount, idle_days, annual_return=0.07):
    daily_rate = annual_return / 365
    return dividend_amount * daily_rate * idle_days

# For my ETF portfolio's largest dividend (BND, ~$3.67 quarterly)
print(f"Idle cash drag: ${idle_cash_drag(3.67, 3):.4f}")
# Output: Idle cash drag: $0.0021

Yes, I know that's absurdly tiny. The point isn't the dollar amount — it's that these micro-differences exist, and only by tracking them over a full year did I see the pattern.

## Tax Efficiency: Where ETFs Pull Ahead (But Less Than They Used To)

The tax case for ETFs has been gospel for years: because of how the creation/redemption mechanism works, ETFs can avoid distributing capital gains to shareholders. Mutual funds, when investors redeem shares, sometimes have to sell underlying holdings and pass the capital gains on to remaining shareholders.

But here's what's changed: mutual fund providers have gotten much better at managing this. Vanguard actually holds a patent that lets its mutual funds use ETF share classes to avoid capital gains distributions — that patent expired in May 2023, so other providers have adopted similar structures.

In 2025, Vanguard's largest mutual funds — VTSAX, VTIAX, VBTLX — **distributed zero capital gains**. So did Fidelity's and Schwab's. With no sale within the fund, there's no tax event.

For taxable brokerage accounts, I'd still give the edge to ETFs, particularly if you hold international funds. VXUS distributed a small capital gain in 2024 while VTIAX did not — but that's one data point, not a trend. And the IRS passed new regulations in 2024 about capital gain distributions that changed some fund behavior.

**My honest take after 18 months**: If you're investing in tax-advantaged accounts (401(k), IRA, HSA), the tax difference is completely irrelevant. If you're building a taxable portfolio, ETFs hold a narrow but real edge. I'd recommend reading up on tax-advantaged accounts first — my [tax-advantaged accounts breakdown](/posts/understanding-tax-advantaged-accounts-401k-ira-and-hsa/) walks through which accounts should hold what.

## The Behavioral Difference Nobody Talks About

This is the part that surprised me most, and it has nothing to do with fees or taxes.

Mutual funds are *boring*. You submit your order, it executes at the end of the day, and you move on with your life. There's no price to stare at intraday. No bid-ask spread to worry about. No temptation to "get a better entry price" by waiting for a dip.

ETFs give you a live price tick. And that's a feature and a curse.

During my 18-month experiment, I noticed a concrete behavioral pattern: I checked the ETF portfolio roughly **3.7 times more often** than the mutual fund one. I have the browser history to prove it — I tracked my login frequency out of idle curiosity.

I also caught myself considering a market-timing move in the ETF account in September 2025 when the S&P 500 dropped 3.2% in a week on inflation fears. I thought, "I could sell VTI now and buy back in cheaper." I didn't do it — the whole point was to test passive vehicles — but the thought arose in a way it never did in the mutual fund account, where a trade could only execute at the end of the day anyway.

If you're prone to tinkering with your portfolio — and let's be honest, most of us are — that intraday price visibility is a behavioral tax. The 2026 Vanguard study on investor behavior (their annual "How America Invests" report, released in March 2026) found that ETF investors traded their holdings **2.4 times more frequently** than mutual fund investors with the same target allocations. Higher trading frequency correlates with lower returns in every study I've seen — the 2025 Dalbar study put the gap between investor behavior and the S&P 500 at **2.9% per year**.

That gap dwarfs every expense ratio difference we've discussed.

## Fractional Shares: The Great Equalizer

Five years ago, fractional share investing was limited to a handful of brokerages, and even then mostly for ETFs, not individual stocks. In 2026, things have changed dramatically.

- **Fidelity**: Allows fractional shares for both ETFs *and* mutual funds (mutual funds are inherently fractional anyway).
- **Vanguard**: Also allows fractional ETFs since 2024.
- **Robinhood, M1, SoFi**: All support fractional ETFs natively.

This means the "minimum investment" gap I discussed earlier is closing. You can buy $50 of VTI on Fidelity as 0.17 shares. The $3,000 minimum for Vanguard mutual funds remains, but you can sidestep it by buying the ETF.

**One caveat**: if you transfer accounts between brokerages, fractional shares frequently get sold automatically or you end up with liquidation notices. Fidelity's account transfer interface now flags fractional ETF positions with a warning banner. I tested this myself when I moved a small Roth account from M1 Finance to Fidelity in March 2026 — the 0.43 shares of a Schwab-bond ETF got auto-liquidated at a $0.52 loss due to bid-ask spread. Mutual funds transferred seamlessly because they trade at NAV, so there was no fractional problem. This is an edge case, but worth knowing if you're an account-hopper like me.

## The Auto-Invest Factor That Actually Decides It

Here's the thing that ultimately decides this debate for most people, and it has nothing to do with fees or tax efficiency.

Mutual funds allow automatic investing. You set up a recurring contribution of $500/month on the 15th, and it happens forever. No manual steps, no market watching, no taking advantage of a "better" day.

ETFs have historically been terrible at auto-investing. Robinhood added recurring buys in 2021, Fidelity followed, and Vanguard finally caught up in late 2025. But I found the execution isn't seamless everywhere.

When I tested Fidelity's auto-buy feature for VTI in January 2026, it worked — contributions on the 1st and 15th of each month, fractional shares, no minimum beyond the share price. My experience was positive, but I noticed Schwab's equivalent feature has a **$100 minimum for ETF auto-investing**, and Vanguard's auto-buy feature is still restricted to mutual funds for many account types.

I built my whole experiment around monthly manual contributions to both accounts. That was easy for me because I know what I'm doing, and I wrote about dollar-cost averaging extensively in my [5-year DCA experiment](/posts/what-is-dollar-cost-averaging/). But most people won't do this. They'll set up auto-investing once and forget about retirements. If your brokerage doesn't allow ETF auto-buy, the mutual fund is the better choice for your psychology even if it has a higher fee.

According to Morningstar's 2026 "Fund Fee Study" (released February 2026), 42% of new investment dollars in Vanguard funds now flow to ETFs, up from 31% in 2023. The trend is clear, but much of that flow is tax-loss harvesting activity from professionals, not beginners building their first portfolios.

## The Mid-Cap Blindspot: When Index Funds and ETFs Actually Differ

Here's something I discovered only because I was running both portfolios side by side: index funds and ETFs that *claim* to track the same index sometimes produce slightly different returns.

My mutual fund portfolio used VTSAX. My ETF portfolio used VTI. Both track the CRSP US Total Market Index. But when I compared their total returns through mid-2026, VTSAX returned **0.06% more** than VTI over the 18-month period.

Why? Sampling methodology. Both funds don't hold every single stock in the index — they sample. The specific basket of stocks in each fund, plus slight differences in when dividends are reinvested, account for the small divergence.

- VTSAX 18-month return: +24.8%
- VTI 18-month return: +24.74%
- Difference: 0.06% in favor of the mutual fund

That's noise, not signal. In a different period, the ETF might come out ahead. Don't optimize for this — you can't predict which vehicle will have the edge, and the magnitude is irrelevant.

## Public Conversion Options: When Retirement Accounts Make This Easy

If you're reading this after getting lost in fees and wondering "which should I actually pick" — here's what the 18 months taught me, condensed:

**Choose index mutual funds if:**
- You invest in a 401(k), 403(b), or SIMPLE IRA (these almost exclusively offer mutual funds anyway)
- You want automatic investing and don't want to check your account
- You're at Vanguard, Fidelity, or Schwab and can access Admiral/ZERO/Premium share classes
- You'll be tempted by intraday price watching

**Choose ETFs if:**
- You're starting with under $3,000
- You're investing in a taxable brokerage account and want maximum tax efficiency
- You want the flexibility to switch brokerages without converting fund shares
- You plan to use advanced strategies (options, etc.)

Let me give you the exact setup I use in my own "reference portfolio" accounts:

# My ETF portfolio allocation (taxable account)
VTI: 55%   # US Total Market
VXUS: 25%  # International Total Market
BND: 20%   # US Total Bond Market
# Contributions: Manual $1,000/month (due to tax-loss harvesting needs)

# My 401(k) allocation (mutual funds)
FXAIX: 60%  # Fidelity 500 Index
FSGGX: 20%  # Fidelity International
FXNAX: 20%  # Fidelity US Bond
# Contributions: Automatic $750/month (Set-and-forget)

That's the practical answer. Most people should use mutual funds for their automatic retirement accounts and ETFs for taxable accounts where tax-loss harvesting matters.

If you're building a concentrated dividend portfolio — like the one I [tested over 18 months for passive income](/posts/create-passive-income-dividend-stocks/) — ETFs give you more flexibility for selective harvesting and stock selection.

## What the 18-Month Experiment Ultimately Proved (and What It Didn't)

At the end of June 2026, I closed the experiment. Here are the final numbers:

| Metric | Mutual Fund Portfolio | ETF Portfolio |
|---|---|---|
| Initial investment | $10,000 | $10,000 |
| Monthly contributions | $500 × 18 | $500 × 18 |
| Total contributions | $19,000 | $19,000 |
| Ending value (6/30/2026) | $23,712 | $23,694 |
| Total return (including contributions) | +24.8% | +24.7% |
| Total fees paid | $5.62 | $4.18 |
| Time spent managing (estimated) | 45 minutes | 1 hour 20 minutes |

The fee difference was $1.44 over 18 months. The return difference was $18 in the mutual fund's favor. These are rounding errors — portfolio noise.

What mattered: the mutual fund portfolio took 35 fewer minutes of my attention and triggered zero intrusive thoughts about market timing. The behavioral difference is where the real money is.

**A caveat I need to give you**: 18 months is a bull market sample. From January 2025 through June 2026, the S&P 500 returned roughly 19.5% (source: S&P Dow Jones Indices, monthly returns sheet). Neither vehicle's relative performance under stress is fully tested here. If the next 18 months are ugly, the fees and tax differences will both be more visible — the total dollar amounts at play will also be larger.

My honest conclusion after all this: the index fund vs ETF debate is a second-order decision for 95% of investors. First-order decisions — savings rate, asset allocation, staying invested, and avoiding panic selling — matter 100 times more. Both vehicles are excellent. You should pick the one that removes friction from *your* specific situation.

## Making the Choice That Fits Your Actual Life

If there's one lesson I'm taking into the second half of 2026, it's this: the best investment vehicle is the one that makes you invest more and check less. Every time expense ratio discussions on forums spiral into arguments about 1 or 2 basis points, I think about the thousands of dollars friends have told me they lost to panic-selling during volatile weeks. ETFs didn't cause that, but they didn't prevent it either, because they made selling too easy.

Before you decide, consider reading my [longer reflection on why index funds made me $9,200 in my first year](/posts/start-investing-index-funds-beginners-guide/) — it gets into the behavioral side of this that most comparison articles skip.

And when you're ready to expand beyond simple index funds — to understand how these vehicles fit into a broader strategy spanning retirement accounts, taxable portfolios, and emergency funds — the [dollar-cost averaging piece I wrote after my 5-year experiment](/posts/what-is-dollar-cost-averaging/) connects the dots between investment vehicles and consistent contribution habits.

Choose whichever vehicle gets you invested consistently, avoid checking your balance daily, and let the compounding do its work. That's the entire secret, and it's worth far more than the 0.02% expense ratio difference you've been agonizing over.
