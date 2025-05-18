"use client"

import type React from "react"

import { useState } from "react"
import { Send, Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react"
import { BiLogoMedium } from "react-icons/bi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className="py-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto max-w-5xl pt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-pink-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out to me for any questions or opportunities
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="mr-4 text-pink-500" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-400">mazkanab@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-4 text-pink-500" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-400">Hamburg, Germany</p>
                </div>
              </div>


              <div className="flex items-start">
                <Instagram className="mr-4 text-pink-500" />
                <div>
                  <h4 className="font-medium">Instagram</h4>
                  <p className="text-gray-400">
                    <a
                      href="https://www.instagram.com/azkanab/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      @azkanab
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Linkedin className="mr-4 text-pink-500" />
                <div>
                  <h4 className="font-medium">Linkedin</h4>
                  <p className="text-gray-400">
                    <a
                      href="https://www.linkedin.com/in/azkanab/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Azka Nabilah Mumtaz
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Github className="mr-4 text-pink-500" />
                <div>
                  <h4 className="font-medium">Github</h4>
                  <p className="text-gray-400">
                    <a
                      href="https://github.com/azkanab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Azka N. Mumtaz
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <BiLogoMedium className="mt-1 mr-4 text-pink-500" />
                <div>
                  <h4 className="font-medium">Medium</h4>
                  <p className="text-gray-400">
                    <a
                      href="https://medium.com/@azkanab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      @azkanab
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form action="https://formsubmit.co/mazkanab@gmail.com" method="POST">
              <div className="mb-2">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors text-white font-medium flex items-center"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
