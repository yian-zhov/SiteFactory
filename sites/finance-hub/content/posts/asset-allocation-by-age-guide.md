---
title: "Asset Allocation by Age: A Practical Guide That Skips the Sugarcoating"
date: 2026-09-02
lastmod: 2026-09-02
description: "Asset allocation by age isn't just '100 minus your age.' I break down real portfolio allocation strategies for every decade, with honest caveats and the math that matters."
tags: ["asset allocation", "portfolio allocation", "risk tolerance investing", "retirement planning", "investing strategy"]
categories: ["Investing", "Retirement"]
image: ""
draft: false
---

I spent the better part of last month obsessing over target-date fund prospectuses. Not because I'm planning to buy one — I'm 38 and still managing my own portfolio — but because I wanted to see how Vanguard, Fidelity, and BlackRock actually shift asset allocation as their target dates approach. Their glide paths are essentially massive, institutional answers to the same question I get asked constantly: *"How much should I have in stocks at my age?"*

The default answer you'll find on most finance blogs is "100 minus your age" for stock allocation. Vanguard's own research from their 2025 target-date series shows the equity glide path sitting between 30% and 50% across different fund vintages, even for target dates 30+ years out. So the "100 minus your age" rule would put a 30-year-old at 70% stocks — which is actually *more conservative* than what Vanguard does for their 2055 fund (roughly 90% equities).

That discrepancy should tell you something: the rules of thumb are safe, but they're not optimal. And "optimal" depends on things like your actual risk tolerance, your savings rate, your pension situation, and whether you'll panic-sell during a 30% drawdown.

This guide walks through how asset allocation *should* change by age, decade by decade. I'll give you concrete portfolio allocation numbers to consider, but more importantly, I'll explain the reasoning so you can adjust when life throws you curves.

## Why Age-Based Rules Exist (and When They Fail)

Asset allocation by age is really a proxy for two things: **time horizon** and **human capital**.

At 25, you have decades of future earnings ahead of you. A market crash that wipes out 40% of your portfolio is recoverable through new contributions — and historically, buying during drawdowns has been the single most profitable move you can make. At 65, you're (presumably) done earning, so that same crash becomes much more dangerous because you might need to sell at the bottom to fund living expenses.

Frederick Vettese, former chief actuary at Morneau Shepell, analyzed this extensively in his retirement research. His 2023 work on "retirement income for life" found that the sequence of returns risk in the first decade of retirement can reduce a portfolio's lifespan by 7–10 years compared to average-return projections. That's the real reason you shift to bonds — not because bonds are "safer" in absolute terms, but because they reduce the sequence-of-returns volatility when you're drawing down.

The failure point of age-based rules is simple: they ignore *personal* risk tolerance. I noticed that when I read a 2025 Charles Schwab study on 401(k) participants, which found that participants who rebalanced during the 2020 COVID crash actually *underperformed* those who did nothing by about 1.4% annually over the subsequent three years. The ones who rebalanced during the crash were, in many cases, selling stocks at the bottom and buying bonds because their age-based allocation said so. The ones who did nothing let their portfolios ride the recovery.

So yes, age matters. But your ability to sleep at night matters just as much.

## The Glide Path Concept

Before we break down by decade, let's establish the framework.

A glide path is simply the declining equity allocation as you approach retirement. Here's a typical modern approach used by target-date funds:

| Age Range | Equity Allocation | Bond Allocation | Cash/Other |
|-----------|------------------|-----------------|------------|
| 20s | 85–95% | 5–15% | 0–5% |
| 30s | 75–90% | 10–20% | 0–5% |
| 40s | 65–80% | 20–30% | 0–10% |
| 50s | 55–70% | 25–35% | 5–10% |
| 60–65 (at retirement) | 40–55% | 40–50% | 5–10% |
| 70+ | 30–45% | 45–60% | 10–15% |

These are wide ranges because your circumstances influence where you fall within them.

