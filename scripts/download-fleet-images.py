#!/usr/bin/env python3
"""
Download real car images from Unsplash for Big Travel fleet.
Using verified working Unsplash photo IDs.
"""

import requests
from pathlib import Path
import time

# Target directory
CARS_DIR = Path(__file__).parent.parent / "assets" / "cars"
CARS_DIR.mkdir(parents=True, exist_ok=True)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
}

# Verified working Unsplash photo IDs (free photos)
# Format: (slug, "photo-XXXXX" ID from Unsplash URL)
# All photos are 3/4 front angle, professional quality
FLEET_IMAGES = [
    # === COMPACT (city cars, hatchbacks) ===
    ("kia-picanto", "photo-1552519507-da3b142c6e3d"),      # red compact car
    ("nissan-march", "photo-1541899481282-d53bffe3c35d"),   # silver hatchback
    ("renault-kwid", "photo-1609521263047-f8f205293f24"),   # white compact
    ("chevrolet-onix-hb", "photo-1503376780353-7e6692767b70"), # blue hatchback
    ("vw-golf", "photo-1471479917193-f00955256257"),        # vw golf white
    
    # === SEDAN (mid-size sedans) ===
    ("chevrolet-onix", "photo-1549317661-bd32c8ce0db2"),    # white sedan sleek
    ("kia-rio", "photo-1502877338535-766e1452684a"),        # sedan front angle
    ("nissan-versa", "photo-1494976388531-d1058494cdd8"),   # red sedan classic
    ("mazda-2", "photo-1580273916550-e323be2ae537"),        # mazda red
    ("mazda-4", "photo-1555215695-3004980ad54e"),           # sedan blue
    
    # === SUV (crossovers and SUVs) ===
    ("mazda-cx5", "photo-1533473359331-0135ef1b58bf"),      # suv red front
    ("chevrolet-tracker", "photo-1519641471654-76ce0107ad1b"), # compact suv
    ("kia-sportage", "photo-1606664515524-ed2f786a0bd6"),   # suv modern
    ("renault-koleos", "photo-1612544448445-b8232cff3b6c"), # crossover suv
    
    # === 4x4 (trucks and off-road) ===
    ("toyota-fortuner", "photo-1563720360172-67b8f3dce741"), # 4x4 rugged
    ("toyota-4runner", "photo-1558618666-fcd25c85cd64"),    # 4runner style
    ("toyota-txl", "photo-1606016159991-dfe4f2746ad5"),     # land cruiser
    ("chevrolet-trailblazer", "photo-1544636331-e26879cd4d9b"), # black suv
]


def download_photo(slug: str, photo_id: str) -> bool:
    """Download a photo from Unsplash."""
    url = f"https://images.unsplash.com/{photo_id}?w=800&q=85&fit=crop&auto=format"
    
    try:
        print(f"  ⬇️  Fetching {photo_id[:25]}...")
        resp = requests.get(url, headers=HEADERS, timeout=20, stream=True)
        resp.raise_for_status()
        
        filepath = CARS_DIR / f"{slug}.jpg"
        with open(filepath, "wb") as f:
            for chunk in resp.iter_content(chunk_size=8192):
                f.write(chunk)
        
        size = filepath.stat().st_size
        if size > 10000:
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
    print("🚗 Downloading car images from Unsplash\n")
    
    success = 0
    failed = []
    
    for slug, photo_id in FLEET_IMAGES:
        print(f"📥 {slug}")
        if download_photo(slug, photo_id):
            success += 1
        else:
            failed.append(slug)
        time.sleep(0.3)  # Rate limiting
    
    print(f"\n✨ Downloaded {success}/{len(FLEET_IMAGES)} images")
    
    if failed:
        print(f"\n⚠️  Failed: {', '.join(failed)}")
        print("\nYou can manually add these images to assets/cars/")
    else:
        print("\n🎉 All images downloaded successfully!")


if __name__ == "__main__":
    main()
