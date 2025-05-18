"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// Sample gallery items - replace with your actual content
const galleryItems = [
  {
    id: 1,
    image: "/1.jpg",
    title: "Sunrise in Ketapang",
    description: "Banyuwangi, East Java, Indonesia"
  },
  {
    id: 2,
    image: "/2.jpg",
    title: "White Crater",
    description: "Ciwidey, West Java, Indonesia"
  },
  {
    id: 3,
    image: "/3.jpg",
    title: "Collection of Skyscrapers",
    description: "Raffles Place, Singapore"
  },
  {
    id: 4,
    image: "/4.jpg",
    title: "Seagulls Flying Through the Harbour Air",
    description: "Port of Hamburg, Germany"
  },
  {
    id: 5,
    image: "/5.jpg",
    title: "When a Seagull Meets a Ferry",
    description: "Port of Hamburg, Germany"
  },
  {
    id: 6,
    image: "/6.jpg",
    title: "Chillin' Seagulls",
    description: "Port of Hamburg, Germany"
  },
  {
    id: 7,
    image: "/7.jpg",
    title: "Swan Lake",
    description: "Alster, Hamburg, Germany"
  },
  {
    id: 8,
    image: "/8.jpg",
    title: "Wat Arun",
    description: "Bangkok, Thailand"
  },
  {
    id: 9,
    image: "/9.jpg",
    title: "When Hills Meet The Sea",
    description: "Padar Island, Labuan Bajo, Indonesia"
  },
  {
    id: 10,
    image: "/10.jpg",
    title: "Swimming Under the Sun",
    description: "Pileh Lagoon, Krabi, Thailand"
  },
  {
    id: 11,
    image: "/11.jpg",
    title: "Maya Bay",
    description: "Krabi, Thailand"
  },
  {
    id: 12,
    image: "/12.jpg",
    title: "A Tram Gliding Down the City Street",
    description: "Berlin, Germany"
  },
  {
    id: 13,
    image: "/13.jpg",
    title: "Sunbeams Through the Gaps of the Horse",
    description: "Berlin, Germany"
  },
  {
    id: 14,
    image: "/14.jpg",
    title: "Waiting For the Train",
    description: "Berlin, Germany "
  },
  {
    id: 15,
    image: "/15.jpg",
    title: "Ijen Crater",
    description: "Banyuwangi, East Java, Indonesia"
  },
  {
    id: 16,
    image: "/16.jpg",
    title: "The Kecak Dance",
    description: "Ubud, Bali, Indonesia"
  },
  {
    id: 17,
    image: "/17.jpg",
    title: "Clouds in the Air",
    description: "On my way home to Singapore"
  },
  {
    id: 18,
    image: "/18.jpg",
    title: "Sunrise Reflection in Ketapang",
    description: "Banyuwangi, East Java, Indonesia"
  },
  {
    id: 19,
    image: "/19.jpg",
    title: "St. Michael's Church",
    description: "Hamburg, Germany"
  },
  {
    id: 20,
    image: "/20.jpg",
    title: "St. Nikolai from Afar",
    description: "Hamburg, Germany"
  },
  {
    id: 21,
    image: "/21.jpg",
    title: "Feeling the Wind",
    description: "Hamburg, Germany"
  },
  {
    id: 22,
    image: "/22.jpg",
    title: "Chillin' Under the Sun",
    description: "Hamburg, Germany"
  },
  {
    id: 23,
    image: "/23.jpg",
    title: "Siblings' Gathering",
    description: "Hamburg, Germany"
  },
  {
    id: 24,
    image: "/24.jpg",
    title: "St. Michael's Church",
    description: "Hamburg, Germany"
  },
  {
    id: 25,
    image: "/25.jpg",
    title: "The Tip of St. Michael's Church from Afar",
    description: "Hamburg, Germany"
  },
  {
    id: 26,
    image: "/26.jpg",
    title: "Laughter on the Grass",
    description: "Hamburg, Germany"
  },
  {
    id: 27,
    image: "/27.jpg",
    title: "The Window to the Soul",
    description: "Jakarta, Indonesia"
  },
  {
    id: 28,
    image: "/28.jpg",
    title: "Hiding Between the Hills",
    description: "Dieng, Central Java, Indonesia "
  },
  {
    id: 29,
    image: "/29.jpg",
    title: "Pileh Lagoon",
    description: "Krabi, Thailand"
  },
  {
    id: 30,
    image: "/30.jpg",
    title: "Me at the Ijen Crater",
    description: "Banyuwangi, East Java, Indonesia"
  },
  {
    id: 31,
    image: "/31.jpg",
    title: "Bromo Mountain",
    description: "Probolinggo, East Java, Indonesia"
  },
  {
    id: 32,
    image: "/32.jpg",
    title: "Multiplied Kisses",
    description: "Hamburg, Germany"
  },
  {
    id: 33,
    image: "/33.jpg",
    title: "Boardgames Till Dawn",
    description: "Berlin, Germany"
  },
  {
    id: 34,
    image: "/34.jpg",
    title: "Collection of Boardgames",
    description: "Berlin, Germany"
  },
  {
    id: 35,
    image: "/35.jpg",
    title: "A Short Transit",
    description: "Munich, Germany"
  },
  {
    id: 36,
    image: "/36.jpg",
    title: "Yellow Spring on Highway",
    description: "On my way home to Hamburg"
  },
  {
    id: 37,
    image: "/37.jpg",
    title: "Watching the Hours Pass",
    description: "Hauptbahnof, Hamburg, Germany"
  },
  {
    id: 38,
    image: "/38.jpg",
    title: "Batur Mountain from Afar",
    description: "Kintamani, Bali, Indonesia"
  },
  {
    id: 39,
    image: "/39.jpg",
    title: "A Night Life",
    description: "Reeperbahn, Hamburg, Germany"
  },
  // {
  //   id: 40,
  //   image: "/40.jpg ",
  //   title: "A Night Life",
  //   description: "Reeperbahn, Hamburg, Germany"
  // },
  {
    id: 41,
    image: "/41.jpg",
    title: "A Night Life",
    description: "Reeperbahn, Hamburg, Germany"
  },
  {
    id: 42,
    image: "/42.jpg",
    title: "Evening Stroll",
    description: "Hamburg, Germany"
  },
  {
    id: 43,
    image: "/43.jpg",
    title: "Snow in Winterhude",
    description: "Hamburg, Germany"
  },
  {
    id: 44,
    image: "/44.jpg",
    title: "Korean Food Time!",
    description: "Hamburg, Germany"
  },
  {
    id: 45,
    image: "/45.jpg",
    title: "Ice Cream in Cold Weather",
    description: "Berlin, Germany"
  },
  {
    id: 46,
    image: "/46.jpg",
    title: "Breakfast, accompanied by the gentle warmth of the morning sun.",
    description: "Berlin, Germany"
  },
  {
    id: 47,
    image: "/47.jpg",
    title: "Spring in the Alster",
    description: "Hamburg, Germany"
  },
  {
    id: 48,
    image: "/48.jpg",
    title: "Empty Benches by the Lake",
    description: "Alster, Hamburg, Germany"
  },
  {
    id: 49,
    image: "/49.jpg",
    title: "Feeling Japanese in German",
    description: "Hamburg, Germany"
  },
  // {
  //   id: 50,
  //   image: "/50.jpg ",
  //   title: "Closer Look of the Sushi",
  //   description: "Hamburg, Germany"
  // }
]

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const openModal = (item: (typeof galleryItems)[0], index: number) => {
    setSelectedItem(item)
    setCurrentIndex(index)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  const closeModal = () => {
    setSelectedItem(null)
    document.body.style.overflow = "auto" // Re-enable scrolling
  }

  const navigateGallery = (direction: "next" | "prev") => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % galleryItems.length
        : (currentIndex - 1 + galleryItems.length) % galleryItems.length
    setSelectedItem(galleryItems[newIndex])
    setCurrentIndex(newIndex)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") navigateGallery("next")
    if (e.key === "ArrowLeft") navigateGallery("prev")
    if (e.key === "Escape") closeModal()
  }

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl pt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          My <span className="text-pink-500">Gallery</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          See the world through my lens and eyes. Mostly taken with my phone
        </p>

        {/* Instagram-style Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="aspect-square relative overflow-hidden cursor-pointer group"
              onClick={() => openModal(item, index)}
            >
              {/* Image */}
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Caption Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              className="absolute top-4 right-4 bg-gray-800/50 hover:bg-gray-700 rounded-full p-2 text-white"
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700 rounded-full p-2 text-white"
              onClick={(e) => {
                e.stopPropagation()
                navigateGallery("prev")
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700 rounded-full p-2 text-white"
              onClick={(e) => {
                e.stopPropagation()
                navigateGallery("next")
              }}
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Modal content */}
            <div className="max-[639px]:w-[70vw] min-w-[50vw] max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="relative h-[70vh] w-full">
                <Image
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-900/80 p-4">
                <h3 className="text-xl font-semibold text-white">{selectedItem.title}</h3>
                <p className="text-gray-300">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
