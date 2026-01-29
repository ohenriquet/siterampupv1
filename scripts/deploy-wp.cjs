
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Determine destination: env var or default
const DESTINATION = process.env.WP_BUILD_DEST || path.resolve(__dirname, '../wp-dist');

console.log('🚀 Starting WordPress Build & Deploy...');
console.log(`📂 Destination: ${DESTINATION}`);

try {
    // 1. Build project
    console.log('🔨 Running local build...');
    execSync('npm run build', { stdio: 'inherit' });

    // 2. Prepare destination
    if (fs.existsSync(DESTINATION)) {
        console.log('🧹 Cleaning destination...');
        fs.rmSync(DESTINATION, { recursive: true, force: true });
    }
    fs.mkdirSync(DESTINATION, { recursive: true });

    // 3. Copy files
    console.log('📦 Copying files...');
    const sourceDir = path.resolve(__dirname, '../dist');

    // Recursively copy directory
    fs.cpSync(sourceDir, DESTINATION, { recursive: true });

    // 4. Move manifest.json to root (if configured by Vite to be in .vite)
    const manifestInViteDir = path.join(DESTINATION, '.vite', 'manifest.json');
    const manifestAtRoot = path.join(DESTINATION, 'manifest.json');

    if (fs.existsSync(manifestInViteDir)) {
        console.log('🚚 Moving manifest.json to root...');
        fs.renameSync(manifestInViteDir, manifestAtRoot);
        // Optional: remove empty .vite dir
        try { fs.rmdirSync(path.join(DESTINATION, '.vite')); } catch (e) { }
    }

    console.log('✅ Deploy successful!');
    console.log(`👉 Assets and manifest.json are ready in: ${DESTINATION}`);

} catch (error) {
    console.error('❌ Error during deployment:', error);
    process.exit(1);
}
