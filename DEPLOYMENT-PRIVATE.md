# GitHub Secrets Setup Instructions

## Adding Your Judge0 CE API Key as a GitHub Secret

Follow these steps to securely add your API key:

### 1. Get Your Judge0 CE API Key
1. Go to [Judge0 CE on RapidAPI](https://rapidapi.com/judge0-official/api/judge0-ce/)
2. Subscribe to the API (free tier available)
3. Copy your **X-RapidAPI-Key** from the dashboard

### 2. Add Secret to GitHub Repository
1. Go to your GitHub repository: `https://github.com/AkhzarFarhan/Ubixen`
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Set:
   - **Name**: `JUDGE0_API_KEY`
   - **Value**: Your RapidAPI key (paste the key here)
6. Click **Add secret**

### 3. Deploy Your IDE
Once the secret is added:
1. Push your code to the `main` or `dev` branch
2. GitHub Actions will automatically:
   - Embed your API key in the deployment version
   - Deploy to GitHub Pages
   - Your IDE will be available at: `https://akhzarfarhan.github.io/Ubixen/`

### 4. Security Benefits
✅ **API key is never exposed** in your public repository  
✅ **Automatic deployment** on every push  
✅ **No user setup required** - API key is embedded  
✅ **Private use** - perfect for personal projects  

### 5. Important Notes
- **Repository Privacy**: Consider making your repo private if you're embedding API keys
- **API Usage**: All visitors will use your API key and quota
- **Alternative**: For public projects, use the localStorage version instead

## Manual Deployment (Alternative)
If you prefer not to use GitHub Actions:

1. **Local Build**:
   ```bash
   # Clone and navigate to your project
   cd Ubixen
   
   # Create deployment version with embedded API key
   cp IDE.html index.html
   sed -i "s/localStorage.getItem('judge0-api-key') || null/'YOUR_ACTUAL_API_KEY'/" index.html
   
   # Commit and push
   git add index.html
   git commit -m "Add deployment version with embedded API key"
   git push
   ```

2. **Enable GitHub Pages**:
   - Repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main / root
   - Save

Your IDE will be live at: `https://akhzarfarhan.github.io/Ubixen/`
