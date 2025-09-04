# GitHub Deployment Guide

## Step 1: Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com) and log in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., `portfolio-react` or `vipul-singh-portfolio`)
4. Add a description: "Modern React portfolio with Apple-inspired design"
5. Choose **Public** visibility
6. **DO NOT** initialize with README (we already have one)
7. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will provide you with commands. Use these:

```bash
cd react-portfolio
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with your repository name.

## Step 3: Deploy to GitHub Pages (Optional)

For live deployment, you can use GitHub Pages:

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to your `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add this to `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

4. Deploy:
```bash
npm run deploy
```

## Step 4: Verify Deployment

1. Go to your repository on GitHub
2. Check that all files are uploaded
3. If using GitHub Pages, your site will be available at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Alternative: Netlify Deployment (Recommended)

For better performance and custom domain support:

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Or connect your GitHub repository for automatic deployments

## Repository Structure Ready for GitHub

Your project includes:
- ✅ Complete React portfolio with all components
- ✅ Professional README documentation
- ✅ Build configuration for production
- ✅ Git initialization with initial commit
- ✅ All dependencies and development setup

## Next Steps After Upload

1. Customize the placeholder content with your actual:
   - Project descriptions and images
   - Certification details
   - Contact information
   - Social media links
2. Update the resume PDF file
3. Add your actual GitHub username in social links
4. Consider adding a custom domain if desired

Your portfolio is production-ready and will showcase your skills effectively to potential employers and clients!