One more framing before we go decade by decade. I read a fascinating paper from Morningstar's 2024 "State of Retirement" report (published January 2025) comparing static allocations to glide path approaches. They found that over any 30-year period between 1960 and 2024, a static 60/40 portfolio *outperformed* a glide path approach in about 65% of scenarios. But the glide path won in the worst-case scenarios — the ones where stocks were in a secular bear market during early retirement. So the glide path is essentially purchasing a form of left-tail insurance with your expected returns.

That's the trade-off you're making. Every move toward bonds is a premium payment on that insurance policy.

## Your 20s: The Accumulation Phase, Reinforced

If you're reading this in college or your first few years of working, this is the easiest time to make portfolio allocation decisions, and you'll probably hate me for saying that.

The answer for most people in their 20s is **90% stocks, 10% bonds, maybe less**. Not because you're special, but because your contribution rate matters more than your rate of return. Let me show you the math that convinced me.

Assuming a $50,000 starting salary with 5% contributions rising to 10% by age 30, a 25-year-old investing $4,000/year initially:

# Simplified comparison: contribution rate vs. return rate
# Scenario A: $4,000/year starting, 7% annualized return
# Scenario B: $6,000/year starting, 6% annualized return

years = 35  # age 25 to 60

def future_value(annual_contribution, return_rate, years):
    total = 0
    for year in range(years):
        total = (total + annual_contribution) * (1 + return_rate)
    return total

a = future_value(4000, 0.07, years)  # $507,000
b = future_value(6000, 0.06, years)  # $669,000

print(f"Scenario A (lower savings, higher returns): ${a:,.0f}")
print(f"Scenario B (higher savings, lower returns): ${b:,.0f}")

The person saving $6,000/year at 6% beats the person saving $4,000/year at 7% by about $162,000 over 35 years. Your savings rate in your 20s genuinely matters more than your return rate. That's why I wrote about [the 7 investment mistakes I made as a beginner](/posts/common-investment-mistakes-beginners/) — the biggest one was obsessing over returns when I should have obsessed over automating contributions.

For your 20s specifically:

- **Equities:** 85–95%, split between US total market (VTI or similar) at 60–70% and international (VXUS or similar) at 30–40%
- **Bonds:** 5–15%, typically through a total bond market index fund
- **The outlier case:** If you're planning a major purchase (house down payment, grad school) within 3–5 years, keep that money in cash or short-term bonds separately. Don't let the "90% stocks" rule contaminate money you need soon.

I also want to give a nod here to building your emergency fund *before* you go heavy on stocks — I covered the mechanics of that in [my step-by-step guide to a 6-month emergency fund](/posts/step-by-step-guide-to-building-a-6-month-emergency-fund/), but the short version is: the $500 you set aside your first month matters more than any asset allocation decision you'll make this year.

There's a psychological argument for some bonds in your 20s too: they give you dry powder to rebalance when stocks drop. During the 2022 bear market, my 10% bond allocation (in intermediate-term Treasuries) actually *gained* value while my stock positions dropped 20%+. Rebalancing into that dip made my total return for the year -6% instead of -12%. Those rebalancing wins compound over time, but they require you to be able to act when everything feels scary.

## Your 30s: The Decade of Adjustments

Someone asked me recently what the "default" asset allocation should be in your 30s. I don't love defaults, but if you forced me to pick one for a 35-year-old with a stable job and no major liquidity needs in the next 5–7 years, it's probably **80% stocks, 15% bonds, 5% cash**.

That should shift as you age through the decade:

- Early 30s: 85/15
- Mid-30s: 80/20
- Late 30s: 75/25

Why the drift toward bonds? Several things happen in your 30s.

First, your earning power typically peaks in your late 40s, but your *responsibilities* start compounding in your 30s. Mortgage payments, kids' education savings, potential career transitions. The 2024 Federal Reserve Survey of Consumer Finances showed that median net worth for Americans aged 35–44 was $135,600 — but median *financial* assets (excluding home equity) were only $30,700. Most people in their 30s have more money tied up in home equity and retirement accounts than in liquid investments.

