#!/usr/bin/env python3

import os
from PIL import Image

def convert_to_grayscale():
    # Path to the brands directory
    brands_dir = "public/assets/brands"
    
    # Supported image extensions
    supported_extensions = ('.png', '.jpg', '.jpeg', '.bmp', '.tiff', '.webp')
    
    # Get all image files in the directory
    for filename in os.listdir(brands_dir):
        if filename.lower().endswith(supported_extensions) and not filename.startswith('.'):
            file_path = os.path.join(brands_dir, filename)
            
            try:
                # Open the image
                with Image.open(file_path) as img:
                    # Convert to grayscale
                    grayscale_img = img.convert('L')
                    
                    # Convert back to RGB to maintain PNG format with transparency if needed
                    if img.mode in ('RGBA', 'LA'):
                        # For images with transparency, convert to RGBA and make grayscale
                        rgb_img = Image.new('RGBA', img.size, (255, 255, 255, 0))
                        for x in range(img.width):
                            for y in range(img.height):
                                r, g, b, a = img.getpixel((x, y)) if img.mode == 'RGBA' else (*img.getpixel((x, y)), 255)
                                gray_value = int(0.299 * r + 0.587 * g + 0.114 * b)
                                rgb_img.putpixel((x, y), (gray_value, gray_value, gray_value, a))
                        grayscale_img = rgb_img
                    else:
                        # For regular RGB images, convert grayscale back to RGB
                        grayscale_img = Image.merge('RGB', (grayscale_img, grayscale_img, grayscale_img))
                    
                    # Save the grayscale image (overwrite original)
                    grayscale_img.save(file_path)
                    print(f"Converted {filename} to grayscale")
                    
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    convert_to_grayscale()
    print("Grayscale conversion complete!")
