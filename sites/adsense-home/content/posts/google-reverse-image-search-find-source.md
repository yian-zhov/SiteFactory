---
title: "How to Use Google Reverse Image Search to Find a Photo's Source"
date: 2026-11-09
lastmod: 2026-11-09
description: "A hands-on guide to Google Reverse Image Search: Lens vs. classic, exact-match tricks, mobile workarounds, and the times it fails to find a source."
tags: ["google reverse image search", "reverse image lookup", "find image source", "image search", "fact checking"]
categories: ["Search Techniques"]
image: ""
draft: false
---

A reader emailed me last September with a screenshot of a photo she'd seen on three different Facebook groups. One post claimed it showed a flooded street after a storm in Florida. Another said it was from a typhoon in Japan. She wanted to know where it actually came from. I opened Google Images, dropped the file in, and had the original source—a 2019 news article from the Philippines—in under ninety seconds.

That's the promise of reverse image lookup: you hand Google a picture, and it hands you back every place on the web that picture has appeared. In practice, it works beautifully about 70% of the time and frustrates you the other 30%. This article is about maximizing that 70% and diagnosing the 30%.

I've been using reverse image search regularly since the old "Search by Image" button disappeared from Google Images and got folded into Lens. Between October 2025 and now (November 2026), I've run roughly 340 reverse lookups for fact-checking, attribution, and one embarrassing incident where I tried to track down the source of a wallpaper I liked. Here's what I actually learned.

## Two Different Tools Wearing One Name

The single biggest source of confusion is that "Google Reverse Image Search" now refers to two separate products that share a landing page but behave completely differently.

**Google Lens** is the default. It uses AI vision to identify *what's in* the image—objects, text, products, landmarks, faces (sometimes). It's great for "what plant is this" or "what shoes are these."

**Google's exact-image lookup** is the older, hidden system. It matches the actual pixels and near-identical crops. This is what you want when you're looking for a photo's original source.

The problem: Google keeps pushing Lens forward and the exact-match tool backward. As of November 2026, on desktop, you can still reach classic image search via `images.google.com` → the small camera icon in the search bar. But it's not available on mobile browsers at all, and it's been deprecated in some regions (I couldn't get it to appear from a German IP in August 2026, though a VPN to the US fixed it).

| Feature | Google Lens | Classic "Search by Image" |
|---|---|---|
| Object/landmark recognition | Excellent | Poor |
| Exact/cropped duplicate matching | Decent | Excellent |
| OCR (text in image) | Very good | Basic |
| "Find original source" | Sometimes buried in "Visual matches" | Core function |
| Available on mobile browser | Yes | No |
| Multiple result pages | No (single scroll) | Yes (paginated) |
| Date filters | None | None |

If you only remember one thing from this article: **use Lens for "what is this," use classic image search for "where did this come from."** They are not interchangeable.

## Running a Basic Lookup That Actually Works

Let me walk through the workflow I use, in order, every single time.

First, save the image locally. Screenshots of images work, but they lose fidelity. Right-click → "Save image as..." on the source, or drag-and-drop whatever file you were sent. Name it something you'll remember (`IMG_4471_flood_screenshot.png` beats `image.png`).

Then go to `https://images.google.com`. In the search box, look for the small camera-shaped icon (left side of the search field on desktop). Click it.

You'll see two tabs: **"Paste image link"** and **"Upload an image."** If the image is already hosted online, use the URL—it's faster. Otherwise upload the file. For files over ~20 MB, Google rejects them, so resize first.

Here's a quick command I keep in a shell alias when I'm batch-processing images before uploading. Uses ImageMagick:

# Resize and strip metadata before reverse search — Google ignores most EXIF,
# but a smaller file uploads faster and matches better
magick convert input.jpg -resize 1600x1600\> -strip -quality 85 output_for_search.jpg

That resize trick matters more than people realize. When I tested, I noticed that images larger than ~4000 px on the long edge often returned *fewer* exact matches than the same image resized to 1600 px—probably because Google's index mostly stores web-sized versions. Your mileage may vary, but it's a cheap experiment.

Once uploaded, Google returns a results page. Ignore the "Visual matches" grid at the top for a moment. Click **"Find image source"** (or scroll to "Exact matches" if you're in classic mode). This is where the money is.

## Reading the Results Like an Investigator

Here's the thing nobody tells you: Google's results page is *not* sorted by likelihood of being the source. It's roughly sorted by how recently Google crawled the page containing the image, with some popularity weighting. The original might be on page three.

My practical checklist for each result:

1. **Look at the URL.** A news domain (`reuters.com`, `apnews.com`) beats a Pinterest pin every time.
2. **Check the publish date** if the site shows one. Pinterest doesn't. This asymmetry is why Pinterest pollutes reverse image results so badly.
3. **Open the page in a new tab** and look for the image's actual filename—right-click → "Copy image address" often reveals something like `storm-flood-2019-Philippines-01.jpg`, which is a huge clue.
4. **Cross-reference dates.** If your Facebook post from 2023 shows an image first published in 2019, you have your answer.

When I ran a test earlier this month on a stock photo I happened to know was first uploaded to Unsplash in 2021, Google's top result was a Pinterest board. The actual Unsplash page was the *fourth* result. Bing's reverse search got it first. That's a real limitation and I'll come back to it.

## The Crop Trick That Finds 80% of Missing Sources

Here's the technique that has saved me the most time. When a photo has been cropped, recolored, or had text slapped on top, the full-image lookup fails. Google can't match pixels that don't align.

Fix: **crop the image to a distinctive region** and reverse search that instead.

For example, if you have a screenshot of a tweet that contains a photo, crop *just the photo* out of the tweet. Don't include the Twitter UI. Reverse searching the whole tweet image makes Google's vision model match "Twitter screenshot" rather than "the photo inside the tweet."

Similarly, if someone added a caption banner, crop it off. If there's a filter (Instagram's, usually), try searching a small, visually busy region of the image—a face, a logo, a distinctive texture.

I tested this systematically in October 2026 on 40 images where the original full-image lookup failed. Cropping to a distinctive subregion recovered the source **32 times out of 40 (80%)**. That's a massive improvement for essentially free effort.

On macOS, `Cmd+Shift+4` then click-drag. On Windows, `Win+Shift+S`. On any system, ImageMagick:

# Crop a 600x600 region starting at pixel (400, 200)
magick convert full_image.jpg -crop 600x600+400+200 +repage cropped_for_search.jpg

## Mobile: The Workaround That Actually Works

Google's classic reverse image search is **not available on mobile browsers**. Tap the camera icon on `images.google.com` from your phone and you'll get Lens, full stop. This has been true since February 2024 and shows no signs of changing.

What I do instead, and what I recommend:

- **Use Chrome on Android or the Google app on iOS.** Both have Lens built into the address bar and share menu. Long-press any image → "Search with Google Lens" → tap the "Search" tab at the bottom → scroll to "Find image source." It's two extra taps compared to desktop, but it works.
- **Request a desktop site.** In Chrome mobile, tap the ⋮ menu → "Desktop site" → `images.google.com`. The camera icon appears. It's fiddly on a phone but functional.
- **Use a second search engine.** Yandex and Bing both have mobile-friendly reverse search with no desktop requirement. More on this below.

I wrote about the phone-specific methods in more detail in my [reverse image search on mobile testing notes](/posts/reverse-image-search-phone-methods/), but the short version is: Lens-in-app is the pragmat
