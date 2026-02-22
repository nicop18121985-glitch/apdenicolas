# Nexus One - Health Tracker

Modern and premium health tracking application with a sleek glassmorphism UI. Built with React, Vite, and Lucide Icons.

## 🚀 Features

- **Dynamic Dashboard**: Monitor your health biometric and activity trends in real-time.
- **Visual Analytics**: Interactive charts powered by Recharts.
- **Cross-Platform Support**: Includes both a web/desktop experience and a mobile companion.
- **Premium Design**: Dark mode with smooth transitions and glassmorphism effects.

## 📁 Project Structure

```text
├── mobile/             # Expo React Native App
├── shared/             # Shared logic, types, and configurations
├── src/                # Web App Source (React + Vite)
├── public/             # Static assets
├── index.html          # Web App Entry point
├── netlify.toml        # Netlify production configuration
└── PC.bat              # Quick start for Electron (Desktop)
```

## 🛠️ Setup & Installation

### Web App
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`

### Desktop (Electron)
1. Run the `PC.bat` file in the root directory.

### Mobile (Expo)
1. Navigate to `mobile/`: `cd mobile`
2. Install dependencies: `npm install`
3. Start Expo: `npx expo start`

## 🌐 Deployment

This project is configured for deployment on **Netlify**.
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

## 📄 License

Individual/Private project.
