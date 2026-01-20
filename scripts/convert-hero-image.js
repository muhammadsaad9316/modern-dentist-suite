const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertImage() {
    // Fix: Go up one level from scripts directory to find public folder
    const projectRoot = path.join(__dirname, '..');
    const inputPath = path.join(projectRoot, 'public', 'hero-image.png');
    const outputPath = path.join(projectRoot, 'public', 'hero-image.webp');
    const blurPath = path.join(projectRoot, 'hero-blur-data.txt');

    console.log('Converting hero-image.png to WebP...');

    try {
        // Convert to WebP with quality 60
        await sharp(inputPath)
            .webp({ quality: 60 })
            .toFile(outputPath);

        // Get file sizes
        const originalSize = fs.statSync(inputPath).size;
        const webpSize = fs.statSync(outputPath).size;
        const reduction = ((1 - webpSize / originalSize) * 100).toFixed(1);

        console.log(`✅ Conversion complete!`);
        console.log(`   Original PNG: ${(originalSize / 1024).toFixed(1)}KB`);
        console.log(`   WebP output: ${(webpSize / 1024).toFixed(1)}KB`);
        console.log(`   Size reduction: ${reduction}%`);

        // Generate blur placeholder (10x10 pixels, base64 encoded)
        console.log('\nGenerating blur placeholder...');
        const blurBuffer = await sharp(inputPath)
            .resize(10, 10, { fit: 'inside' })
            .webp({ quality: 20 })
            .toBuffer();

        const blurDataURL = `data:image/webp;base64,${blurBuffer.toString('base64')}`;

        // Save blur data to file for reference
        fs.writeFileSync(blurPath, blurDataURL);

        console.log(`✅ Blur placeholder generated!`);
        console.log(`   Blur data saved to: hero-blur-data.txt`);
        console.log(`   Length: ${blurDataURL.length} characters`);
        console.log('\nBlur placeholder (use this in Hero.tsx):');
        console.log(`blurDataURL="${blurDataURL.substring(0, 100)}..."`);

    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

convertImage();
