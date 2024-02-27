# Blog App for Android and iOS

## 📝 Description
A simple blog app for Android and iOS built with React Native. This app allows users to create, edit, and delete blog posts with the help of a JSON server.

## 🌃 Screenshots
<img src="https://i.imgur.com/YY5cwNt.png" alt="Home Screen Android" width="300">
<img src="https://i.imgur.com/hj60Y6J.png" alt="Create/Edit Screen Android" width="300">
<img src="https://i.imgur.com/2OUjx3a.png" alt="Blog Screen Android" width="300">

## 📚 Features
- Create, edit, and delete blog posts
- JSON server integration for data management

## 📝 How to Run
1. Install dependencies:
    ```bash
    npm ci
    ```

2. Install JSON server:
    ```bash
    cd jsonserver
    npm install json-server
    ```

3. Run JSON server:
    ```bash
    npm run db
    ```

4. Host JSON server with ngrok:
   - Install ngrok from https://ngrok.com
   - Host your JSON server on port 3000 by default:
     ```bash
     ngrok http 3000
     ```
   - Alternatively, modify the `package.json` in the `jsonserver` directory and host your own server.

5. Modify the URL of `BlogApp/src/api/jsonServer.js` to the URL of your hosted server.

6. Run the app:
    ```bash
    npm start
    ```

## 🛠️ Dependencies and Tools
- [npm](https://www.npmjs.com): Package manager for installing dependencies.
- [json-server](https://github.com/typicode/json-server): Fake REST API for managing blog post data.
- [ngrok](https://ngrok.com): Secure tunneling tool for exposing local servers to the internet.

###### GNU Affero General Public License v3.0
![AGPLv3 Logo](https://www.gnu.org/graphics/agplv3-155x51.png)
