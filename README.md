# ChatGPT for LeetCode

A browser extension that solves the leetcode problem automatically from the problem statement.

![Screenshot](screenshot.jpeg?raw=true)

## Installation

### Install to Chrome/Edge

#### Install from Chrome Web Store (Preferred)

<coming soon>
#### Local Install

1. Download `chrome.zip` from [Releases](https://github.com/xer0k00l/chat-gpt-leetcode-extension/releases)
2. Unzip the file
3. In Chrome/Edge go to the extensions page (`chrome://extensions` or `edge://extensions`).
4. Enable Developer Mode.
5. Drag the unzipped folder anywhere on the page to import it (do not delete the folder afterwards).

### Install to Firefox

#### Install from Mozilla Add-on Store (Preferred)

<https://addons.mozilla.org/en-US/firefox/addon/chatgpt-for-leetcode/> <coming soon>

#### Local Install

1. Download `firefox.zip` from [Releases](https://github.com/xer0k00l/chat-gpt-leetcode-extension/releases)
2. Unzip the file
3. Go to `about:debugging`, click "This Firefox" on the sidebar
4. Click "Load Temporary Add-on" button, then select any file in the unzipped folder

## Build from source

1. Clone the repo
2. Install dependencies with `npm`
3. Run `./build.sh` for Chrome, `./build.sh firefox` for Firefox
4. Load the `build` directory to your browser

## Credit

This project is inspired by [wong2/chat-gpt-google-extension](https://github.com/wong2/chat-gpt-google-extension)
