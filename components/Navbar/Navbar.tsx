"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { RiMenuLine } from "react-icons/ri"
import { RxCross2 } from "react-icons/rx"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveLink(section.id)
        }
      })

      // Check if the scroll position is greater than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const router = useRouter()

  const handleAccountClick = () => {
    const user = localStorage.getItem("user")
    if (user) {
      router.push("/profile")
    } else {
      router.push("/signin")
    }
  }

  const session = null
  return (
    <>
      <nav
        className={`flexBetween navbar paddings  z-50 items-center  max-xl:hidden ${
          isScrolled ? "bg-[#99cc22] " : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-14">
          <ul className="text-small  gap-14 xl:flex">
            <a
              href="#services"
              className={
                activeLink === "services"
                  ? "border-b-3 border-[#ffffff] font-normal  text-white"
                  : "  text-white transition-all duration-300 ease-in-out hover:text-[#ffffff]"
              }
            >
              SERVICES
            </a>
            <a
              href="#partnership"
              className={
                activeLink === "partnership"
                  ? "border-b-3 border-[#ffffff] font-normal  text-white"
                  : "  text-white transition-all duration-300 ease-in-out hover:text-[#ffffff]"
              }
            >
              PARTNERSHIP & CLIENTS
            </a>
          </ul>
        </div>
        <div className="gap-7">
          <Link href="/">
            <Image src="/greenink/GreenINK_White_Logo.PNG" width={120} height={43} alt="dekalo" />
          </Link>
        </div>
        <div className="flex items-center gap-14">
          <ul className="text-small  gap-14 xl:flex">
            <a
              href="#products"
              className={
                activeLink === "products"
                  ? "border-b-3 border-[#ffffff] font-normal  text-white"
                  : "  text-white transition-all duration-300 ease-in-out hover:text-[#ffffff]"
              }
            >
              PRODUCTS
            </a>
            <a
              href="#contact"
              className={
                activeLink === "contact"
                  ? "border-b-3 border-[#ffffff] font-normal  text-white"
                  : "  text-white transition-all duration-300 ease-in-out hover:text-[#ffffff]"
              }
            >
              CONTACT US
            </a>
          </ul>
        </div>
      </nav>
      <nav className="block  bg-[#99cc33]  px-16 py-4 max-xl:px-3 xl:hidden">
        <div className="flex items-center justify-between">
          <Link href="/" className=" content-center">
            <Image src="/greenink/GreenINK_White_Logo.PNG" width={80} height={80} alt="dekalo" />
          </Link>
          <RiMenuLine className="h-6 w-6 text-white" onClick={toggleNav} style={{ cursor: "pointer" }} />
        </div>

        <div
          ref={navRef}
          className={`fixed left-0 top-0 z-50 h-full bg-[#99cc33] transition-transform  duration-300 max-xl:w-1/2 max-sm:w-2/3 ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 pt-6">
            <Image className="" src="/greenink/GreenINK_White_Logo.PNG" height={80} width={80} alt="" />
            <RxCross2 className="text-white" onClick={toggleNav} style={{ cursor: "pointer" }} />
          </div>
          <div className="mt-4 flex flex-col items-start gap-5 space-y-2 p-4">
            <a
              onClick={toggleNav}
              href="#services"
              className={
                activeLink === "services" ? "border-b-3 border-[#FFFFFF] font-normal text-white" : "  text-white"
              }
            >
              SERVICES
            </a>

            <a
              onClick={toggleNav}
              href="#partnership"
              className={
                activeLink === "partnership" ? "border-b-3  border-[#FFFFFF] font-normal  text-white" : "  text-white"
              }
            >
              PARTNERSHIP & CLIENTS
            </a>
            <Link
              onClick={toggleNav}
              href="#products"
              className={
                activeLink === "products" ? "border-b-3  border-[#FFFFFF] font-normal  text-white" : "  text-white"
              }
            >
              PRODUCTS
            </Link>

            <Link
              onClick={toggleNav}
              href="#contacr"
              className={
                activeLink === "contacr" ? "border-b-3  border-[#FFFFFF] font-normal  text-white" : "e text-white"
              }
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
