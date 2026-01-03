#!/usr/bin/env python3
"""
Download real car images from Unsplash for Big Travel fleet.
Using curated Unsplash photos for consistent professional look.
"""

import os
import requests
from pathlib import Path
import time

# Target directory
CARS_DIR = Path(__file__).parent.parent / "assets" / "cars"
CARS_DIR.mkdir(parents=True, exist_ok=True)

# User agent
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
}

# Unsplash photo IDs curated for car rental fleet
# Format: (slug, unsplash_photo_id, description)
# These are real Unsplash photos - consistent 3/4 front angle style
FLEET_IMAGES = [
    # === COMPACT (small city cars) ===
    ("kia-picanto", "ZRns2R5azu0", "small red hatchback"),
    ("nissan-march", "N7RiDzfF2iw", "silver compact car"),
    ("renault-kwid", "FHnnjk1Yj7Y", "white compact hatchback"),
    ("chevrolet-onix-hb", "LCguCXqkxSs", "blue hatchback"),
    ("vw-golf", "A-fubu9QDxQ", "volkswagen golf"),
    
    # === SEDAN (comfortable sedans) ===
    ("chevrolet-onix", "2KYq53XfLfg", "white sedan"),
    ("kia-rio", "vk4WDPGOCh4", "modern sedan"),
    ("nissan-versa", "d2lWCKxi1kg", "sedan on road"),
    ("mazda-2", "L34TfKVx6hU", "red mazda sedan"),
    ("mazda-4", "ZK0fhXffqz4", "mazda sedan front"),
    
    # === SUV (family SUVs) ===
    ("mazda-cx5", "FHaF7xYXIqA", "mazda suv"),
    ("chevrolet-tracker", "w4z4c5wLu9k", "compact suv"),
    ("kia-sportage", "3ZUsNJhi_Ik", "kia suv front"),
    ("renault-koleos", "xBWn8lBu_Ag", "crossover suv"),
    
    # === 4x4 (off-road capable) ===
    ("toyota-fortuner", "Jk3-Uhdwjcs", "toyota 4x4"),
    ("toyota-4runner", "JlUfZ6CrX-c", "4runner adventure"),
    ("toyota-txl", "7aXVbGePzqQ", "land cruiser"),
    ("chevrolet-trailblazer", "oX7ZDAOY7fo", "black suv 4x4"),
]


def download_unsplash(slug: str, photo_id: str) -> bool:
    """Download a photo from Unsplash by ID."""
    # Unsplash source URL format (free to use with attribution)
    url = f"https://images.unsplash.com/photo-{photo_id}?w=800&q=80&fit=crop&auto=format"
    
    try:
        print(f"  ⬇️  Downloading from Unsplash...")
        resp = requests.get(url, headers=HEADERS, timeout=20, stream=True)
        resp.raise_for_status()
        
        filepath = CARS_DIR / f"{slug}.jpg"
        with open(filepath, "wb") as f:
            for chunk in resp.iter_content(chunk_size=8192):
                f.write(chunk)
        
        # Verify file size
        if filepath.stat().st_size > 10000:
            print(f"  ✅ Saved {slug}.jpg ({filepath.stat().st_size // 1024}KB)")
            return True
        else:
            filepath.unlink()
            print(f"  ⚠️  File too small")
            return False
            
    except Exception as e:
        print(f"  ⚠️  Failed: {str(e)[:50]}")
        return False


def main():
    print("🚗 Downloading car images from Unsplash\n")
    print("   Using curated photos for consistent professional look\n")
    
    success = 0
    failed = []
    
    for slug, photo_id, desc in FLEET_IMAGES:
        print(f"📥 {slug} ({desc})")
        if download_unsplash(slug, photo_id):
            success += 1
        else:
            failed.append(slug)
        time.sleep(0.5)  # Be nice to Unsplash
    
    print(f"\n✨ Downloaded {success}/{len(FLEET_IMAGES)} images")
    
    if failed:
        print(f"\n⚠️  Failed: {', '.join(failed)}")


if __name__ == "__main__":
    main()
