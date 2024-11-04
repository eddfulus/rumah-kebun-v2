import Image from 'next/image'
import { IoBedOutline, IoWaterOutline } from "react-icons/io5"
import { LuBath } from "react-icons/lu"
import { BiWifi } from "react-icons/bi"
import { PiTelevisionSimpleBold } from "react-icons/pi"
import { TbAirConditioning } from "react-icons/tb"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section 1: Description */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-4 md:px-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
            Rumah Kebun
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Nikmati masa berkualiti bersama keluarga tercinta di homestay kami yang selesa dan luas, sesuai untuk perhimpunan keluarga dan percutian bersama yang tersayang. Terletak di lokasi yang tenang, homestay ini menyediakan ruang tamu yang luas, bilik tidur yang selesa, serta kemudahan dapur lengkap untuk menyediakan hidangan bersama keluarga. Homestay ini adalah tempat yang sempurna untuk mencipta kenangan indah bersama orang tersayang. Nikmati pengalaman berkumpul bersama dan suasana tenang yang pasti membuatkan anda berasa seperti di rumah sendiri.


          </p>
        </div>
      </section>

          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/front.jpg"
              alt="Garden View"
              fill
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300"
            />
          
          </div>

      
      {/* Section 2: Gallery */}
      <section id="gallery" className="min-h-screen bg-white px-4 md:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/dapur.jpg"
              alt="Garden View"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/living.jpg"
              alt="Interior View"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/bedroom.jpg"
              alt="Outdoor Space"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Info */}
      <section id="info" className="min-h-screen bg-green-50 px-4 md:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Amenities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <IoBedOutline className="text-4xl text-green-600 mb-2" />
            <span className="text-gray-700">3 Bedrooms</span>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <LuBath className="text-4xl text-green-600 mb-2" />
            <span className="text-gray-700">4 Bathrooms</span>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <BiWifi className="text-4xl text-green-600 mb-2" />
            <span className="text-gray-700">Free WiFi</span>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <IoWaterOutline className="text-4xl text-green-600 mb-2" />
            <span className="text-gray-700">Water Filter</span>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <PiTelevisionSimpleBold className="text-4xl text-green-600 mb-2" />
            <span className="text-gray-700">Smart TV</span>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <TbAirConditioning className="text-4xl text-green-600 mb-2" />
            <span className="text-gray-700">Air Conditioning</span>
          </div>
        </div>
        
      </section>
      <section id="booking" className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white px-4 md:px-8">        
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Booking
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
          Untuk tempahan sila hubungi:019-2254456
        </p>
      </section>
    </main>
  )
}

import { FaFacebookF } from "react-icons/fa";

// Add this after the last section, before closing the main tag
<footer className="bg-green-800 text-white py-8">
  <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
    <a 
      href="https://www.facebook.com/homestayrumahkebun/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-green-300 transition-colors"
    >
      <FaFacebookF className="text-2xl" />
    </a>
    <p className="mt-4 text-sm">© 2024 Rumah Kebun. All rights reserved.</p>
  </div>
</footer>
