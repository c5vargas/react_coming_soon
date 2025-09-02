import bg from '../assets/bg.avif'
import {
  LocationIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from '../Icons'

const ParallaxTemplate = ({
  title,
  srcLogo,
  showLogo = true,
  email,
  address,
  phone,
  description,
  themeColor,
  instagramUrl,
  facebookUrl,
  twitterUrl,
}) => (
  <main
    className="min-h-screen w-full bg-cover bg-center relative text-white bg-blend-overlay bg-black/40"
    style={{
      backgroundImage: `url(${bg})`,
    }}
  >
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div>
          {showLogo &&
            (srcLogo ? (
              <img src={srcLogo} alt="Logo" className="h-8" />
            ) : (
              <div className="text-xl font-bold">Logo</div>
            ))}
        </div>
        <div className="flex items-center gap-6">
          {phone && (
            <div className="flex items-center gap-2">
              <span>{phone}</span>
            </div>
          )}
          {email && (
            <div className="flex items-center gap-2">
              <span>|</span>
              <span>{email}</span>
            </div>
          )}
        </div>
      </header>
      {/* Main content */}
      <div className="mt-40 max-w-xl">
        <h1
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{
            color: themeColor === 'default' ? '#ffffff' : themeColor,
          }}
        >
          {title}
        </h1>
        <p className="text-lg mb-12 opacity-90">{description}</p>
        {/* Social links */}
        {(instagramUrl || facebookUrl || twitterUrl) && (
          <div className="mt-20">
            <p className="mb-4">Stay connected</p>
            <div className="flex gap-3">
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  className="bg-white/80 rounded-xl p-2 hover:bg-opacity-90 transition"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-6 h-6 text-gray-800" />
                </a>
              )}
              {twitterUrl && (
                <a
                  href={twitterUrl}
                  className="bg-white/80 rounded-xl p-2 hover:bg-opacity-90 transition"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-6 h-6 text-gray-800" />
                </a>
              )}
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  className="bg-white/80 rounded-xl p-2 hover:bg-opacity-90 transition"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-6 h-6 text-gray-800" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      {/* Footer with address if provided */}
      {address && (
        <footer className="absolute bottom-6 left-4">
          <div className="flex items-center gap-2">
            <LocationIcon className="w-6 h-6 text-white" />
            <span>{address}</span>
          </div>
        </footer>
      )}
    </div>
  </main>
)
export default ParallaxTemplate
