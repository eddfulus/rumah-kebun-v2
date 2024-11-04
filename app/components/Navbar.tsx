  'use client'

  import Link from 'next/link'
  import { usePathname } from 'next/navigation'

  const Navbar = () => {
    const pathname = usePathname()
  
    return (
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg z-50">
        <ul className="flex gap-8">
          <li>
            <Link 
              href="/"
              className={`${pathname === '/' ? 'text-green-600 font-medium' : 'text-gray-600'} hover:text-green-500 transition-colors`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/#gallery"
              className={`text-gray-600 hover:text-green-500 transition-colors`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link 
              href="/#info"
              className={`text-gray-600 hover:text-green-500 transition-colors`}
            >
              Info
            </Link>
          </li>
          <li>
            <Link 
              href="/#booking"
              className={`text-gray-600 hover:text-green-500 transition-colors`}
            >
              Booking
            </Link>
          </li>
        </ul>
      </nav>
    )
  }

  export default Navbar
