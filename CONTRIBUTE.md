# Contributing to Founder Mode Chrome Extension

## Adding New Platforms
1. **Create a New Script**: Create a new JavaScript file under `socials/` named after the new platform.
2. **Develop Feed Handling Logic**: Write functions to hide the platform's main feed and display the "Founder Mode" message.
3. **Update `content.js`**: Import and integrate the new script into `content.js` to handle the new platform based on the URL.

## AI Guidelines
- Use clear and concise JavaScript.
- Comment your code adequately for clarity.
- Ensure compatibility with manifest version 3 of Chrome Extensions.

## Testing
Test your changes thoroughly before making a pull request. Ensure no other functionalities are broken.

Thank you for contributing!
