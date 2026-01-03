#!/usr/bin/env python3
"""
Generate consistent car images using fal.ai's Flux model
"""
import requests
import time
import os

FAL_API_KEY = "6162163d-eb7a-411a-b485-908d6d72cdfe:fe533bd444f9cc3d093d965da5f98b42"
OUTPUT_DIR = "/Users/bryanguti/Sites/BigTravel/assets/cars"

# All 18 vehicles with their full names for better prompts
VEHICLES = [
    ("kia-picanto", "Kia Picanto"),
    ("nissan-march", "Nissan March"),
    ("renault-kwid", "Renault Kwid"),
    ("chevrolet-onix-hb", "Chevrolet Onix Hatchback"),
    ("vw-golf", "Volkswagen Golf"),
    ("chevrolet-onix", "Chevrolet Onix Sedan"),
    ("kia-rio", "Kia Rio"),
    ("nissan-versa", "Nissan Versa"),
    ("mazda-2", "Mazda 2"),
    ("mazda-4", "Mazda 3"),
    ("mazda-cx5", "Mazda CX-5"),
    ("chevrolet-tracker", "Chevrolet Tracker"),
    ("kia-sportage", "Kia Sportage"),
    ("renault-koleos", "Renault Koleos"),
    ("toyota-fortuner", "Toyota Fortuner"),
    ("toyota-4runner", "Toyota 4Runner"),
    ("toyota-txl", "Toyota Land Cruiser Prado"),
    ("chevrolet-trailblazer", "Chevrolet Trailblazer"),
]

def generate_image(vehicle_name: str) -> str:
    """Generate an image using fal.ai Flux model"""
    
    prompt = f"""Professional automotive photography of a {vehicle_name}, modern model year 2024. 
The car is photographed at a 3/4 front angle view, parked on a clean concrete surface. 
Background is a soft gradient neutral gray studio backdrop. 
The lighting is professional automotive studio lighting with soft shadows. 
The image is crisp, high resolution, photorealistic. 
No text, no watermarks, no logos visible. Clean and minimalist composition."""

    url = "https://queue.fal.run/fal-ai/flux-pro/v1.1"
    
    headers = {
        "Authorization": f"Key {FAL_API_KEY}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "prompt": prompt,
        "image_size": "landscape_16_9",
        "num_images": 1,
        "safety_tolerance": "5",
        "output_format": "jpeg"
    }
    
    # Submit the request
    response = requests.post(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        result = response.json()
        if "images" in result and len(result["images"]) > 0:
            return result["images"][0]["url"]
    
    # If immediate response didn't work, try polling
    if response.status_code == 202:
        result = response.json()
        request_id = result.get("request_id")
        
        # Poll for completion
        status_url = f"https://queue.fal.run/fal-ai/flux-pro/v1.1/requests/{request_id}/status"
        result_url = f"https://queue.fal.run/fal-ai/flux-pro/v1.1/requests/{request_id}"
        
        for _ in range(60):  # Wait up to 2 minutes
            time.sleep(2)
            status_response = requests.get(status_url, headers=headers)
            if status_response.status_code == 200:
                status = status_response.json()
                if status.get("status") == "COMPLETED":
                    result_response = requests.get(result_url, headers=headers)
                    if result_response.status_code == 200:
                        result = result_response.json()
                        if "images" in result and len(result["images"]) > 0:
                            return result["images"][0]["url"]
                    break
                elif status.get("status") == "FAILED":
                    print(f"  Generation failed: {status}")
                    break
    
    print(f"  Error: {response.status_code} - {response.text[:200]}")
    return None


def download_image(url: str, output_path: str) -> bool:
    """Download image from URL to file"""
    try:
        response = requests.get(url, timeout=30)
        if response.status_code == 200:
            with open(output_path, 'wb') as f:
                f.write(response.content)
            return True
    except Exception as e:
        print(f"  Download error: {e}")
    return False


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    print("🚗 Generating car images with fal.ai Flux Pro...\n")
    
    for slug, name in VEHICLES:
        output_path = os.path.join(OUTPUT_DIR, f"{slug}.jpg")
        print(f"Generating {name}...")
        
        image_url = generate_image(name)
        
        if image_url:
            if download_image(image_url, output_path):
                size = os.path.getsize(output_path) // 1024
                print(f"  ✓ Saved {slug}.jpg ({size}KB)")
            else:
                print(f"  ✗ Failed to download")
        else:
            print(f"  ✗ Failed to generate")
        
        # Small delay between requests
        time.sleep(1)
    
    print("\n✅ Done!")


if __name__ == "__main__":
    main()
