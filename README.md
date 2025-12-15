# Hotel App Android

## Description
Mobile application for Radisson Hotel Group built with React Native and Expo.

## Features
- Multi-screen navigation system
- Clean and intuitive UI
- Radisson brand styling
- Cross-platform compatibility

## Installation

### Prerequisites
- Android phone (API level 24+)
- APK file downloaded from EAS Build

### Steps to Install APK

#### Option 1: Using File Manager (Recommended)
1. Download the APK file to your Android phone
2. Open the file manager app
3. Navigate to Downloads folder
4. Tap on the APK file
5. Tap "Install" when prompted
6. Wait for installation to complete
7. Open the app from App Drawer

#### Option 2: Using ADB (Advanced)
If you have Android Studio or ADB installed on your computer:

```bash
adb install hotel-app-android.apk
```

## Build Information
- Built with: Expo + React Native
- Target: Android APK
- Build Tool: EAS Build (Expo)
- Node Version: 20.11.0

## Project Structure
```
hotel-app-android/
├── app/
│   └── index.tsx          # Main app component
├── assets/                # App icons and images
├── app.json              # Expo configuration
├── eas.json              # EAS Build configuration
├── package.json          # Dependencies
└── README.md             # This file
```

## Configuration Files

### app.json
Expo configuration with Android package name: `com.hotelapp.mobile`

### eas.json
EAS Build configuration with production, preview, and development builds.

## Troubleshooting

### Installation fails
- Enable "Unknown Sources" in Android Settings > Security
- Check Android version compatibility (API 24+)
- Ensure sufficient storage space

### App crashes on startup
- Clear app cache: Settings > Apps > Hotel App > Storage > Clear Cache
- Uninstall and reinstall the app

## Support
For issues or questions, contact the development team.

## Version
- Current: 1.0.0
- Last Updated: December 2025
