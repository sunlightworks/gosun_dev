# gosun_dev
Built for GoSun (gosun.co). Made with ♥ by Latimer Design. 

# 🤖 Development Flow

    Two folders exist: /app and /ThemeKit.
    /app contains sass components that compile into main.css, which is imported to /ThemeKit/assets.
    /ThemeKit contains everything else (.js, .liquid, .json).

 $theme watch
Watch local directory for changes and upload them to Shopify.

 $theme deploy --env=production
Deploy to production environment (live site)