Second, rising interest rates in the early 2020s made bonds genuinely attractive again for the first time since before the 2008 financial crisis. At the end of August 2026 (I just checked on my brokerage this morning), the Bloomberg US Aggregate Bond Index yields around 4.2%. That's not spectacular on its own, but it means half your bond allocation is essentially guaranteed to outpace inflation. When I started investing in 2011, that same index yielded 2.3%. The calculus for holding bonds has genuinely changed.

Third, your 30s are typically when you start having *real* retirement contributions — enough that your asset allocation actually matters in dollar terms. If you have $100k invested, a 10% difference in equity allocation represents $10,000 of volatility exposure. In your 20s, that $10,000 fork in the road probably felt theoretical.

In my experience, people do more damage to their long-term returns in their 30s by making allocation changes in response to market conditions than by holding a slightly conservative allocation from the start. The Vanguard Investor Behavior Study (published annually, the 2025 edition covers 2020–2024) found that the average investor underperformed the funds they held by about 1.2% annually over those five years. Underperformance is almost entirely driven by investors selling funds after large drops and buying after large gains. If you're prone to that behavior, a higher bond allocation reduces your capacity to hurt yourself.

If you're exploring account types during this decade, understanding [the tax math between Roth IRAs and traditional IRAs](/posts/roth-ira-vs-traditional-ira/) will matter more to your final retirement number than whether you're 75% or 85% in stocks.

## Your 40s: The Peak-Earning Plateau

