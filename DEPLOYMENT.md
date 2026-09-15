# Deploying PANA Website to Afrihost

This is a **static website** that requires NO server-side code. It will work perfectly on Afrihost's static hosting.

## ✅ What You Get

After running `npm run build`, you get a `dist` folder containing:
- `index.html` - Main HTML file
- `assets/` - All CSS, JavaScript, and other assets

These are pure HTML/CSS/JavaScript files that work in any browser without a server.

## 📦 Deployment Steps for Afrihost

### Option 1: Via cPanel File Manager (Recommended)

1. **Build the production version** (already done):
   ```bash
   npm run build
   ```

2. **Locate the `dist` folder**:
   - It's in: `/Users/chilalansanzya/Documents/Pana website/dist`
   - Contains all your website files

3. **Upload to Afrihost**:
   - Log into your Afrihost cPanel
   - Go to **File Manager**
   - Navigate to `public_html` (or your domain's root folder)
   - **Delete** any existing files in that folder
   - **Upload** all contents from the `dist` folder
   - Make sure `index.html` is in the root of `public_html`

4. **Done!** Visit your domain - the site will work immediately.

### Option 2: Via FTP

1. **Build the production version**:
   ```bash
   npm run build
   ```

2. **Connect via FTP**:
   - Use FileZilla or any FTP client
   - Host: Your Afrihost FTP address
   - Username: Your cPanel username
   - Password: Your cPanel password

3. **Upload files**:
   - Navigate to `public_html` on the server
   - Upload all contents from the `dist` folder
   - Ensure `index.html` is in the root

### Option 3: Create a ZIP file

1. **Compress the dist folder**:
   ```bash
   cd dist
   zip -r pana-website.zip .
   ```

2. **Upload via cPanel**:
   - Upload `pana-website.zip` to `public_html`
   - Use cPanel's "Extract" feature to unzip it

## 🔧 Important: Configure for Single Page Application

Since this uses React Router, you need to configure the server to handle client-side routing.

### Add `.htaccess` file to `public_html`:

Create a file named `.htaccess` with this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures that URLs like `yourdomain.com/about` work correctly.

## ✅ What Works Without a Server

- ✅ All pages and navigation
- ✅ Responsive design
- ✅ Animations
- ✅ All styling
- ✅ Contact links (WhatsApp, phone, email)
- ✅ External links (social media)
- ✅ Google Maps embed

## 🔄 Updating the Website

Whenever you make changes:

1. Edit the source files in `src/`
2. Run `npm run build`
3. Upload the new `dist` folder contents to Afrihost
4. Clear your browser cache to see changes

## 📁 File Structure After Upload

Your `public_html` should look like:

```
public_html/
├── .htaccess
├── index.html
└── assets/
    ├── index-[hash].css
    └── index-[hash].js
```

## 🚀 Performance Tips

1. **Enable Gzip Compression** in cPanel (usually enabled by default)
2. **Browser Caching**: The `.htaccess` file can include cache headers
3. **CDN**: Consider using Cloudflare (free) for better performance

## ⚠️ No Server Required

This website is:
- ✅ Pure client-side (runs in browser)
- ✅ No PHP, Node.js, or Python needed
- ✅ No database required
- ✅ Works on any static hosting
- ✅ Fast and secure

## 📞 Support

If you have issues with Afrihost hosting:
- Contact Afrihost support
- Ensure you have a hosting package (not just domain registration)
- Verify your hosting supports `.htaccess` files
