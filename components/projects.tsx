import Image from "next/image"
import Link from "next/link"
import VideoPlayer from "@/components/video-player"

const projects = [
  {
    id: 11,
    type: "Image",
    title: "Key-Value Store (2024)",
    description: "A distributed key-value store using a virtual ring topology, ensuring consistency through quorum-based replication with responses from X replica nodes.",
    tags: ["C++"],
    image: "/kv-store.png",
    url: "https://gitfront.io/r/azkanab/Mc2gELA9QzWc/key-value-store/"
  },
  {
    id: 0,
    type: "Image",
    title: "Membership Protocol (2024)",
    description: "Implemented a heartbeating gossip-based membership protocol for decentralized node management and failure detection in distributed systems.",
    tags: ["C++"],
    image: "/membership.png",
    url: "https://gitfront.io/r/azkanab/TpP1iMCZceE4/membership-protocol/"
  },
  {
    id: 1,
    type: "Video",
    title: "Wedding Invitation (2022)",
    description: "A fully featured custom wedding website built with a custom backend and API integration for guest and RSVP management.",
    tags: ["React.js", "Typescript", "Recoil", "Axios", "Figma"],
    video: "https://youtube.com/shorts/Buj8BkjzGXc?feature=share",
    url: "https://youtube.com/shorts/Buj8BkjzGXc?feature=share"
  },
  {
    id: 2,
    type: "Image",
    title: "Spotifi (2021)",
    description: "A full-featured responsive web application with Spotify OAuth integration, allowing users to log in, search tracks, and manage playlists via the Spotify Web API.",
    tags: ["React.js", "Redux", "Axios", "React Router"],
    image: "/spotifi.png",
    url: "https://spotifi.vercel.app"
  },
  {
    id: 3,
    type: "Image",
    title: "Pokedex (2021)",
    description: "A responsive, full-featured single-page application (SPA) that fetches and displays all Pokémon from the PokeAPI, allows users to view detailed information, catch Pokémon, assign nicknames, and manage a list of captured Pokémon.",
    tags: ["React.js", "GraphQL", "Recoil", "Emotion", "Jest"],
    image: "/pokedex.png",
    url: "https://pokedex-azkanab.vercel.app/"
  },
  {
    id: 4,
    type: "Image",
    title: "Qrder (2020)",
    description: "A responsive multi-page web application prototype for SMEs to present their digital menu via a single QR code, featuring interactive UI flows such as login, registration, and menu navigation—all built with frontend routing and static data, without backend or API integration.",
    tags: ["Next.js", "Recoil"],
    image: "/qrder.png",
    url: "https://ordr-adylanrff.vercel.app"
  },
    {
    id: 5,
    type: "Image",
    title: "Viz-Wallet (2019)",
    description: "A mobile prototype demonstrating new screen-reader-compatible interaction patterns that enhance the usability and accessibility of fintech applications for users with visual impairments.",
    tags: ["React Native"],
    image: "/VizWallet.JPG",
    url: "https://youtu.be/NNDYgbubO6o?si=-MKrwdMFqEP36May"
  }
]

export default function Projects() {
  return (
    <section className="py-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl pt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-pink-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/50 border border-white/10 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              {project.type == "Image" ?
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                :
                <div className="relative h-48">
                  <VideoPlayer videoSrc={project.video} />
                </div>
              }

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-pink-900/30 text-pink-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={project.url} className="inline-block text-pink-400 hover:text-pink-300 font-medium">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
