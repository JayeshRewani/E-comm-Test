import Logo from '../assets/logo.svg'
import { NavLink, Link} from "react-router-dom"
import { ShoppingCart } from "lucide-react"

function Header() {

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Bag", href: "/bag" },
    { name: "Sneakers", href: "/sneakers" },
    { name: "Belt", href: "/belt" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header className='bg-white shadow-sm sticky top-0 z-50'>
          <div className='max-w-[1500px] mx-auto flex items-center justify-between px-2 py-3 md:py-4'>
              {/* Logo */}
              <Link to='/'>
                <div className='flex items-center space-x-2'>
                  <img src={Logo} alt="E-Comm Logo" />
                </div>
              </Link>

              {/* Nav-Bar */}
              <nav className='hidden md:flex space-x-8 w-full max-w-2xl justify-between'>
                  { 
                    navLinks.map( (link) => (
                        <NavLink to={link.href} key={link.name} className="text-gray-700 hover:text-blue-600 transition font-medium">
                              {link.name}
                        </NavLink>
                    ) )
                  }
              </nav>

              {/* Cart */}
              <div className='hidden md:flex items-center gap-x-3 space-x-2 text-gray-700'>
                <button>
                <ShoppingCart size={20}/>
                </button>
                <span className='flex gap-x-2 items-center text-sm'>
                  <p className='text-[16px] font-medium'>Items</p>
                  <span className='text-gray-400'>$0.00</span>
                </span>
              </div>

          </div>
      </header>
    </>
  )
}

export default Header