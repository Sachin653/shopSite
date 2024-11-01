import { Menu, X, Coffee, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Coffee className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Prakash Digital Services</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#services" className="hover:bg-indigo-500 px-3 py-2 rounded-md">Services</a>
              <a href="#about" className="hover:bg-indigo-500 px-3 py-2 rounded-md">About</a>
              <a href="#contact" className="hover:bg-indigo-500 px-3 py-2 rounded-md">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block hover:bg-indigo-500 px-3 py-2 rounded-md">Services</a>
            <a href="#about" className="block hover:bg-indigo-500 px-3 py-2 rounded-md">About</a>
            <a href="#contact" className="block hover:bg-indigo-500 px-3 py-2 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}