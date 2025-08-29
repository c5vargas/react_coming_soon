import { InstagramIcon, FacebookIcon, FireIcon, RocketIcon, ArrowRightIcon, FileUpload, MailIcon, TwitterIcon } from '../Icons'


const BeautyTemplate = ({
  title,
	siteName,
  srcLogo,
  showLogo = false,
  email,
	website,
  description,
  themeColor,
  instagramUrl,
	twitterUrl,
  facebookUrl,
}) => (
  <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
    <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden relative">
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[98%] h-4 bg-gray-200 rounded-b-3xl z-0"></div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[96%] h-4 bg-gray-300 rounded-b-3xl z-0"></div>
      <div
        className="relative z-10 flex flex-col min-h-[600px]"
        style={{
          background: `linear-gradient(to right, #f5f5f0 50%, ${themeColor} 50%)`,
        }}
      >
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
          {showLogo && srcLogo && (
            <img src={srcLogo} alt="Logo" className="h-16 mb-8" />
          )}
          <p className="uppercase tracking-widest text-sm font-medium mb-6">
            {website}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-2 flex items-center">
            {title} <ArrowRightIcon className="ml-2 h-8 w-8" />
          </h1>
          <div className="text-4xl md:text-5xl font-bold mb-8 flex items-center">
            <RocketIcon className="mr-2 h-8 w-8" /> {siteName}{' '}
            <FireIcon className="ml-2 h-8 w-8" />
          </div>
          <p className="max-w-md mb-8 text-gray-700">{description}</p>
          <a href={`mailto:${email}`} className="bg-black text-white px-6 py-3 rounded-full flex items-center mb-4 hover:bg-gray-800 transition-colors">
            <MailIcon className="mr-2 h-4 w-4" /> Notify me
          </a>
        </div>
        {/* Footer */}
        <div className="px-6 py-4 flex justify-between items-center">
          <div>
            {email && (
              <a href={`mailto:${email}`} className="text-sm hover:underline">
                {email}
              </a>
            )}
          </div>
          <div className="flex space-x-4">
            {facebookUrl && (
              <a
                href={facebookUrl}
                className="hover:opacity-70 transition-opacity"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            )}
            {instagramUrl && (
              <a
                href={instagramUrl}
                className="hover:opacity-70 transition-opacity"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            )}
						{twitterUrl && (
              <a
                href={twitterUrl}
                className="hover:opacity-70 transition-opacity"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default BeautyTemplate
