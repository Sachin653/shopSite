import React from 'react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import Photo from "./components/image/image1.jpg";
import {
  FileText,
  CreditCard,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Globe,
  FileCheck,
  Building,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-indigo-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to Prakash Digital Services
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your One-Stop Solution for All Digital Services
            </p>
            <a
              href="#contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Bill Payments"
              description="Easy payment solutions for electricity, water, gas, and mobile bills"
              Icon={CreditCard}
            />
            <ServiceCard
              title="Job Form Filling"
              description="Professional assistance with job applications and government forms"
              Icon={FileText}
            />
            <ServiceCard
              title="Government Services"
              description="Help with various government schemes and documentation"
              Icon={Building}
            />
            <ServiceCard
              title="Online Applications"
              description="Assistance with passport, PAN card, and other online applications"
              Icon={Globe}
            />
            <ServiceCard
              title="Document Services"
              description="Printing, scanning, and documentation support"
              Icon={FileCheck}
            />
            <ServiceCard
              title="Career Guidance"
              description="Professional guidance for job seekers and students"
              Icon={Briefcase}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            <div className="text-center mb-4">
    <img 
        src={Photo} 
        alt="Prakash Online Center" 
        className="rounded-full w-32 h-32 object-cover mx-auto" 
    />
</div>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
    Welcome to Prakash Online Center Patehara, your one-stop destination for all online services in Madhya Pradesh. We understand the challenges of accessing essential government services, which is why we are dedicated to providing a user-friendly and efficient experience for our customers.
</p>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
    At Prakash Online Center Patehara, we offer a range of services designed to make your life easier, including:
</p>
<ul className="text-xl text-gray-600 max-w-3xl mx-auto list-disc pl-8">
    <li>Aadhaar Card Printing: Get your Aadhaar card printed quickly and securely.</li>
    <li>PAN Card Services: Apply for your Permanent Account Number (PAN) card with ease.</li>
    <li>Job Form Filling: Need help with job applications? Our team is here to assist you in filling out forms accurately.</li>
    <li>Government Services Information: Stay informed with detailed information about various government services available to you.</li>
</ul>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
    Our mission is to empower our community by providing easy access to important services and information. We pride ourselves on our friendly staff, reliable service, and a welcoming atmosphere where you can feel at home while taking care of your online needs.
</p>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
    Thank you for choosing Prakash Online Center Patehara. We look forward to serving you!
</p>


          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>+91 7697543507</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>newprakashpatel169@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>
                    village & post patehara block hanumana jila mauganj 486331
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Prakash Digital Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
