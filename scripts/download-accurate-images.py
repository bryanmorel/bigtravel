#!/usr/bin/env python3
"""
Download ACCURATE car images from netcarshow.com for Big Travel fleet.
These are official manufacturer press photos matching each specific model.
"""

import requests
from pathlib import Path
import time

CARS_DIR = Path(__file__).parent.parent / "assets" / "cars"
CARS_DIR.mkdir(parents=True, exist_ok=True)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
}

# NetCarShow.com official press images - ACCURATE model representations
# URL format: https://www.netcarshow.com/{Brand}-{Model}-{Year}-wallpaper.jpg
FLEET_IMAGES = [
    # === COMPACT ===
    ("kia-picanto", "https://www.netcarshow.com/Kia-Picanto-2021-wallpaper.jpg"),
    ("nissan-march", "https://www.netcarshow.com/Nissan-Micra-2021-wallpaper.jpg"),  # March = Micra
    ("renault-kwid", "https://www.netcarshow.com/Renault-Kwid-2016-wallpaper.jpg"),
    ("chevrolet-onix-hb", "https://www.netcarshow.com/Chevrolet-Onix-2020-wallpaper.jpg"),
    ("vw-golf", "https://www.netcarshow.com/Volkswagen-Golf-2020-wallpaper.jpg"),
    
    # === SEDAN ===
    ("chevrolet-onix", "https://www.netcarshow.com/Chevrolet-Onix_Plus-2020-wallpaper.jpg"),
    ("kia-rio", "https://www.netcarshow.com/Kia-Rio-2021-wallpaper.jpg"),
    ("nissan-versa", "https://www.netcarshow.com/Nissan-Versa-2020-wallpaper.jpg"),
    ("mazda-2", "https://www.netcarshow.com/Mazda-2_Sedan-2020-wallpaper.jpg"),
    ("mazda-4", "https://www.netcarshow.com/Mazda-3_Sedan-2019-wallpaper.jpg"),  # Mazda 4 = Mazda 3
    
    # === SUV ===
    ("mazda-cx5", "https://www.netcarshow.com/Mazda-CX-5-2022-wallpaper.jpg"),
    ("chevrolet-tracker", "https://www.netcarshow.com/Chevrolet-Tracker-2021-wallpaper.jpg"),
    ("kia-sportage", "https://www.netcarshow.com/Kia-Sportage-2022-wallpaper.jpg"),
    ("renault-koleos", "https://www.netcarshow.com/Renault-Koleos-2020-wallpaper.jpg"),
    
    # === 4x4 ===
    ("toyota-fortuner", "https://www.netcarshow.com/Toyota-Fortuner-2021-wallpaper.jpg"),
    ("toyota-4runner", "https://www.netcarshow.com/Toyota-4Runner-2025-wallpaper.jpg"),
    ("toyota-txl", "https://www.netcarshow.com/Toyota-Land_Cruiser_Prado-2018-wallpaper.jpg"),  # TXL = Prado
    ("chevrolet-trailblazer", "https://www.netcarshow.com/Chevrolet-Trailblazer-2021-wallpaper.jpg"),
]


def download_image(slug: str, url: str) -> bool:
    """Download image from URL."""
    try:
        print(f"  ⬇️  Fetching from netcarshow.com...")
        resp = requests.get(url, headers=HEADERS, timeout=30, stream=True)
        resp.raise_for_status()
        
        filepath = CARS_DIR / f"{slug}.jpg"
        with open(filepath, "wb") as f:
            for chunk in resp.iter_content(chunk_size=8192):
                f.write(chunk)
        
        size = filepath.stat().st_size
        if size > 20000:  # Should be at least 20KB for a real press photo
            print(f"  ✅ Saved {slug}.jpg ({size // 1024}KB)")
            return True
        else:
            filepath.unlink()
            print(f"  ⚠️  File too small ({size} bytes)")
            return False
            
    except Exception as e:
        print(f"  ❌ Error: {str(e)[:60]}")
        return False


def main():
    print("🚗 Downloading ACCURATE car images from netcarshow.com\n")
    print("   These are official manufacturer press photos\n")
    
    success = 0
    failed = []
    
    for slug, url in FLEET_IMAGES:
        print(f"📥 {slug}")
        if download_image(slug, url):
            success += 1
        else:
            failed.append(slug)
        time.sleep(0.5)  # Be nice to the server
    
    print(f"\n✨ Downloaded {success}/{len(FLEET_IMAGES)} images")
    
    if failed:
        print(f"\n⚠️  Failed: {', '.join(failed)}")
    else:
        print("\n🎉 All images downloaded successfully!")


if __name__ == "__main__":
    main()
