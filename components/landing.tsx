"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface Props {
    setPage: any
}

export default function Landing({ setPage }: Props) {
  const [headingText, setHeadingText] = useState("")
  const [subText, setSubText] = useState("")
  const fullHeadingText = "Hello, I'm Azka Mumtaz"
  const fullSubText = "a Software Engineer"
  const [showParagraph, setShowParagraph] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    // Animate the heading text first
    let headingIndex = 0
    const headingInterval = setInterval(() => {
      if (headingIndex < fullHeadingText.length) {
        setHeadingText(fullHeadingText.substring(0, headingIndex + 1))
        headingIndex++
      } else {
        clearInterval(headingInterval)

        // Start animating the subtitle after the heading is complete
        let subIndex = 0
        const subInterval = setInterval(() => {
          if (subIndex < fullSubText.length) {
            setSubText(fullSubText.substring(0, subIndex + 1))
            subIndex++
          } else {
            clearInterval(subInterval)

            // Show paragraph after subtitle is complete
            setTimeout(() => {
              setShowParagraph(true)

              // Show buttons after paragraph appears
              setTimeout(() => {
                setShowButtons(true)
              }, 500)
            }, 500)
          }
        }, 100)

        return () => clearInterval(subInterval)
      }
    }, 80) // Slightly faster typing for the heading

    return () => clearInterval(headingInterval)
  }, [])

  // Function to colorize specific words in the animated text
  const renderColorizedText = (text: string) => {
    if (!text) return null

    // Find the position of "Azka" in the text
    const firstNameIndex = text.indexOf("Azka")

    // If "Azka" isn't in the text yet, just return the text
    if (firstNameIndex === -1) {
      return text
    }

    // Split the text into three parts: before "Azka", "Azka Mumtaz", and anything after
    const beforeFirstName = text.substring(0, firstNameIndex)

    // Check if "Mumtaz" is already typed
    const lastNameIndex = text.indexOf("Mumtaz")

    if (lastNameIndex !== -1) {
      // Both "Azka" and "Mumtaz" are typed
      const fullName = text.substring(firstNameIndex, lastNameIndex + 6) // "Azka Mumtaz"
      const afterLastName = text.substring(lastNameIndex + 6)

      return (
        <>
          {beforeFirstName}
          <span className="text-pink-500">{fullName}</span>
          {afterLastName}
        </>
      )
    } else {
      // Only "Azka" is typed so far, or part of "Mumtaz"
      const firstNamePart = text.substring(firstNameIndex)

      return (
        <>
          {beforeFirstName}
          <span className="text-pink-500">{firstNamePart}</span>
        </>
      )
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-10 pt-16">
      <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6">
        {renderColorizedText(headingText)}
        {headingText.length < fullHeadingText.length && <span className="animate-pulse">|</span>}
      </h1>

      <h2 className="text-xl md:text-3xl font-light mb-8 h-8">
        {subText}
        {subText.length < fullSubText.length && headingText.length === fullHeadingText.length ? (
          <span className="animate-pulse">|</span>
        ) : null}
      </h2>

      <p
        className={`max-w-2xl text-gray-400 mb-10 text-lg transition-opacity duration-500 ${
          showParagraph ? "opacity-100" : "opacity-0"
        }`}
      >
        I’m a CS student with an interest in Distributed Systems and Cyber Security, experienced as a Frontend Engineer, and currently seeking internship opportunities as a Backend Engineer. In my free time, I enjoy photography and videography as my hobbies.
      </p>

      <div
        className={`flex flex-col sm:flex-row gap-4 transition-opacity duration-500 ${
          showButtons ? "opacity-100" : "opacity-0"
        }`}
      >
        <div onClick={() => setPage("Projects")} className="btn-primary hover:cursor-pointer">
          View My Projects
        </div>
        <div onClick={() => setPage("Contact")} className="btn-secondary hover:cursor-pointer">
          Contact Me
        </div>
      </div>
    </section>
  )
}
