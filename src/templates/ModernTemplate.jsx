import { PhoneIcon, MailIcon, LocationIcon, InstagramIcon, FacebookIcon } from '../Icons'

const ModernTemplate = ({ 
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
}) => (
  <main className="min-h-screen flex flex-col bg-linear-to-br from-gray-50 to-gray-100">
    <div className="grow flex items-center justify-center p-6">
      <div className="max-w-5xl w-full mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 md:p-12">
            {showLogo === 'true' && <img className="h-16 mb-8" src={srcLogo} alt={website} />}
            
            <h1 className="text-4xl font-extrabold mb-2" style={{color: themeColor}}>
              {title}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              {description}
            </p>
            
            <div className="space-y-4 mb-8">
              {email && (
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{backgroundColor: `${themeColor}20`}}>
                    <MailIcon className="w-5 h-5" style={{color: themeColor}} />
                  </div>
                  <a href={`mailto:${email}`} className="text-gray-700 hover:underline">{email}</a>
                </div>
              )}
              
              {phone && (
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{backgroundColor: `${themeColor}20`}}>
                    <PhoneIcon className="w-5 h-5" style={{color: themeColor}} />
                  </div>
                  <a href={`tel:${phone}`} className="text-gray-700 hover:underline">{phone}</a>
                </div>
              )}
              
              {address && (
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{backgroundColor: `${themeColor}20`}}>
                    <LocationIcon className="w-5 h-5" style={{color: themeColor}} />
                  </div>
                  <p className="text-gray-700">{address}</p>
                </div>
              )}
            </div>
            
            <div className="flex space-x-4">
              {instagramUrl && (
                <a href={instagramUrl} target="_blank" className="text-gray-400 hover:text-gray-600">
                  <InstagramIcon className="w-6 h-6" />
                </a>
              )}
              
              {facebookUrl && (
                <a href={facebookUrl} target="_blank" className="text-gray-400 hover:text-gray-600">
                  <FacebookIcon className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="h-64 md:h-full" style={{backgroundColor: themeColor}}>
              {showLogo === 'true' && (
                <img 
                  src={srcLogo} 
                  alt={website} 
                  className="absolute inset-0 w-full h-full object-contain p-12 bg-white bg-opacity-10"
                />
              )}
              {!showLogo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-5xl font-bold text-white">{website}</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <footer className="py-6">
      <p className="text-center text-gray-500">
        © {new Date().getFullYear()} {website}. Todos los derechos reservados.
      </p>
    </footer>
  </main>
);

export default ModernTemplate;