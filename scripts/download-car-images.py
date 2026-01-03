#!/usr/bin/env python3
"""
Download real, consistent car images for Big Travel fleet.
Uses multiple fallback sources for reliability.
"""

import os
import requests
from pathlib import Path

# Target directory
CARS_DIR = Path(__file__).parent.parent / "assets" / "cars"
CARS_DIR.mkdir(parents=True, exist_ok=True)

# User agent to avoid blocks
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://www.google.com/"
}

# Car images from reliable public sources (CarDekho, Wikimedia Commons, manufacturer sites)
# Format: (slug, [list of fallback URLs])
FLEET_IMAGES = [
    # === COMPACT ===
    ("kia-picanto", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Picanto/6184/1581399498265/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/picanto-exterior-right-front-three-quarter-2.jpeg",
    ]),
    ("nissan-march", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Nissan/Micra/6670/1560923498217/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/40375/micra-exterior-right-front-three-quarter-20.jpeg",
    ]),
    ("renault-kwid", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Renault/Kwid/8960/1655372995831/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/141125/kwid-exterior-right-front-three-quarter-2.jpeg",
    ]),
    ("chevrolet-onix-hb", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Chevrolet/Spark/6283/1559018478159/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/48035/spark-exterior-right-front-three-quarter-2.jpeg",
    ]),
    ("vw-golf", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Golf-GTI/9212/1677583624478/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/48181/golf-exterior-right-front-three-quarter-2.jpeg",
    ]),
    
    # === SEDAN ===
    ("chevrolet-onix", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Chevrolet/Cruze/6292/1585037989411/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/27865/cruze-exterior-right-front-three-quarter-2.jpeg",
    ]),
    ("kia-rio", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Rio/6187/1583833218182/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/51431/rio-exterior-right-front-three-quarter.jpeg",
    ]),
    ("nissan-versa", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Nissan/Sunny/6703/1560923736629/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/38521/sunny-exterior-right-front-three-quarter-2.jpeg",
    ]),
    ("mazda-2", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mazda/2/6377/1560922655619/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/28633/mazda-2-exterior-right-front-three-quarter.jpeg",
    ]),
    ("mazda-4", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mazda/3/6379/1560922695395/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/40643/mazda-3-exterior-right-front-three-quarter.jpeg",
    ]),
    
    # === SUV ===
    ("mazda-cx5", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mazda/CX-5/9261/1680771631538/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/49008/cx-5-exterior-right-front-three-quarter.jpeg",
    ]),
    ("chevrolet-tracker", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Chevrolet/Trax/6330/1560921657802/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/40227/trax-exterior-right-front-three-quarter-2.jpeg",
    ]),
    ("kia-sportage", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Sportage-2022/10656/1658466078613/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/124025/sportage-exterior-right-front-three-quarter-5.jpeg",
    ]),
    ("renault-koleos", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Renault/Koleos/6866/1560923316115/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/29583/koleos-exterior-right-front-three-quarter.jpeg",
    ]),
    
    # === 4x4 ===
    ("toyota-fortuner", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner/10903/1697698053498/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg",
    ]),
    ("toyota-4runner", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Land-Cruiser-Prado/6966/1580996839498/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/45097/land-cruiser-prado-exterior-right-front-three-quarter-3.jpeg",
    ]),
    ("toyota-txl", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Land-Cruiser/10067/1655110498303/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/110233/land-cruiser-exterior-right-front-three-quarter-3.jpeg",
    ]),
    ("chevrolet-trailblazer", [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Chevrolet/Trailblazer/6332/1560921700588/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/27841/trailblazer-exterior-right-front-three-quarter.jpeg",
    ]),
]


def download_image(slug: str, urls: list) -> bool:
    """Try downloading from each URL until one works."""
    for url in urls:
        try:
            print(f"  ⬇️  Trying {url[:60]}...")
            resp = requests.get(url, headers=HEADERS, timeout=15, stream=True)
            resp.raise_for_status()
            
            # Determine extension from content type
            content_type = resp.headers.get("Content-Type", "")
            if "webp" in content_type:
                ext = "webp"
            elif "png" in content_type:
                ext = "png"
            else:
                ext = "jpg"
            
            # Save file
            filepath = CARS_DIR / f"{slug}.{ext}"
            with open(filepath, "wb") as f:
                for chunk in resp.iter_content(chunk_size=8192):
                    f.write(chunk)
            
            # Verify file size (should be > 10KB for a real image)
            if filepath.stat().st_size > 10000:
                print(f"  ✅ Saved {slug}.{ext} ({filepath.stat().st_size // 1024}KB)")
                return True
            else:
                filepath.unlink()
                print(f"  ⚠️  File too small, trying next...")
                
        except Exception as e:
            print(f"  ⚠️  Failed: {str(e)[:50]}")
            continue
    
    return False


def main():
    print("🚗 Downloading real car images for Big Travel fleet\n")
    
    success = 0
    failed = []
    
    for slug, urls in FLEET_IMAGES:
        print(f"📥 {slug}")
        if download_image(slug, urls):
            success += 1
        else:
            failed.append(slug)
            print(f"  ❌ All sources failed for {slug}")
    
    print(f"\n✨ Downloaded {success}/{len(FLEET_IMAGES)} images")
    
    if failed:
        print(f"\n⚠️  Failed vehicles: {', '.join(failed)}")
        print("   You can manually add these images to assets/cars/")


if __name__ == "__main__":
    main()
