import Logo from '../assets/logo.svg'
import Paypal from '../assets/Paypal.png'
import M from '../assets/m.png'
import V from '../assets/v.png'
import W from '../assets/w.png'
import {Link} from 'react-router-dom'
import { Facebook, Twitter} from 'lucide-react'

function Footer() {
  return (
    <footer className='bg-[#BCDDFE] text-gray-700'>
        <div className='max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10'>

            {/* brand info */}
            <div className='mr-5'>
                <div className='flex items-center space-x-2 mb-4'>
                    <img src={Logo} alt="E-Comm Logo" />
                </div>
                <p className='text-sm text-gray-500 mb-4'> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ducimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem voluptatum ratione recusandae alias sapiente!
                </p>
            </div>
            
            {/* Follow us */}
            <div>
                <h3 className='font-medium text-gray-900 mb-4'>Follow us</h3>
                <span className='text-sm text-gray-500 mb-4'>Since the 1500s, when an unknown <p> printer took a galley of type</p> and scrambled.</span>
                <ul className='space-y-1 gap-x-10 flex items-center '>
                    <li><Link><Facebook size={15} className='hover:text-blue-600'/></Link></li>
                    <li><Link><Twitter size={15} className='hover:text-blue-600'/></Link></li>
                </ul>
            </div>

            {/* contact us */}
            <div>
                <h3 className='font-medium text-gray-900 mb-4'>Contact us</h3>
                <span className='text-sm text-gray-500'>E-Comm , 4578 <p>Marmora Road,</p> Glasgow D04 89GR</span>
            </div> 

        </div>

        

        <div className='max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>

            {/* Information */}
            <div>
                <h3 className="font-medium text-gray-900 mb-4">Information</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
                    <li><Link to="/info" className="hover:text-blue-600">Information</Link></li>
                    <li><Link to="/policy" className="hover:text-blue-600">Privacy Policy</Link></li>
                    <li><Link to="/terms" className="hover:text-blue-600">Terms & Conditions</Link></li>
                </ul>
            </div>

            {/* Service's */}
            <div>
                <h3 className="font-medium text-gray-900 mb-4">Service</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link to="/support" className="hover:text-blue-600">Support</Link></li>
                    <li><Link to="/faq" className="hover:text-blue-600">FAQ</Link></li>
                    <li><Link to="/warranty" className="hover:text-blue-600">Warranty</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
                </ul>
            </div>

            {/* Account */}
            <div>
                <h3 className="font-medium text-gray-900 mb-4">My Account</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
                    <li><Link to="/cart" className="hover:text-blue-600">My Cart</Link></li>
                    <li><Link to="/wishlist" className="hover:text-blue-600">Wishlist</Link></li>
                    <li><Link to="/orders" className="hover:text-blue-600">Order History</Link></li>
                </ul>
            </div>

            {/* offer */}
             <div>
                <h3 className="font-medium text-gray-900 mb-4">Our Offer's</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
                    <li><Link to="/cart" className="hover:text-blue-600">My Cart</Link></li>
                    <li><Link to="/wishlist" className="hover:text-blue-600">Wishlist</Link></li>
                    <li><Link to="/orders" className="hover:text-blue-600">Order History</Link></li>
                </ul>
            </div>

            <div className='border-t border-gray-100 col-span-full w-full'></div>

        </div>

        <div className='max-w-7xl mx-auto px-6 pb-2 md:flex justify-between items-center gap-10'>
            <p className='text-sm text-gray-500'>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            <div className='flex items-center justify-between gap-x-5'>
                <img src={Paypal} alt="paypal" className='w-10 ' />
                <img src={V} alt="paypal" className='w-10 ' />
                <img src={W} alt="paypal" className='w-10 ' />
                <img src={M} alt="paypal" className='w-10 ' />
            </div>
        </div>


    </footer>
  )
}

export default Footer