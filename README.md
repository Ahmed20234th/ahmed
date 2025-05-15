# Product List & Camera App

A React Native application that displays a list of products fetched from an API and allows users to:
- View detailed information about products.
- Open the device camera and capture pictures.

## Features
- 📦 Product List screen fetching data from Fake Store API.
- 🛒 Product Detail screen displaying detailed product info.
- 📷 Camera screen using `react-native-camera` to take and display photos.
- 📲 Navigation between screens using `React Navigation`.

## Screens
- **Product List Screen**: List of products with images and prices.
- **Product Detail Screen**: Detailed view of a selected product.
- **Camera Screen**: Use camera to capture images and preview them.

## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Ahmed20234th/ahmed
    cd your-repo
    ```

2. **Install dependencies:**
    ```bash
    npm install
    
    ```

3. **Install navigation dependencies:**
    ```bash
    npm install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
    ```

4. **Install camera dependency:**
    ```bash
    npm install react-native-camera
    ```

5. **Link native dependencies (if required for older RN versions):**
    ```bash
    npx react-native link react-native-camera
    ```

6. **Run the app:**
    ```bash
    npx react-native run-android
    # or
    npx react-native run-ios
    ```

## Permissions

Ensure to add the necessary camera permissions:

### Android:
In `android/app/src/main/AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.CAMERA" />
