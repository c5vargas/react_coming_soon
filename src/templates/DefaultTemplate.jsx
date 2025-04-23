import mockup from '../assets/mockup.png'
import logo from '../assets/logo.png'
import { PhoneIcon, MailIcon, LocationIcon, InstagramIcon, FacebookIcon } from '../Icons'

const DefaultTemplate = ({ 
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
  <main>
    <div className="relative overflow-hidden">
      <div className="bg-white pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
        <div className="mx-auto max-w-5xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                {showLogo === 'true' && <img className='block lg:hidden mx-auto h-[200px]' src={logo} alt={website} />}

                <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block" style={{color: themeColor}}>{ title } </span>
                  <span className="block text-black xl:text-4xl">{ website }</span>
                </h1>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  { description }
                </p>

                <div className="block md:gap-6 md:justify-center md:flex lg:block mt-8 sm:mt-10 md:bg-white">
                  { email &&
                    <div className='mb-6 flex items-center justify-start gap-3 text-start'>
                      <figure className='bg-gray-100 shadow p-2 rounded-full'>
                        <MailIcon className="w-10 h-10" style={{color: themeColor}} />
                      </figure>
                      <article>
                        <p className="text-2xl" style={{color: themeColor}}>Correo electrónico</p>
                        <p className="text-lg">
                          <a className="hover:underline" href={`mailto:${email}`}>{ email }</a>
                        </p>
                      </article>
                    </div>
                  }

                  { phone &&
                    <div className='mb-6 flex items-center justify-start gap-3 text-start'>
                      <figure className='bg-gray-100 shadow p-2 rounded-full'>
                        <PhoneIcon className="w-10 h-10" style={{color: themeColor}} />
                      </figure>
                      <article>
                        <p className="text-2xl" style={{color: themeColor}}>Teléfono</p>
                        <p className="text-lg">
                          <a className="hover:underline" href={`tel:${phone}`}>{ phone }</a>
                        </p>
                      </article>
                    </div>
                  }

                  { address &&
                    <div className='mb-6 flex items-center justify-start gap-3 text-start'>
                      <figure className='bg-gray-100 shadow p-2 rounded-full'>
                        <LocationIcon className="w-10 h-10" style={{color: themeColor}} />
                      </figure>
                      <article>
                        <p className="text-2xl" style={{color: themeColor}}>Dirección</p>
                        <p className="text-lg">
                          { address }
                        </p>
                      </article>
                    </div>
                  }
                  
                </div>
              </div>
            </div>

            <div className="mt-12 hidden lg:block relative">
              {showLogo === 'true' && <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-white bg-opacity-75 p-16" src={logo} alt={website} />}
              <img src={mockup} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex justify-center space-x-6">
        { instagramUrl && 
            <a href={instagramUrl} target="_blank" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <InstagramIcon />
            </a>
        }

        { facebookUrl && 
            <a href={facebookUrl} target="_blank" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <FacebookIcon />
            </a>
        }
        </div>

        <p className="mt-8 text-center text-base text-gray-400">© {new Date().getFullYear()} { website }. Todos los derechos reservados.</p>
      </div>
    </footer>
  </main>
);

export default DefaultTemplate;