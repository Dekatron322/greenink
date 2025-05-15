"use client"
import Footer from "components/Footer/Footer"

import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import { useRouter } from "next/navigation"

export default function Web() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = ["/Oak_00001.png", "/Mahogany_00000.png", "/Steel_00001.png", "/Glass_00001.png"] // Array of image paths

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const router = useRouter()

  const closeModal = () => setIsModalOpen(false)

  const handlePreOrderClick = () => {
    const user = localStorage.getItem("user")
    if (user) {
      router.push("/preorder")
    } else {
      router.push("/signin")
    }
  }

  const [openIndex, setOpenIndex] = useState<number>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index) // Close if the same index is clicked
  }

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const openVideoModal = () => {
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleWatchVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.muted = false
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
      setHasInteracted(true)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!hasInteracted) return

      if (videoRef.current) {
        const videoElement = videoRef.current
        const videoRect = videoElement.getBoundingClientRect()
        const isVideoVisible =
          videoRect.top >= -videoRect.height * 0.5 && videoRect.bottom <= window.innerHeight + videoRect.height * 0.5

        if (!isVideoVisible && isPlaying) {
          videoElement.pause()
          setIsPlaying(false)
        } else if (isVideoVisible && !isPlaying && hasInteracted) {
          videoElement.muted = false
          videoElement
            .play()
            .then(() => setIsPlaying(true))
            .catch((error) => console.error("Video play failed:", error))
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isPlaying, hasInteracted])

  return (
    <section className="bg-black">
      <Navbar />
      <section
        id="about"
        className="about-section relative grid w-full items-center justify-center py-32 lg:h-auto"
        style={{
          backgroundImage: "url('/greenink/GI_web_banner (1).png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        {/* Gradient overlay for better contrast */}

        {/* Content */}
        <motion.div
          className="paddings relative z-10 pb-10 max-sm:px-3" // Add z-10 to ensure content is above the video and overlay
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full w-full items-center max-xl:mt-2 max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0 lg:items-center">
            <div className="flex w-full flex-col items-center justify-center">
              <p className="text-center  text-5xl text-[#FFFFFF] max-xl:text-center max-xl:text-3xl max-lg:mt-5 max-lg:text-4xl">
                Contribution to the Evolution of <br className="max-sm:hidden" /> technology and ways of doing business
              </p>

              <p className="mt-4 text-center text-lg leading-7 text-[#ffffffcc] max-xl:text-sm xl:max-w-4xl">
                Green Ink proviides holistic business solutions with the aim of upscaling small and medium sized
                businesses to operationg at full capacity and maximizing value propositions
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="services" className="paddings  w-full bg-[#ffffff] max-sm:px-3 ">
        <div className="  w-full justify-between    xl:py-10">
          <div className="grid w-full grid-cols-2 justify-between  max-xl:gap-5 max-md:grid-cols-1  xl:gap-20">
            <div className="max-w-1/2 max-xl:w-full max-xl:flex-col max-xl:items-center max-xl:justify-center   ">
              <p className="flex  text-lg    font-normal   max-xl:text-xs lg:text-lg">Services</p>
              <p className="mb-6 mt-2 text-base font-semibold leading-none tracking-tight text-[#99cc33]  opacity-80 max-xl:mt-3 md:text-2xl xl:text-4xl">
                We provide solutions that support every business sector
              </p>
              <p className="text-[#a9a9a9]">
                At Green INK, we offer a range of services tailored to optimize business growth and development. With
                our team of dedidcated experts, we cover
              </p>

              <ul className="mb-6 mt-6 list-inside text-[#a9a9a9]   ">
                <li className="list-disc  pb-4 max-sm:text-xs">Software Development</li>
                <li className="list-disc  pb-4 max-sm:text-xs">Product Design & Management</li>
                <li className="list-disc  pb-4 max-sm:text-xs">Business Strategy & Developemnt</li>
                <li className="list-disc  pb-4 max-sm:text-xs">Brand Identity & Positioning</li>
                <li className="list-disc  pb-4 max-sm:text-xs">Business & Technology Competency & Audit</li>
                <li className="list-disc  pb-4 max-sm:text-xs">Venture & Investment Audit</li>
              </ul>

              <button className=" flex items-center gap-2 rounded-lg bg-[#9acb32] px-4 py-2 text-[#4b7301]">
                SEND AN EMAIL
              </button>
            </div>

            <div>
              <img src="/greenink/GI_Web_Image.png" className="w-full md:h-[500px]" />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="paddings  w-full bg-[#99cb34] max-sm:px-3 ">
        <div className="w-full     xl:py-10">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full gap-4 md:flex md:items-stretch md:justify-between xl:py-10">
              {/* Technical Specifications Card */}
              <div className="flex flex-col  items-start justify-between rounded-lg max-md:mb-4 md:w-1/2   ">
                <div>
                  <p className="mb-2  font-semibold text-[#365905]  max-xl:text-base">PRODUCTS</p>
                  <p className=" text-2xl text-[#FFFFFF] xl:text-4xl">
                    Purple Pages is a one-stop digital business directory
                  </p>

                  <p className="mt-5 text-sm text-[#365905]">
                    Purple Page provide the opportunity for SMEs to connect with a wider market audience with a more
                    accessible digital presince. It serves as a one-stop business directory that gives its users contact
                    details, list of potential customers to aid in decision making
                  </p>

                  <p className="mt-5 text-sm text-[#365905]">
                    Purple Page provide the opportunity for SMEs to connect with a wider market audience with a more
                    accessible digital presince. It serves as a one-stop business directory that gives its users contact
                    details, list of potential customers to aid in decision making
                  </p>
                  <div className="mt-7 flex gap-4">
                    <button className=" flex items-center gap-2 rounded-lg bg-[#ffffff] px-4 py-2 text-[#4b7301] shadow-md">
                      KNOW MORE
                    </button>
                    <button className=" flex items-center gap-2 rounded-lg bg-[#ffffff] px-4 py-2 text-[#4b7301] shadow-md">
                      DOWNLOAD APP
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Manual Card */}
              <img src="/greenink/PurplePages_Phone_Mockup.png" className="md:h-[500px] " />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="paddings  w-full bg-[#ffffff] max-sm:px-3 ">
        <div className="  w-full     py-10">
          <div className="flex flex-col">
            <p className=" text-[#99cc33]">Contact</p>
            <div className="flex items-center gap-6 max-md:flex-col md:gap-32 xl:justify-center">
              <div className="flex flex-col gap-2">
                <p className="mt-4 flex text-center text-[22px]  font-bold text-[#0b1903] max-md:text-xl ">
                  Email Us - hello@greeninkltd.com
                </p>
                <p className="text-center ">Send us a message</p>
                <button className=" flex w-full items-center justify-center gap-2 rounded-lg bg-[#99cc33] py-2 text-center text-[#4b7301] shadow-md">
                  SEND AN EMAIL
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <p className="mt-4 flex text-center text-[22px]  font-bold text-[#0b1903] max-md:text-xl ">
                  Call Us - +234 813 675 2287
                </p>
                <p className="text-center ">Available from Monday - Friday, 8am - 6pm</p>
                <button className=" flex w-full items-center justify-center gap-2 rounded-lg bg-[#99cc33] py-2 text-center text-[#4b7301] shadow-md">
                  CLICK TO CALL
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <ContactUs /> */}

      <MainFooter />

      <Footer />
    </section>
  )
}
