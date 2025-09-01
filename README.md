# Ubixen IDE - C/C++ Online Editor

A beautiful, real-time C/C++ code editor with Firebase synchronization and online compilation powered by Judge0 CE API.

## 🚀 Features

- **Real-time Syntax Highlighting** - Beautiful VS Code-inspired theme
- **Auto-formatting** - Smart brace completion and indentation
- **Online Compilation** - Execute C/C++ code with Judge0 CE API
- **Firebase Sync** - Auto-save and real-time synchronization
- **Secure API Key Management** - Client-side storage, never exposed
- **Professional UI** - Dark theme, line numbers, status indicators

## 🔧 Setup for GitHub Pages

### Option 1: User-Provided API Keys (Current Implementation)
The IDE prompts users to enter their own Judge0 CE API key, which is stored locally in their browser.

**Deployment Steps:**
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Users will configure their own API keys when using the IDE

**User Setup:**
1. Visit [Judge0 CE on RapidAPI](https://rapidapi.com/judge0-official/api/judge0-ce/)
2. Subscribe (free tier: 50 requests/day)
3. Click the "🔑 API Key" button in the IDE
4. Enter your RapidAPI key
5. Start coding!

### Option 2: GitHub Actions with Secrets (For Private Use)
If you want to embed your own API key for a private/internal deployment:

1. Go to your repository Settings → Secrets and variables → Actions
2. Add a new secret: `JUDGE0_API_KEY` with your RapidAPI key
3. The GitHub Action will automatically inject it during deployment

### Option 3: Serverless Backend (Most Secure)
For production use, deploy the provided serverless function:

**For Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**For Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

Set `JUDGE0_API_KEY` as an environment variable in your hosting platform.

## 🛡️ Security

- **No API Keys in Source Code** - Uses localStorage or server-side environment variables
- **CORS Enabled** - Works from any domain
- **Input Validation** - Sanitizes user input
- **Rate Limiting** - Respects Judge0 API limits

## 📚 Usage

1. **Write Code** - Use the editor with syntax highlighting and auto-completion
2. **Add Input** - Switch to Input tab for programs requiring stdin
3. **Run Code** - Click Run button to compile and execute
4. **View Results** - Check Output/Errors tabs for execution results

## 🔗 Live Demo

Visit the live demo: [https://akhzarfarhan.github.io/Ubixen/IDE.html](https://akhzarfarhan.github.io/Ubixen/IDE.html)

## 📄 License

MIT License - feel free to use for personal and commercial projects.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## ⚡ Technologies Used

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Syntax Highlighting**: Prism.js
- **Compilation**: Judge0 CE API
- **Database**: Firebase Realtime Database
- **Fonts**: JetBrains Mono
- **Hosting**: GitHub Pages

## 🎯 Roadmap

- [ ] Multiple file support
- [ ] Project templates
- [ ] Code sharing via URLs
- [ ] More programming languages
- [ ] Collaborative editing
- [ ] Theme customization