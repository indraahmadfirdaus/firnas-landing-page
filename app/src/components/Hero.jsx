import React from 'react'
import heroImg from '../assets/hero-img.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className="hero min-h-[80vh] bg-base-200">

          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-wide">
              Bangun{" "}
              <span class="inline-block mt-0 rounded-lg font-medium text-blue-800 bg-blue-100 p-1 relative">Keterampilan Digital</span>
              <br />
              dan Raih Masa Depan Gemilang.
            </h1>
            <p className="py-4 text-center">Belajar koding menjadi lebih mudah bersama{" "}
            <span className='inline-block mt-0 rounded-lg font-medium text-blue-800 bg-blue-100 p-1 relative'>
            Firnas Tecnology School.
            </span>
            </p>

              <div className="flex gap-4 mt-4 justify-center">
              <button className="btn btn-primary text-white lg:btn-wide ">
                    Download Silabus
                </button>
                <button className="btn btn-outline btn-default text-white lg:btn-wide">
                    Hubungi Kami
                </button>
              </div>

          </div>
      </div>
    </>
  )
}

export default Hero