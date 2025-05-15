"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineLinkedin } from "react-icons/ai"
import { TfiEmail, TfiMobile } from "react-icons/tfi"
import { CiGlobe } from "react-icons/ci"

const MainFooter = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ text: "", type: "" })

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setMessage({ text: "Please enter your email", type: "error" })
      return
    }

    setLoading(true)
    setMessage({ text: "", type: "" })

    try {
      const response = await fetch("https://api.smarthavensystems.com/custom-user/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ text: "Subscription successful! Thank you.", type: "success" })
        setEmail("")
      } else {
        setMessage({ text: "Subscription failed. Please try again.", type: "error" })
      }
    } catch (error) {
      setMessage({ text: "An error occurred. Please try again later.", type: "error" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section id="contact" className="paddings w-full  bg-[#666666]  max-sm:px-3 ">
        <div className="w-full  pt-8">
          <div className="grid grid-cols-4 justify-center gap-5 max-xl:grid-cols-2  max-sm:grid-cols-1">
            <div className="flex flex-col gap-6 max-sm:mb-7">
              <Link href="/">
                <Image src="/greenink/GreenINK_White_Logo.PNG" width={120} height={43} alt="dekalo" />
              </Link>
              <p className="text-white">Contributing to the evolution of technology and ways of doing business</p>
              <div className="flex items-center gap-4 text-white">
                <FaXTwitter />
                <FaInstagram />
                <AiOutlineLinkedin />
              </div>
            </div>
            <div className="flex flex-col gap-4 max-sm:mb-7">
              <p className="font-bold text-[#FFFFFF] opacity-80">Resources</p>
              <p className="text-sm text-[#FFFFFF] underline transition-all duration-300 ease-in-out hover:text-[#99cc33]">
                Help
              </p>
              <Link
                href="product-details"
                className="text-sm text-[#FFFFFF] underline transition-all duration-300 ease-in-out hover:text-[#99cc33]"
              >
                Events
              </Link>
              <Link
                href="how-preorder-works"
                className="text-sm text-[#FFFFFF] underline transition-all duration-300 ease-in-out hover:text-[#99cc33]"
              >
                Support
              </Link>
              <Link
                href="faqs"
                className="text-sm text-[#FFFFFF] underline transition-all duration-300 ease-in-out hover:text-[#99cc33]"
              >
                Services
              </Link>
            </div>
            <div className="flex flex-col gap-4 max-sm:mb-7">
              <p className="font-bold text-[#FFFFFF] opacity-80">Company</p>
              <Link
                href="/about-us"
                className="text-sm text-[#FFFFFF] underline transition-all duration-300 ease-in-out hover:text-[#99cc33]"
              >
                About Us
              </Link>
              <Link
                href="/comparison"
                className="text-sm text-[#FFFFFF] underline transition-all duration-300 ease-in-out hover:text-[#99cc33]"
              >
                Careers
              </Link>
              <Link
                href="/warranty-policy"
                className="text-sm text-[#FFFFFF] underline transition-all duration-300 ease-in-out hover:text-[#99cc33]"
              >
                Products
              </Link>
              <Link
                href="/installation-policy"
                className="text-sm text-[#FFFFFF] underline transition-all duration-300 ease-in-out hover:text-[#99cc33]"
              >
                Partners
              </Link>
            </div>

            <div className="flex flex-col gap-4 text-[#FFFFFF] max-sm:mb-7">
              <p className="font-bold text-[#FFFFFF] opacity-80">Contact Us</p>
              <div className="flex gap-2 ">
                <TfiMobile />
                <p className="text-sm underline transition-all duration-300 ease-in-out hover:text-[#99cc33]">
                  +234 813 675b2287
                </p>
              </div>
              <div className="flex gap-2">
                <TfiEmail />
                <p className="text-sm underline transition-all duration-300 ease-in-out hover:text-[#99cc33]">
                  hello@greeninkltd.com
                </p>
              </div>
              <div className="flex gap-2">
                <TfiEmail />
                <p className="text-sm underline transition-all duration-300 ease-in-out hover:text-[#99cc33]">
                  support@greeninkltd.com
                </p>
              </div>
              <div className="flex gap-2 ">
                <CiGlobe />
                <p className="text-sm underline transition-all duration-300 ease-in-out hover:text-[#99cc33]">
                  www.greeninkltd.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainFooter
