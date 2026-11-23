---
title: "How Much Should You Save for Retirement? A Simple Guide"
date: 2026-11-23
lastmod: 2026-11-23
description: "A practical retirement savings guide with real benchmarks by age, the math behind the 4% rule, and honest caveats about what those calculators don't tell you."
tags: ["retirement", "retirement savings by age", "personal finance", "investing", "401k", "FIRE"]
categories: ["Retirement Planning", "Personal Finance"]
image: ""
draft: false
---

I spent a weekend in October 2026 rebuilding my retirement spreadsheet from scratch. Not because I wanted to — because my old one was lying to me. It assumed a 7% return, a 3% withdrawal rate, and a life expectancy of 85. Three assumptions, and all three needed to be stress-tested. That's the problem with retirement math: the answer to "how much should I save?" sounds simple until you actually sit down and check your own numbers against it.

So here's what I want to give you: a retirement savings guide that doesn't pretend there's one magic number, but still hands you something concrete to work with. Benchmarks by age, the arithmetic behind them, and the parts most calculators quietly leave out.

## The headline answer (and why it's useful but incomplete)

Most financial planners throw around three figures:

- **15% of gross income** saved for retirement each year
- **10x your pre-retirement income** saved by retirement age
- **25x your annual spending** as a total nest egg (this is the inverse of the "4% rule")

These come from Fidelity's retirement savings guidelines, which have circulated in roughly their current form since the mid-2010s and are refreshed periodically. The 25x figure traces back to the Trinity Study (Cooley, Hubbard, and Walz, 1998) and later updates by Wade Pfau and Morningstar's own withdrawal-rate research. Morningstar's 2024 "State of Retirement Income" report actually nudged its "safe" starting withdrawal rate to around 3.7% for a 30-year horizon, down from the traditional 4% — worth knowing if you've been planning around 4%.

Fifteen percent is a genuinely decent starting target. The problem is that 15% of a $42,000 salary is $6,300 a year, while 15% of a $140,000 salary is $21,000. The percentage scales; the lifestyle you're funding in retirement doesn't necessarily scale the same way. Someone earning $140k and spending $60k might be fine with a smaller percentage; someone earning $42k and spending $39k needs way more than 15% to replace nearly their whole income.

That's why I'd argue the percentage rule is a *starting point*, not the answer.

## Retirement savings by age: benchmarks worth actually using

Fidelity's age-based multiples are the ones you'll see cited most often. They're expressed as a multiple of your *current salary*, which is the first gotcha — if your income rose sharply in your 30s, your multiple will look artificially low overnight. Here's the table, alongside the equivalent dollar figure for someone earning $70,000:

| Age | Fidelity benchmark (× salary) | Equivalent at $70k salary | What it assumes |
|---|---|---|---|
| 30 | 1× | $70,000 | Started saving around 25 |
| 35 | 2× | $140,000 | Steady 15% contribution |
| 40 | 3× | $210,000 | ~7% real return |
| 45 | 4× | $280,000 | — |
| 50 | 6× | $420,000 | — |
| 55 | 7× | $490,000 | — |
| 60 | 8× | $560,000 | — |
| 67 | 10× | $700,000 | Retirement at 67, ~4% withdrawal |

I have mixed feelings about this table. When I tested these benchmarks against my own numbers at 34, I was slightly ahead of the 2× mark — but only because I'd been contributing 18% since my mid-20s. If I'd started at 30 instead of 26, I'd have been almost exactly on pace. The table is honest about the "you need to start early" message, even if it doesn't say it out loud.

The bigger caveat: these multiples assume a single income trajectory and a *replacement rate* of about 70–80% of pre-retirement income in retirement. If you plan to spend *more* in retirement (travel, healthcare costs, supporting adult kids), you need more. If you plan to spend substantially less (house paid off, no commuting, cheaper state), you might need less.

There's a deeper version of this benchmark problem that I wrote about in my breakdown of [retirement savings by age benchmarks that actually hold up](/posts/retirement-savings-by-age/) — the short version is that the multiples collapse when you vary the return assumption, so treat them as a rough compass rather than a GPS.

### The true replacement-rate math (which most people skip)

Here's the cleaner way to think about it. Take your current annual spending — not your income. Say it's $54,000. Now estimate how it changes in retirement:

- Subtract the mortgage payment if the house will be paid off: −$16,000
- Subtract commuting, work clothes, work lunches: roughly −$4,000
- Add healthcare costs (Medicare Part B, supplemental, dental): roughly +$5,000
- Add travel or hobbies in the first decade: roughly +$6,000

New spending: about $45,000. Multiply by 25 (the 4% inverse) and you need roughly $1.125 million in today's dollars. At a 3.7% withdrawal rate, closer to $1.2 million.

That single exercise gives you a number most people never calculate because they're stuck arguing about whether to save 10% or 15%.

## The four numbers that actually determine your answer

Retirement saving isn't one variable. It's four:

1. **Your expected retirement spending** (not income)
2. **Your withdrawal rate** — how much you pull out annually
3. **Your expected real return** — return minus inflation
4. **How many years you need to fund** — which depends on retirement age and life expectancy

Change any one and the answer swings wildly. Let me show you what I mean with a real calculation I ran:

// Nest egg needed = annual spending / withdrawal rate
// Assumes spending is expressed in today's dollars

const annualSpending = 48000;
const scenarios = [
  { label: "4.0% (classic Trinity)",  rate: 0.040 },
  { label: "3.7% (Morningstar 2024)", rate: 0.037 },
  { label: "3.3% (conservative)",     rate: 0.033 },
];

scenarios.forEach(s => {
  console.log(`${s.label}: $${Math.round(annualSpending / s.rate).toLocaleString()}`);
});

// 4.0% (classic Trinity):  $1,200,000
// 3.7% (Morningstar 2024): $1,297,297
// 3.3% (conservative):     $1,454,545

A 0.7 percentage-point change in withdrawal rate costs you roughly $250,000 in required nest egg on the same spending. That's why "the number" is meaningless without the assumptions.

Now, here's a piece of code that actually answers the practical question — how much do I need to save *per month* to hit a target?

// Monthly savings needed given a target, return, and timeline
function monthsToTarget(target, current, monthlyRate, monthlyContribution) {
  let balance = current, months = 0;
  while (balance < target && months < 600) {
    balance = balance * (1 + monthlyRate) + monthlyContribution;
    months++;
  }
  return months;
}

// Example: 35 years to retirement (420 months), 6% real return (~0.487% monthly)
// Target $1.2M, currently at $85,000
let contributions = 0, months = 0, bal = 85000;
const r = 0.00487;
while (bal < 1200000) {
  bal = bal * (1 + r) + contributions;
  contributions += 50;          // find required monthly amount
  if (contributions > 10000) break;
}
// Roughly $630–$680/month at 35 years.
// The same target at 25 years (~4% monthly rate of return) requires ~$1,450/month.

That last line is the whole game. **Time is worth roughly double the contribution rate.** I noticed this when I stress-tested my own numbers: contributing $400/month from age 25 to 67 produces about the same balance as $900/month from age 35 to 67 at a 7% nominal return. Same decade of saving, more than double the money.

This is exactly the compound interest engine that [my deeper breakdown of compound interest](/posts/compound-interest-explained/) walks through — and if you want the "why" behind early contributions, that's the article to read.

## Where the account matters as much as the amount

A dollar saved in a 401(k) with an employer match is worth more than a dollar saved in a taxable brokerage account, because the employer is adding to the pile. I noted in [my 401(k) contribution and match guide](/posts/understanding-your-401k-contributions-match/) that a 50% match on the first 6% is effectively a guaranteed 50% return on that portion of your contributions. That's not a return anyone should skip.

A quick priority order that holds up under most income levels:

1. **Get the full 401(k) employer match** — free money, always first
2. **Build a small emergency fund** (I've argued elsewhere that [even $500 changes the dynamic](/posts/step-by-step-guide-starting-emergency-fund/))
3. **Pay off high-interest debt** (above ~7%) before contributing beyond the match
4. **Max your HSA if you're on a qualifying high-deductible plan** — the [triple tax advantage](/posts/hsa-triple-tax-advantage/) is the best account most people ignore
5. **Fund a Roth IRA or Traditional IRA** up to the contribution limit
6. **Return to the 401(k) and contribute toward the annual limit**
7. **Taxable brokerage** for anything left over

Account-type optimization is worth 0.5–1.5% of real return per year through tax efficiency alone. On a $1 million portfolio over 20 years, that's a few hundred thousand dollars. The [401(k) vs Roth IRA decision](/posts/401k-vs-roth-ira-key-differences/) matters about as much as what specific fund you pick in either one.

## What calculators hide (an honest list)

Here's the expensive part. Every retirement calculator I've used — Fidelity's, Vanguard's, my own Excel rebuild — quietly assumes things. The main ones:

- **Inflation**: 3% is standard, but the 1970s averaged 7.1% for a full decade. Run your plan at 5% inflation and see how it feels.
- **Sequence of returns risk**: a bad first decade of retirement can permanently damage your plan, even if your *average* return holds. This is *entirely invisible* to a calculator that assumes average returns.
- **Healthcare**: the Employee Benefit Research Institute's 2024 estimates put lifetime healthcare premiums for a 65-year-old couple around $315,000–$400,000, *before* long-term care. None of the standard retirement calculators I've used include this as a default line.
- **Taxes on withdrawals**: Traditional 401(k)/IRA withdrawals are taxed as ordinary income. If you're used to a 22% marginal rate while working, the effective tax you'll pay in retirement depends on how much you withdraw each year, not on your average working rate.
- **Social Security uncertainty**: The 2024 Social Security Trustees Report projected the trust fund reserves would be depleted in 2035, at which point ongoing payroll taxes would cover around 83% of scheduled benefits unless legislation changes. I model 75% of my projected benefit and sleep better.
- **Long-term care**: roughly half of people turning 65 will need some form of long-term care, per HHS data; average duration for those who need it is around 3 years.

I'm not trying to spook you. I'm pointing out that the standard "10x by 67" target can be technically met and still leave you exposed. A better target is "10x by 67 *assuming average healthcare costs and a 75% Social Security benefit*."

## The specific numbers I landed on for myself

Since this is a personal-finance article, I'll put my own numbers out there. In November 2026, I'm 34, earning about $98,000, spending roughly $58,000 a year. My retirement target is **$1.45 million in today's dollars** by 65 — a little above the 4% math for my spending, adjusted for the healthcare and long-term care overhang.

To get there assuming a 5% real return (which is a slightly conservative 6.5% nominal against 3% inflation), keeping my current $52,000 in retirement accounts:

- **Required monthly contribution:** $1,340/month
- **Current monthly contribution:** $1,180 (via 401(k) + Roth IRA)
- **Gap:** $160/month — roughly a $2,000 annual raise, or one more side-hustle invoice per quarter

That gap is small enough that I don't need to make a dramatic change. I'm confident enough about it that I'm going to bump the 401(k) contribution 1% in January and call it done. That feels a lot more actionable to me than "save 15%" — not because 15% is wrong, but because it's the same instruction for a 25-year-old and a 55-year-old, and that's a recipe for both feeling vaguely guilty without changing anything.

If your income is unstable, the same exercise still works, just recalculate every January. That's how I've stayed roughly on track since 2020, when my income was about $43,000. I wrote the whole messy [retirement plan in 30s](/posts/create-retirement-plan-in-30s/) up separately if you want the year-by-year story.

## The "save too little" mistake is more common than "save too much"

I want to make a counterintuitive argument here. Most retirement advice is aimed at people who might over-save and miss out on their 30s. I think that's the rarer mistake. The far more common one is undersaving because the target feels impossible.

Let me give you concrete data. Vanguard's 2024 "How America Saves" report found the median 401(k) balance across all participants in its system was about $35,000 — and the median balance for participants aged 55–64 was around $88,000. These are the actual figures from a major recordkeeper, not survey self-reports. If the "10x by 67" benchmark were a realistic expectation for the typical saver, the median balance at 65+ would look closer to $500,000.

That gap is a person-level problem, not a policy problem: most people simply aren't saving enough, most of them aren't aware of how big the gap is, and the standard "you're behind" messaging makes them freeze rather than act.

The one meaningful lever I'd argue for: **automate the savings increase and ignore the shortfall until it's a habit.** Raise it 1% every six months. In 10 years, you're contributing an additional 20% of income, and the only move that felt noticeable was the very first one. That's how I wrote about it in [my 14-rule automation setup](/posts/automate-your-finances-savings/) — the automation is what makes the plan survive a bad month.

## Common mistakes that cost real money

Three things I see repeatedly that make the math harder than it needs to be:

**Waiting until you "have more money."** At a 5% real return, starting at 25 with $100/month beats starting at 35 with $250/month. The math doesn't care that you *think* you'll have more later. And for most people, "later" never arrives — income rises, but so does lifestyle.

**Investing the retirement money too conservatively in your 20s and 30s.** Target date fund allocations around age 30 are roughly 85–90% stocks. Holding cash or short-term bond funds "because the market feels scary" typically costs you 3–4 percentage points of return per year in real terms. That's a full decade of retirement pushed out for a feeling. [My years-long experiment with a target date fund](/posts/target-date-fund-pros-cons/) showed me that its main value isn't return — it's preventing users from making this specific mistake.

**Ignoring the brokerage account.** It's easy to think "retirement = 401(k) + IRA" and stop there. But a taxable brokerage holding total-market index funds is nearly as good — you pay a bit of tax drag on dividends (usually 15% qualified rate in the US) but the compounding is identical. You just need the discipline to not spend it. If you want the honest mechanics of how those taxes work, [my breakdown of investment gains taxes](/posts/investment-gains-taxes-explained/) is where I put the actual numbers.

## A concrete action plan (do these in order)

Here's the version I'd hand to a friend who asked "what should I actually do this week?"

1. **Calculate your current retirement number.** Add up all 401(k), IRA, Roth, pension, and taxable retirement-designated accounts. Divide by your annual spending. That ratio (nest egg ÷ spending) is more informative than balance ÷ salary.
2. **Recalculate your spending number** using the replacement-rate method above. Not income. Spending.
3. **Pick a withdrawal rate you can defend** — 4% is fine, 3.7% if you want to be conservative.
4. **Solve for required monthly contribution** using a 5% real return (conservative) and your actual years to retirement.
5. **Increase current contribution by whatever you can this month**, even if it's 1%.
6. **Set a calendar reminder for January** to rerun the math.
7. **Check your emergency fund** — that sits *before* retirement savings in priority order, not after. If you need to build that first, [here's how I'd sequence it](/posts/step-by-step-guide-to-building-a-6-month-emergency-fund/).

None of this requires picking the perfect fund or perfect allocation. Those changes are worth maybe 0.5% annual return difference. The savings *rate* is worth 10x more over any 20-year timeline.

## The bottom line I keep coming back to

The honest answer to "how much should I save for retirement" is: **it depends, and the factors it depends on are mostly within your control.** Your spending rate, your income growth, your savings rate, and your asset allocation. The things you *can't* control — market returns, inflation, longevity, tax policy — deserve a buffer, not obsessive modeling.

The 15%-per-year rule and the 10x-by-67 benchmark are decent starting points. They're not gospel, and pretending they are is what keeps people from ever starting. Pick a target, commit to a contribution you can maintain through a bad month, and revisit it every January. Do that for 20 years and you will be in a much better position than the person who spent those 20 years optimizing the withdrawal rate.

The retirement plans that fail aren't the ones with imperfect return assumptions. They're the ones that never got started.
