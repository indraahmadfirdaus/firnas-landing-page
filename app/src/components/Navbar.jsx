import React from 'react'
import { Navbar, NavbarCollapse, NavbarToggle, NavbarLink, NavbarBrand } from "flowbite-react";
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/LOGOTYPE.svg'

const NavbarComponent = () => {
  return (
    // absolute / fixed
    <Navbar className='absolute w-full bg-white sm:bg-transparent' rounded>
      <NavbarBrand as={Link} href="/" className='text-2xl font-bold w-[187px] px-2 md:px-0 flex items-center'>
        <Image src={Logo}/>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className='grow'>
        <NavbarLink href="/" className='md:hidden'>Home</NavbarLink>
        <NavbarLink href="/" className='md:hidden'>About</NavbarLink>
        <NavbarLink href="/" className='md:hidden'>Pricing</NavbarLink>
        <NavbarLink href="/" className='md:hidden'>Contact</NavbarLink>
        {/* <NavbarLink href="/" className='md:hidden text-primary'>Login</NavbarLink> */}
        <div className='hidden md:flex items-center justify-between grow' id="navbar-default">
          <div className='flex items-center gap-[21px] md:flex-row flex-col'>
            <NavbarLink href="/" className='text-sm font-bold text-secondary'>Home</NavbarLink>
            <NavbarLink href="/" className='text-sm font-bold text-secondary'>About</NavbarLink>
            <NavbarLink href="/" className='text-sm font-bold text-secondary'>Pricing</NavbarLink>
            <NavbarLink href="/" className='text-sm font-bold text-secondary'>Contact</NavbarLink>
          </div>
          <div className='flex items-center w-[300px] gap-[45px]'>
            {/* <NavbarLink href="/" className='text-sm font-bold text-primary'>Login</NavbarLink> */}
            <button className='flex items-center bg-primary hover:bg-primaryhover gap-[15px] px-[25px] py-[15px] rounded'>
              <p className='text-sm font-bold text-white'>JOIN US</p>
              <Image src="/icons/arrow-right.svg"
                width="12"
                height="10"
                className="h-auto w-auto"
                alt="arrow-right" />
            </button>
          </div>
        </div>
      </NavbarCollapse>
    </Navbar >
  )
}

export default NavbarComponent