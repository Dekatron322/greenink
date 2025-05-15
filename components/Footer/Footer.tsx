"use client"
import React, { useState } from "react"

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleButtons = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Footer */}
      <div className="paddings flex w-full flex-col items-center justify-center border-t border-[#ffffffcc] bg-[#666666] max-sm:text-[10px]">
        <p className=" text-center uppercase text-[#ffffffcc] max-sm:text-sm">
          2023 GreenInk LTD. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Footer
