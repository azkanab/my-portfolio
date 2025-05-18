"use client"

import ParticleBackground from "@/components/particle-background"
import Navbar from "@/components/navbar"
import Landing from "@/components/landing"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"
import { useState } from 'react'

export default function Home() {
  const [page, setPage] = useState("Landing")

  const renderComponent = () => {
    switch (page) {
      case "Landing":
        return <Landing setPage={setPage} />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "About":
        return <About />;
      case "Gallery":
        return <Gallery />;
      default:
        return <Landing setPage={setPage}/>;
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar page={page} setPage={setPage} />
        {renderComponent()}
        <Footer />
      </div>
    </main>
  )
}
