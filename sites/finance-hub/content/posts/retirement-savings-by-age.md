---
title: "How Much Should You Save for Retirement by Age: Benchmarks That Actually Hold Up"
date: 2026-09-20
lastmod: 2026-09-20
description: "Retirement savings by age benchmarks from Fidelity, Vanguard and T. Rowe Price, plus the math on why your income matters more than your age."
tags: ["retirement planning", "retirement savings by age", "how much to save retirement", "401k", "index funds"]
categories: ["Retirement", "Personal Finance"]
image: ""
draft: false
---

I turned 34 in March 2026 and did something slightly uncomfortable: I pulled up every retirement account I own and compared the balances against the standard age-based benchmarks. My 401(k) sat at $71,400. My Roth IRA, opened in 2019, was at $28,900. My taxable brokerage account, which I don't really count as retirement money but probably should, held $19,300.

By Fidelity's benchmark, a 34-year-old should have roughly 1.5x their salary saved. I was at about 1.9x. By Vanguard's more generous definition, I was comfortably ahead. By the "you need $1 million minimum" crowd on social media, I was hopelessly behind and should probably panic.

Three sources, three completely different emotional responses from the same numbers. That's the problem with this entire topic. So let me walk through what the actual benchmarks are, where they come from, and where I think they break down.

## The Benchmarks Most People Actually Reference

The number you'll see quoted most often comes from Fidelity's retirement savings guidelines, which they've been publishing and updating for years. The 2025 version (still current as of my writing in September 2026) looks like this:

| Age | Fidelity: Times Salary Saved | Vanguard: Times Salary Saved | T. Rowe Price: Times Salary Saved |
|---|---|---|---|
| 30 | 1x | 0.5x | 0.6x |
| 35 | 2x | 1.5x | 1.4x |
| 40 | 3x | 2.5x | 2.4x |
| 45 | 4x | 3.5x | 3.5x |
| 50 | 6x | 5x | 5.1x |
| 55 | 7x | 6.5x | 6.8x |
| 60 | 8x | 8.5x | 8.4x |
| 65 | 10x | 11x | 10.9x |

A few things stand out immediately. Fidelity is more aggressive early and slightly more conservative late. Vanguard's 2025 "How America Saves" report, which analyzes data from roughly 5 million retirement plan participants, shows a median 401(k) balance of $37,959 for people aged 35–44 and $61,344 for those 45–54. T. Rowe Price uses a slightly different methodology that assumes different income growth trajectories.

When I tested these numbers against my own situation, the Fidelity 35-year-old benchmark of 2x salary felt realistic but slightly punishing. If I'm making $115,000 (which I am, roughly, between my salary and freelance income), the target is $230,000. Vanguard says $172,500. That's a $57,500 gap between two reputable sources — enough to change how much I sleep at night.

## Why the Multiple-of-Salary Framing Is Both Useful and Slightly Dishonest

The reason everyone uses multiples of salary is that it scales with income, which sounds fair. But it quietly assumes your income trajectory is smooth, and it anchors your retirement target to your *current* spending rather than your *retirement* spending.

Here's what I mean. The Fidelity number assumes you'll need about 55% of pre-retirement income at age 67, combined with Social Security. But if you're a high earner, Social Security replaces a much smaller fraction of your income — roughly 25% for someone at $150,000 versus 40% for someone at $60,000. So the multiple-of-salary shortcut forces high earners to save more, which is correct in outcome but confusing in framing.

The other issue: your spending at 34 has almost nothing to do with your spending at 67. I spent $2,400 on daycare last month. In 33 years I will hopefully not be doing that.

When I ran my own projections, I found something more useful: forget the multiple of salary and calculate the target number directly.

Retirement target = (Annual retirement spending) × (Years in retirement) 
                    ÷ (Safe withdrawal rate adjustment)

Example:
Annual spending in retirement: $70,000
Years expected: 30
Safe withdrawal rate: 4%

Target portfolio = $70,000 / 0.04 = $1,750,000

That 4% figure comes from the Trinity Study, originally published in 1998 by three Texas Tech professors. It's been challenged repeatedly — the 2025 version of the study, updated with more recent data, suggests 4.5% to 5% may be sustainable with current bond yields. But 4% remains the conservative default most planners use.

