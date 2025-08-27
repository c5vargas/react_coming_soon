import TEMPLATES from './templates'

function App() {
  const title = import.meta.env.VITE_APP_TITLE
  const showLogo = import.meta.env.VITE_APP_SHOW_LOGO
  const srcLogo = import.meta.env.VITE_APP_URL_LOGO
  const website = import.meta.env.VITE_APP_WEBSITE
  const email = import.meta.env.VITE_APP_EMAIL
  const address = import.meta.env.VITE_APP_ADDRESS
  const phone = import.meta.env.VITE_APP_PHONE
  const description = import.meta.env.VITE_APP_DESCRIPTION
  const themeColor = import.meta.env.VITE_APP_COLOR
  const instagramUrl = import.meta.env.VITE_APP_SOCIAL_INSTAGRAM
  const facebookUrl = import.meta.env.VITE_APP_SOCIAL_FACEBOOK
  const template = import.meta.env.VITE_APP_TEMPLATE || 'default'

  const templateProps = {
    title,
    showLogo,
    srcLogo,
    website,
    email,
    address,
    phone,
    description,
    themeColor,
    instagramUrl,
    facebookUrl
  };

  if (!themeColor) return null;
  
  const SelectedTemplate = TEMPLATES[template] || TEMPLATES.default;
  
  return <SelectedTemplate {...templateProps} />;
}

export default App
