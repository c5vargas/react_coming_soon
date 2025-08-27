# "Coming Soon" Landing Page with React + Vite

## Description
This repository provides a fast template to create a "Coming Soon" landing page using **React** and **Vite**. Perfect for launching your website before its official release, customizable via environment variables.

## Prerequisites
- **Node.js** >= 18  
- **npm** >= 9  

## Quick Installation
```bash
# Clone the repository
git clone <REPOSITORY_URL>
cd <PROJECT_NAME>

# Install dependencies
npm install
```

## Configuration

Set up your landing page by editing the .env file in the project root:

```env
VITE_APP_NAME="Site Name"
VITE_APP_WEBSITE="site.com"
VITE_APP_EMAIL="example@email.com"
VITE_APP_PHONE="+34 666 666 666"
VITE_APP_ADDRESS="Street Dignissim Magna 53, 08273, Spain"
VITE_APP_TITLE="Coming Soon"
VITE_APP_DESCRIPTION="Our website will launch soon. Join the waiting list to test the beta before it goes public."
VITE_APP_SHOW_LOGO=true
VITE_APP_URL_LOGO="/logo.webp"
VITE_APP_SOCIAL_INSTAGRAM="https://instagram.com/example"
VITE_APP_SOCIAL_FACEBOOK="https://facebook.com/example"
VITE_APP_COLOR="rgb(236 72 153)"
VITE_APP_TEMPLATE="modern" # options: default, minimal, modern
```

Upload your logo to the `public` folder if you plan to display it.

## Development

```bash
# Start development server
npm run dev
```
Open your browser at the URL shown in the terminal. Changes are reflected live.

## Production Build
```bash
# Generate a production-ready bundle
npm run build
```
This creates optimized assets in the dist/ folder ready for deployment.

## Project Structure

```pgsql
├─ node_modules/
├─ public/ -> static files and HTML entry point.
│  ├─ index.html
│  └─ logo.webp
├─ src/ -> React source code.
│  ├─ components/
│  ├─ App.js
│  └─ index.js
├─ .gitignore
├─ package.json -> project dependencies and scripts.
├─ README.md
└─ vite.config.js -> Vite configuration.
```

## Using Environment Variables

In App.js, environment variables are used to customize the landing page:

```javascript
const title = import.meta.env.VITE_APP_TITLE;
const showLogo = import.meta.env.VITE_APP_SHOW_LOGO;
const srcLogo = import.meta.env.VITE_APP_URL_LOGO;
const website = import.meta.env.VITE_APP_WEBSITE;
// etc...
```

Select the template and pass the props to the component:

```javascript
const SelectedTemplate = TEMPLATES[template] || TEMPLATES.default;
return <SelectedTemplate {...templateProps} />;
```

## Available Templates
- `default`
- `minimal`
- `modern`

Each template supports full customization with logo, colors, description, and social links.

## Contributing

Contributions are welcome. Open an issue or PR to collaborate.

## License

Open license. Check LICENSE for details.