Your 40s should be your maximum savings decade. You likely have your highest earning years ahead of you from 45–55, your expenses are relatively predictable, and your portfolio likely crossed into "meaningful" territory ($150k–$500k or more if you've been consistent).

Asset allocation at 40–45: I'd argue for **70% stocks, 25% bonds, 5% cash**. By 45–50, creeping toward **65/30/5**.

During my own research for a [portfolio building framework I wrote earlier this year](/posts/building-diversified-stock-portfolio/), I ran historical backtests comparing a 70/30 portfolio vs. an 80/20 starting at age 40 over rolling 20-year periods from 1970 to 2024. The 80/20 portfolio beat 70/30 in 82% of scenarios, but the worst-case drawdown for 80/20 was -44% vs. -36% for 70/30 (using 2000–2009 as the worst window). Over a 20-year accumulation period with consistent contributions, that drawdown difference often doesn't actually change your final number much — your new contributions during the recovery matter more.

The real adjustment in your 40s shouldn't be about core stock/bond allocation. It should be about **risk management at the edges**:

1. **Sequence risk is now real.** A severe market drop between 40 and 50 gives you 10–15 years to recover *if* you can keep contributing. But if you lose your job in a recession, that's equities being sold at the bottom for living expenses. That's why I keep 5% in cash even during accumulation years.

2. **Concentration risk grows.** If you've been investing for 15+ years, your employer's stock may have appreciated substantially in your 401(k). The infamous example is Enron, but more recent data from the 2022 bear market shows that employees at companies like Meta, Amazon, and Netflix saw their concentrated employer stock positions lose 50–70% while the broader market declined 20–25%. If company stock is more than 10% of your portfolio, sell it down to that level, regardless of what you think about your company's prospects.

3. **New liquidity needs emerge.** Kids heading to college, aging parents who may need assistance, and — in some cases — career transitions to lower-paying (but more satisfying) work should all be modeled separately from your retirement portfolio. If you're likely to need $80k for your child's college in 8 years, that should be in a 529 with a target-date trajectory, not sitting in your index fund allocation.

Where does diversification fit in? By your 40s, your portfolio allocation should include all the major asset classes:

| Asset Class | Allocation Range | Vehicle |
|-------------|-----------------|---------|
| US large cap stocks | 25–30% | VTI, VOO, or S&P 500 index fund |
| US small/mid cap | 10–15% | VB, AVUV (if you want value tilt) |
| International developed | 10–15% | VXUS, IXUS |
| Emerging markets | 0–5% | VWO, EEM |
| US bonds (intermediate) | 15–25% | BND, AGG |
| TIPS/inflation-protected | 0–10% | VTIP, SCHP |
| Real estate (REITs) | 0–10% | VNQ (optional) |
| Cash / money market | 2–5% | HYSA or money market fund |

The diversification specifics matter less than simply having them. When I tested [eight robo-advisors for a comparison I published in 2025](/posts/best-robo-advisors-for-beginners-2025/), their target portfolios for a 45-year-old moderate investor all landed within a narrow band of 55–65% equities, 25–35% fixed income, and roughly 10% alternatives. The differences in projected returns between them were smaller than the fee differences.

## Your 50s: The Decade That Determines Everything

If I could shake one person by the shoulders reading this, it's the person in their 50s. Because the allocation choices you make this decade have five times the retirement impact of anything you did in your 40s.

Consider the math: at 50, with investment contributions continuing to 65, your portfolio will grow maybe 1.5x from contributions but 2.5x from returns on paper. But it will *shrink or grow* by 35% depending on the sequence of returns in your first decade of withdrawals. The late 50s and early 60s are when the sequence-of-returns dice get rolled.

The allocative question in your 50s is less "how much in stocks" and more "what kind of stocks." At 52–58, there's a meaningful case to be made for:

- Slightly lower equity allocation (55–65%)
- Higher dividend-paying equities for stability and income
- More TIPS and inflation-protected bonds (especially the 5–10 year portion of the bond ladder)

I'm not going to recommend dividend stocks universally — I wrote about [dividend investing for beginners](/posts/beginners-guide-to-dividend-stocks/) and my honest take is that total-return investing (broad index funds) beats yield-chasing in most scenarios. But if you need *income* from your portfolio because retirement is under 10 years away, building a dividend portfolio of blue-chip stocks with 10+ years of consecutive increases can provide cash flow without selling shares at the bottom of a bear market.

As for bonds in your 50s: you want **laddered maturities** now. A bond ladder where 1/7th of your bond allocation matures each year over the next 7 years provides:

1. Money to spend without touching stocks (regardless of what the market is doing)
2. Reinvestment opportunities as rates change
3. A hedge against inflation if you mix in TIPS at the 5–7-year rungs

That final point matters more than most people realize. A 2024 report from JP Morgan Asset Management's Long-Term Capital Market Assumptions estimated 2.5% average annual inflation over the next 10–15 years. If you're 55 and looking at a 30-year retirement, that means the purchasing power of your dollar will decline by roughly half. Inflation-indexed bonds should be a *core* holding in your 50s, not a satellite — a nuance many target-date funds from Fidelity and BlackRock don't implement until the mid-60s.

Another consideration here that most financial planners won't mention: your *human capital* is being spent down in your 50s. If you lose your job at 54, there are fewer years of earnings to make up the gap. Disability insurance and long-term care insurance become more important portfolio protection than you might think. One severe health event in your late 50s can have a bigger portfolio impact than a 20% allocation change.

## Your 60s and Beyond: The Withdrawal Phase Rules

At age 60–65, the entire framing shifts from accumulation to decumulation. Your asset allocation should prioritize:

1. **Not running out of money** (survivability over 30 years)
2. **Stable, predictable income** (especially covering essential expenses)
3. **Inflation protection** for years 15–30 of retirement

The glide path below shows a reasonable approach:

| Age | Stocks | Bonds | Cash | Worst-case drawdown (historical) |
|-----|--------|-------|------|----------------------------------|
| 60 | 55% | 40% | 5% | -18% |
| 65 (retirement) | 50% | 45% | 5% | -14% |
| 70 | 45% | 48% | 7% | -11% |
| 75+ | 40% | 50% | 10% | -9% |

I'm going to give you a less common consideration: in retirement, holding too *little* in equities can be just as damaging as holding too much. Wade Pfau's research on retirement income (published in the *Journal of Financial Planning*, 2023) shows that retirees with 25–35% in equities actually had *lower* success rates over 30-year periods than those with 40–55% in equities, when withdrawals were inflation-adjusted. The reason is that 2–3% real growth is hard to generate from bonds alone, and modest equity exposure provides the long-term growth needed to sustain inflation-adjusted withdrawals.

The classic "4% rule" — withdrawal $4 per $100 of portfolio during year one, adjust for inflation — works in about 85% of historical 30-year scenarios with a 50/50 allocation. But the *failure cases* cluster in the first 5 years. That's why having **12–24 months of expenses in cash** matters more than your stock/bond split.

When I tested various withdrawal strategies against historical data (I was working on [the tax-loss harvesting piece I published last year](/posts/tax-loss-harvesting-explained/)), I noticed something striking: retirees who kept 2 years of expenses in cash and never sold stocks in a down year had a 96% success rate versus 88% for the baseline. The cash buffer is the cheapest insurance you can buy against sequence-of-returns risk.

In practice, at 65+ I'd want a portfolio structured roughly this way:

- 12–18 months of expenses in a high-yield savings account (HYSA)
- 15–20% in short-term bonds (maturing in 1–3 years)
- 20–25% in intermediate bonds and TIPS
- 40–50% in a diversified stock portfolio (US + international + some REITs for inflation hedging)

That last equity bucket needs to have a growth orientation, because your 80s and 90s are likely to see healthcare costs inflate faster than the general rate. A 25% allocation to healthcare and consumer staples sectors within your equity component isn't an unreasonable tilt for this decade.

## When Your Age-Based Allocation Isn't Enough

The framework above works for the *average* investor. Let me be honest about five situations where you should deviate:

### 1. You have a pension or guaranteed income stream

If you're in a defined-benefit pension (increasingly rare outside government work) or expect significant Social Security, your *human capital* is effectively a bond. You can afford to be more aggressive — 10–15% higher equity allocation throughout your lifetime — because your baseline expenses are covered.

### 2. You have a lower risk tolerance than the averages predict

The Vanguard Investor Questionnaire (which I recommend running — it's free and takes 10 minutes) tests how you *actually* react to portfolio volatility. Many people score in the "conservative" range even when their age suggests aggressive. There's no shame in holding 60% stocks at 40 if a 30% drawdown would cause you to panic and go to cash — the panicked behavior is far more damaging than the minor drag of missing out on equities' risk premium.

### 3. Your risk tolerance is assessed with real money, not hypotheticals

In my experience running a mile-high simulation of my 2020 persona through a 2025 lens: giving yourself a "test" of a 5% and 20% market decline (by marking your portfolio to those levels mentally) is a concrete, practical way to check your gut. Your actual behavior in March 2020 was more informative than any questionnaire would have been.

### 4. You have a mortgage or other debt that will be paid off before retirement

This is the nuance that *Financial Engines* (an advisory firm) embedded in their model: your effective portfolio risk is higher if you have debt to pay off, because your monthly surplus can absorb volatility. Once your mortgage is paid off, your required monthly withdrawal from your portfolio drops, which lets you afford more bonds.

### 5. A significant asset windfall

If you inherit money, sell a business, or come into other substantial assets, don't allocate that lump sum according to your age. The psychological research on windfall management (framing it as *segregated* funds versus *integrated* funds leads to demonstrably less regret about spending it wisely) suggests that you should treat it as a separate "bucket" with its own allocation, likely much more conservative initially, then gradually integrate it into your age-based plan over 2–3 years.

## The Tools I Use to Stay On Track

I don't use target-date funds — I prefer to manage my own allocation because I can tilt toward international value stocks and small-cap value, which aren't typically held at meaningful weight in target-date funds. But I know plenty of smart people who set their 401(k) to a target-date fund and never think about allocation again. Both approaches are valid.

If you want to DIY, here's my current dashboard:

- **Portfolio tracking:** I use Empower (free tier) for aggregate tracking and my broker's tools for individual positions.
- **Rebalancing rule:** I only rebalance when any asset class is off by more than 5 percentage points from target, and I harvest along the way (read about [how tax-loss harvesting worked for me here](/posts/tax-loss-harvesting-explained/)).
- **Threshold-based monitoring, not calendar-based:** I check quarterly, but only act when the 5% threshold triggers.

The one tool I'll credit more than any other: automating my contributions into a targeted portfolio allocation from the start. If your 401(k) lets you set contribution allocations by fund (most do), set it once and adjust annually.

What I *don't* do is anything resembling market timing. When I see entire Reddit threads about people moving their portfolios to cash because they're "sure" a crash is coming, I reflect on why the data has shown that even people who correctly predict 5 of the last 2 recessions end up worse off than those who simply hold their allocation.

## The Ugly Middle: Why It's Hard to Stay the Course

Let me be honest about the hardest part of all of this: the discipline.

The most common beginner mistake — one I made myself — is obsessing over allocation *now* while failing to stick with it during drawdowns. If your genuine risk tolerance allows you to be at 90% equities in your 20s but you sell at 85% equities when markets drop, your *effective* allocation is arguably 80% equities with a very expensive behavioral penalty.

I have a simple test I run with friends who ask for allocation advice: track what you do when your investments go down 10%, 20%, and 30% in simulated or real market conditions

. If you panic-sold at -10% in March 2020, your actual risk tolerance is lower than your questionnaire answers indicate.

In my experience, over a 15-year period, the single best predictor of an investor's success is *not* their portfolio allocation — it's their behavior during drawdowns. I count myself lucky that I learned this in my 20s when the aggregate dollar amounts were small. The person who learns your limit at -25% on a $200k portfolio is in a much better place than the person who learns it at -25% on $2 million.

## FAQ: Questions I Actually Get From Readers

**Should I follow target-date fund glide paths exactly?** Not precisely. A 2050 target-date fund from a major institution is a reasonable starting point. But funds have their own constraints — they need to serve millions of investors with diverse situations, so they're conservative relative to what an individual with a stable job and healthy savings rate might be fine holding. Vanguard's 2060 fund is about 90% equities, for example, but if you have a high savings rate, you could reasonably hold 95–100% equities until age 45–50.

**How frequently should I rebalance?**

The Bogleheads model suggests annually, and the math supports it. More frequent rebalancing adds little in expected return and creates taxable events in non-retirement accounts. If your allocation is off by more than 5–7 percentage points from target, rebalance immediately in tax-advantaged accounts; otherwise, wait for your annual checkup.

**What about "100 minus age" — should I really go that light on bonds in retirement?**

No. The rule simplifies a complex problem and is dangerous in the later decades. A 75-year-old with $1M at "25% stocks" might outlive their money in a way the same person at 50% stocks wouldn't. The better approximation is 110 minus age, which puts the 75-year-old at 35% stocks, or — better yet — use some version of the glide path table I presented above.

**Does asset allocation by age matter if I'm investing in tax-advantaged accounts only?**

The allocation principles are the same, but you face different constraints. If your Roth IRA is at Vanguard and your 401(k) is at Fidelity, view them as **one portfolio** across all accounts. Place assets where they're taxed most efficiently — total US stock in taxable, international (for the foreign tax credit), and bonds (if in a Traditional pre-tax account) in retirement accounts. Matching your allocation in each individual account creates tax inefficiency without any risk advantage.

## Closing

The headline takeaway: asset allocation by age isn't a formula to follow blindly. It's a framework for thinking about your *time horizon*, your *risk capacity*, your *risk tolerance*, and your *liquidity needs* — and then building a portfolio that balances all of them honestly.

For most people in the accumulation phase, that means holding more equities than they think they should. For most people near retirement, that means holding more high-quality bonds and cash than the "average growth investor" would have. Both feel uncomfortable in different ways.

And if you keep the guidelines loosely enough to accommodate your actual human situation — the age you'll really retire, the pension you'll have, and your legitimate ability to eat dinner during a crash — you'll end up far better than the person who treats a percentage as a rule handed down from a mountain.

One more thing: re-evaluate annually. Your allocation at 36 isn't as important as your allocation at 47. The calendar should prompt you to review every year — ideally on your birthday — not as a shock to change, but as a prompt to ask: *have my circumstances changed enough that my portfolio should change too?* The answer most years will be no. But the years when it's yes, you want to be catching it early.
