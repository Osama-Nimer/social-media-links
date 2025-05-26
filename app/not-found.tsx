/* eslint-disable @next/next/no-html-link-for-pages */
export default function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary-green mb-4">404</h2>
          <p className="text-xl mb-4">Page Not Found</p>
          <a href="/" className="btn-primary">
            Return Home
          </a>
        </div>
      </div>
    )
  }