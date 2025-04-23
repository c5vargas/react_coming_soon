import logo from '../assets/logo.png'
import { PhoneIcon, MailIcon, LocationIcon, InstagramIcon, FacebookIcon } from '../Icons'

const MinimalTemplate = ({ 
  title, 
  showLogo, 
  website, 
  email, 
  address, 
  phone, 
  description, 
  themeColor, 
  instagramUrl, 
  facebookUrl 
}) => (
  <main className="min-h-screen flex flex-col">
    <div className="flex-grow flex items-center justify-center p-4">
      <div className="max-w-3xl mx-auto text-center">
        {showLogo === 'true' && <img className="h-32 mx-auto mb-8" src={logo} alt={website} />}
        
        <h1 className="text-5xl font-bold mb-4" style={{color: themeColor}}>
          {title}
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          {description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {email && (
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <MailIcon className="w-8 h-8 mx-auto mb-2" style={{color: themeColor}} />
              <a href={`mailto:${email}`} className="text-gray-700 hover:text-gray-900">{email}</a>
            </div>
          )}
          
          {phone && (
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <PhoneIcon className="w-8 h-8 mx-auto mb-2" style={{color: themeColor}} />
              <a href={`tel:${phone}`} className="text-gray-700 hover:text-gray-900">{phone}</a>
            </div>
          )}
          
          {address && (
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <LocationIcon className="w-8 h-8 mx-auto mb-2" style={{color: themeColor}} />
              <p className="text-gray-700">{address}</p>
            </div>
          )}
        </div>
      </div>
    </div>
    
    <footer className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          {instagramUrl && (
            <a href={instagramUrl} target="_blank" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Instagram</span>
              <InstagramIcon />
            </a>
          )}
          
          {facebookUrl && (
            <a href={facebookUrl} target="_blank" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Facebook</span>
              <FacebookIcon />
            </a>
          )}
        </div>
        
        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} {website}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  </main>
);

export default MinimalTemplate;