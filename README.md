# 🌍 HeadlineHub

A modern news aggregation app built with Next.js, featuring real-time news from 100+ sources worldwide.

**Created by Anurag**

## ✨ Features

- 📰 **Real-time News** - Latest headlines from NewsAPI
- 🔐 **Authentication** - Sign in with Google/GitHub
- ❤️ **Favorites** - Save articles (requires login)
- 📱 **Responsive Design** - Works on all devices
- 🌍 **Multiple Categories** - World, Business, Tech, Sports, etc.

## 🚀 Live Demo

[View Live App](your-deployed-url-here)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Prisma
- **Authentication**: NextAuth.js
- **News API**: NewsAPI.org
- **Deployment**: Vercel

## 📋 Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/Algoraver22/HeadlineHub.git
cd HeadlineHub
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

### 3. Get API Keys

#### NewsAPI (Required)
1. Sign up at [NewsAPI.org](https://newsapi.org/)
2. Copy your API key to `NEXT_PUBLIC_NEWS_APIKEY`

#### MongoDB (Required)
1. Create account at [MongoDB Atlas](https://mongodb.com/atlas)
2. Create a free cluster
3. Copy connection string to `DATABASE_URL`

#### Google OAuth (Optional)
1. Go to [Google Console](https://console.developers.google.com/)
2. Create project and OAuth credentials
3. Add `http://localhost:3000/api/auth/callback/google` to redirect URIs

#### GitHub OAuth (Optional)
1. Go to [GitHub Settings](https://github.com/settings/developers)
2. Create new OAuth App
3. Add `http://localhost:3000/api/auth/callback/github` as callback URL

### 4. Initialize Database
```bash
npx prisma generate
npx prisma db push
```

### 5. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` 🎉

## 📁 Project Structure

```
HeadlineHub/
├── app/                 # Next.js App Router
├── components/          # React Components
├── lib/                # Database & Utils
├── prisma/             # Database Schema
├── public/             # Static Assets
└── styles/             # Global Styles
```

## 🌟 Features Overview

- **News Categories**: World, Business, Technology, Sports, etc.
- **User Authentication**: Secure login with OAuth
- **Favorites System**: Save articles to read later
- **Responsive Design**: Mobile-first approach
- **Real-time Data**: Fresh news every few minutes

## 🚀 Deployment

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com/)
3. Add environment variables in Vercel dashboard
4. Update OAuth redirect URLs to production domain

## 📝 License

MIT License - feel free to use this project!

## 👨‍💻 Author

**Anurag** - [GitHub](https://github.com/Algoraver22)

---

⭐ Star this repo if you found it helpful!