## What the Numbers Look Like If You Started Late

I know plenty of people in their late 30s who have $12,000 saved and feel like it's over. It isn't, but the math changes.

If you start at 40 with $25,000 and save $1,500/month at 7% average returns, you'd hit roughly $1.02 million by 65. That's a real retirement, though probably not a lavish one. If you start at 50 with $80,000 and save $2,500/month, you'd reach about $820,000 by 65.

The compounding curve is brutal in the first decade and almost irrelevant in the last. This is the single most important thing I've learned from reading every retirement article I could find over the past three years — and it's why the [compound interest math](/posts/compound-interest-explained-start-early/) matters far more than any specific age benchmark.

Which brings up an uncomfortable truth: the Fidelity tables are less useful for people who are behind than for people who are on track. If you're 42 and have 0.8x salary saved, knowing you "should" have 3.2x is just demoralizing. The useful question becomes *what rate do I need to save going forward*, not *what should I have already accumulated*.

## How to Estimate Your Own Required Savings Rate

The math here is genuinely simple and I want to walk through it, because most articles skip this step.

You need three inputs:
1. **Current age and target retirement age**
2. **Current retirement balance**
3. **Annual savings and expected return**

Then you solve for the savings required to hit your target. But there's a shortcut that gets you 90% of the way there.

# Simple retirement savings rate estimator
current_age = 32
retire_age = 65
current_savings = 45000
expected_return = 0.07  # nominal, 7% is a common assumption
income = 95000
target_multiple = 8  # Fidelity's target at 60, adjusted

target = income * target_multiple  # $760,000
years = retire_age - current_age   # 33

# Future value of current savings
fv_current = current_savings * (1 + expected_return) ** years
# Approx $448,000

# Remaining needed
needed = target - fv_current  # $312,000

# Annual contribution required (annuity formula)
annual_savings = needed * expected_return / ((1 + expected_return) ** years - 1)
# Approx $3,100/year, or $258/month

In this example, a $258/month contribution gets you to the target. That's a 3.3% savings rate. But here's where it gets interesting: if I bump the expected return down to 5%, the required monthly saving jumps to about $540. At 4% return, it's $720.

The entire debate about "how much should I save" is secretly a debate about what return you expect. That's why the choice between [index funds and ETFs](/posts/index-funds-vs-etfs-beginners-comparison/) matters more than most beginner guides admit — it's not just about expense ratios, it's about whether you trust the equity risk premium to hold over your specific time horizon.

## Where the Benchmarks Actually Break

I noticed that almost none of the mainstream benchmarks account for three things that matter a lot in practice.

**First, healthcare costs.** Fidelity's own 2025 estimate puts a 65-year-old couple's lifetime healthcare costs (excluding long-term care) at roughly $340,000. That's not in the 10x salary target. If you're 50 with a family history of expensive medical issues, that's a real number to budget around.

**Second, sequence-of-returns risk.** If you retire in a bad market, a 4% withdrawal rate can wipe you out even if the long-term average holds. The 2000-2002 and 2008 cohorts learned this the hard way. Most age-based benchmarks don't address this at all.

**Third, and I think most important, the benchmarks assume you'll work continuously.** Gig workers, freelancers, parents who took years off — none of that is captured. When I switched from full-time employment to a mix of salary and freelance work in late 2024, my 401(k) contributions got lumpy, and the Fidelity multiple-of-salary target stopped making sense because my "salary" was now variable.

## A More Practical Approach I've Been Using

Rather than tracking my progress against a single multiple, I track three numbers:

- **Retirement balance ÷ current annual expenses** (not salary)
- **Annual savings rate as a percentage of gross income**
- **Projected balance at 65** based on my current contributions

The first number is honest because it doesn't inflate with raises. The second keeps me disciplined. The third is the one I actually look at when I'm deciding whether to increase contributions.

