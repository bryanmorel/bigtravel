#!/bin/bash
# Download high-quality, consistent car images for Big Travel fleet
# Uses manufacturer press images and reliable image CDNs

cd "$(dirname "$0")/../assets/cars"

echo "🚗 Downloading real car images for Big Travel fleet..."
echo "   Images will be saved as WebP format for best performance"
echo ""

# Function to download and convert to webp
download_car() {
  local slug="$1"
  local url="$2"
  local filename="${slug}.webp"
  
  echo "📥 Downloading $slug..."
  
  # Download with curl, following redirects
  curl -sL "$url" -o "${slug}_temp.jpg" 2>/dev/null
  
  # Check if download succeeded and file is valid
  if [[ -f "${slug}_temp.jpg" ]] && [[ $(file -b --mime-type "${slug}_temp.jpg") == image/* ]]; then
    # Convert to WebP using sips (macOS built-in)
    if command -v cwebp &> /dev/null; then
      cwebp -q 85 "${slug}_temp.jpg" -o "$filename" 2>/dev/null
    else
      # Fallback: keep as original format but rename
      mv "${slug}_temp.jpg" "${slug}.jpg"
      filename="${slug}.jpg"
    fi
    rm -f "${slug}_temp.jpg" 2>/dev/null
    echo "   ✅ Saved $filename"
  else
    echo "   ⚠️  Failed to download $slug"
    rm -f "${slug}_temp.jpg" 2>/dev/null
  fi
}

# Real car images from various sources
# Using high-quality transparent/white background press images

# === COMPACT ===
# Kia Picanto
download_car "kia-picanto" "https://www.kia.com/content/dam/kia/us/en/vehicles/all-vehicles-modal/2024-rio.png"

# Nissan March (Micra)
download_car "nissan-march" "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/micra/product_code/product_version/overview/k14-micra-overview-front-34.png"

# Renault Kwid
download_car "renault-kwid" "https://cdn.motor1.com/images/mgl/kvBq1/s1/renault-kwid.webp"

# Chevrolet Onix HB
download_car "chevrolet-onix-hb" "https://www.chevrolet.com.br/content/dam/chevrolet/south-america/brazil/portuguese/index/cars/2024-onix/mov-360/exterior/onix-branco-summit.jpg"

# VW Golf
download_car "vw-golf" "https://di-uploads-pod11.dealerinspire.com/mcgrathhyundaiofdubuque/uploads/2020/02/volkswagen-golf-white-background.jpg"

# === SEDAN ===
# Chevrolet Onix Sedan
download_car "chevrolet-onix" "https://www.chevrolet.com.ar/content/dam/chevrolet/south-america/argentina/spanish/index/cars/2024-onix-sedan/colorizer/blanco-summit.jpg"

# Kia Rio
download_car "kia-rio" "https://www.kia.com/content/dam/kwcms/kme/uk/en/assets/vehicles/rio/2023/showroom/Gallery/kia-rio-my21-showroom-mini-carousel-front-34.png"

# Nissan Versa
download_car "nissan-versa" "https://www.nissan.com.co/content/dam/Nissan/colombia/vehicles/versa/2023/overview/versa-colombia-overview-front-34.png"

# Mazda 2 Sedan
download_car "mazda-2" "https://www.mazda.com.co/assets/cars/mazda-2-sedan/colors/blanco.png"

# Mazda 4 (Mazda 3)
download_car "mazda-4" "https://www.mazdausa.com/siteassets/vehicles/2024/mazda3-sedan/studio-360/snowflake-white-pearl-mica/mazda3s-2024-25s-snowflake-white-pearl-mica-front.png"

# === SUV ===
# Mazda CX-5
download_car "mazda-cx5" "https://www.mazdausa.com/siteassets/vehicles/2024/cx-5/studio-360/snowflake-white-pearl-mica/cx5-2024-2.5-s-premium-plus-snowflake-white-pearl-mica-front.png"

# Chevrolet Tracker
download_car "chevrolet-tracker" "https://www.chevrolet.com.co/content/dam/chevrolet/south-america/colombia/spanish/index/crossovers-and-suvs/2024-tracker/colorizer/blanco-summit.jpg"

# Kia Sportage
download_car "kia-sportage" "https://www.kia.com/content/dam/kwcms/kme/uk/en/assets/vehicles/sportage/2023/showroom/Gallery/kia-sportage-my22-showroom-exterior-front-34.png"

# Renault Koleos
download_car "renault-koleos" "https://cdn.motor1.com/images/mgl/2NN3wZ/s1/2023-renault-koleos.webp"

# === 4x4 ===
# Toyota Fortuner
download_car "toyota-fortuner" "https://www.toyota.com.co/content/dam/toyota/tme/latam/co/vehicles/fortuner/2024/overview/toyota-fortuner-2024-overview-front.png"

# Toyota 4Runner
download_car "toyota-4runner" "https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2024/4runner/sr5premium/40th-anniversary-special-edition/super-white-040/exterior.png"

# Toyota TXL (Land Cruiser Prado)
download_car "toyota-txl" "https://www.toyota.com.co/content/dam/toyota/tme/latam/co/vehicles/prado/2024/overview/toyota-prado-2024-overview-front.png"

# Chevrolet Trailblazer
download_car "chevrolet-trailblazer" "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/crossovers/trailblazer/colorizer/01-images/2024-trailblazer-gaz-iridescent-pearl-tricoat.jpg"

echo ""
echo "✨ Done! Check assets/cars/ for downloaded images."
echo ""
echo "If some images failed, you can manually add them:"
echo "  - Name format: {slug}.webp or {slug}.jpg"
echo "  - Recommended: 800x500px, white/transparent background"