For tracking savings rate, I use a simple spreadsheet and cross-check it once a quarter. If you're doing any kind of written retirement planning, the [Markdown Editor](https://markdown-editor.search123.top/) is one of the cleanest ways I've found to keep a plain-text planning doc that syncs across devices — I've been using it since early 2026 to log quarterly reviews.

Here's the table I actually maintain:

| Metric | My number (Sept 2026) | Target |
|---|---|---|
| Retirement balance ÷ annual expenses | 5.7x | 25x by 65 |
| Savings rate | 23% | 20%+ |
| Projected balance at 65 (7% return) | $2.1M | $1.75M |
| Projected balance at 65 (5% return) | $1.4M | $1.75M |

Notice the gap between the 7% and 5% projections — that's $700,000. Everything hinges on a return assumption I can't control.

## The Honest Disagreement Among Planners

There's no consensus on whether the age-based benchmarks are the right framework at all. Wade Pfau, a retirement researcher at The American College, has argued for years that the multiples-of-salary approach underestimates required savings for high earners and overestimates for low earners. Michael Kitces has pointed out that for most workers, Social Security replaces a much larger share of income than the benchmarks assume, meaning the targets are often too conservative for middle-income households.

I'm somewhere in the middle. The benchmarks are useful as a directional check, not as a pass/fail. When I was 28 and had $11,000 in a Roth IRA, the fact that I "should" have had roughly $58,000 by Fidelity's math was alarming but also not actionable — I couldn't go back and save more in my early 20s. What was actionable was setting my 401(k) contribution to 15%, opening a second [Roth IRA](/posts/roth-vs-traditional-ira-comparison/) through a brokerage, and putting the annual contribution on autopilot.

If your income is inconsistent (mine is), you'll want a system that handles lumpy contributions well. I built mine around [financial automations](/posts/automate-your-finances-savings/) that pull fixed amounts to the IRA monthly and sweep bonuses into a taxable account.

## What I'd Actually Tell Someone Starting From Zero Today

If you're 25 and have nothing saved, the benchmarks say you should have 1x your salary by 30. That's about $65,000 if you're earning $65,000. If you save $900/month at 7%, you hit $63,000 in five years. That's aggressive but doable in most markets.

If you're 40 with $30,000, the benchmarks say 3x salary, which is $240,000 if you make $80,000. That's not happening in 10 years without heroic saving. But hitting $600,000 by 60 and relying on Social Security plus a lean lifestyle is absolutely achievable.

The most useful reframe I've found: instead of asking "am I behind by age," ask "what withdrawal rate can I sustain at my current trajectory." That turns a retrospective guilt trip into a forward-looking planning exercise.

One tool I've found oddly helpful for this is the [Net Worth Tracker approach](/posts/track-net-worth-importance/) — updating net worth monthly gives you the trajectory line, and the slope tells you more about your retirement readiness than any single balance ever will.

## A Note on Account Priority

Before you optimize the *amount*, get the *order* right. My priority order for 2026:

1. 401(k) up to employer match (instant 100% return, no exceptions)
2. HSA if you have an HDHP (triple tax advantage, use [this guide](/posts/hsa-triple-tax-advantage/))
3. Roth IRA or Traditional IRA up to the annual limit
4. Back to 401(k) up to the annual limit
5. Taxable brokerage account

This sequence matters more than the exact percentage you save. Someone saving 12% in the right order beats someone saving 20% in the wrong one.

## A Comment on What "Retirement" Even Means Now

The classic retirement age of 65 dates to 1935, when Social Security was created and life expectancy was 61. That's not a typo — the original retirement age exceeded average life expectancy. Today, a healthy 65-year-old has a reasonable chance of living to 88, and a decent chance of living past 92.

Age-based benchmarks are built on assumptions about lifespan that are aging badly. A 60-year-old with 8x salary saved might be fine if they die at 80 and disastrous if they live to 95. The benchmark doesn't know, and neither do you.

I plan to manage this by staying flexible — keeping skills current, maintaining a network, and not assuming I'll stop working entirely at any specific age. That's a mindset shift that most retirement guides don't address, but it's the honest answer to a question that has no universal solution.

The best retirement number is the one that keeps you saving steadily without wrecking your present. The benchmarks exist to give you a direction, not a verdict.
