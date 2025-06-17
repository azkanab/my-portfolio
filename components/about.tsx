import Image from "next/image"
import { FaJs, FaReact, FaPython, FaDocker, FaGitAlt, FaAws, FaDatabase } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiVuedotjs, SiGraphql, SiCplusplus, SiFlask, SiAxios, SiRedux, SiRecoil, SiKubernetes, SiApachespark, SiRedis, SiApache, SiApachehadoop, SiAmazonec2, SiAmazondynamodb, SiAmazonelasticache, SiAmazonapigateway, SiMysql, SiAwslambda, SiAmazons3, SiBootstrap } from "react-icons/si"
import { TbBrandGolang } from "react-icons/tb"

export default function About() {
  // Programming language and technology icons with their names
  const techSkills = [
    { icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
    { icon: FaPython, name: "Python", color: "#3776AB" },
    { icon: TbBrandGolang, name: "Go", color: "#00ADD8" },
    { icon: FaDocker, name: "Docker", color: "#2496ED" },
    { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
    { icon: SiApachespark, name: "Apache Spark", color: "#E25A1C" },
    { icon: SiRedis, name: "Redis", color: "#DC382D" },
    { icon: SiApache, name: "HBase", color: "#D22128" },
    { icon: SiApachehadoop, name: "MapReduce", color: "#66CCFF" },
    { icon: FaGitAlt, name: "Git", color: "#F05032" },
    { icon: FaAws, name: "AWS", color: "#FF9900" },
    { icon: SiAmazondynamodb, name: "DynamoDB", color: "#4053D6" },
    { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
    { icon: SiCplusplus, name: "C++", color: "#00599C" },
    { icon: SiAmazonec2, name: "Amazon EC2", color: "#FF9900" },
    { icon: SiAmazonelasticache, name: "Amazon Elastic Cache", color: "#FF9900" },
    { icon: SiAmazonapigateway, name: "Amazon API Gateway", color: "#FF9900" },
    { icon: SiAwslambda, name: "AWS Lambda", color: "#FF9900" },
    { icon: SiAmazons3, name: "Amazon S3", color: "#FF9900" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: SiRedux, name: "Redux", color: "#764ABC" },
    { icon: SiRecoil, name: "Recoil", color: "#3578E5" },
    { icon: SiFlask, name: "Flask", color: "#ffffff" },
    { icon: SiAxios, name: "Axios", color: "#5A29E4" },
    { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
  ]

  return (
    <section className="py-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto max-w-5xl pt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-pink-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center mb-6">
              <div className="relative w-20 h-20 mr-4 rounded-full overflow-hidden border-2 border-pink-500">
                <Image
                  src="/me.jpg"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-2xl font-semibold">Who I Am</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Hi! My name is Azka Nabilah Mumtaz. I come from Surabaya, Indonesia, but I currently reside in Hamburg, Germany.
            </p>
            <p className="text-gray-300 mb-6">
              A brief introduction about myself, I'm a Master's student in Computer Science at the University of Illinois at Urbana Champaign (UIUC), with a specialization in Distributed Systems and Cloud Computing. My academic journey started with a Bachelor's in Computer Science from Bandung Institute of Technology, Indonesia, where I earned the Best Paper award and presented at 2nd ICONISCSE (International Conference on Information System, Computer Science, and Engineering) 2021 by IEEE with a paper titled "Designing an Inclusive Financial Technology for People with Visual Impairment."
            </p>
            <p className="text-gray-300 mb-6">
              I have some experiences as a Front-End Developer, including a recent role at Blibli.com, where I worked with my team to develop the homepage of one of the largest e-commerce platforms in Indonesia, {" "}
              <a
                href="https://www.blibli.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Blibli.com
              </a>
              , as well as an earlier internship at another leading e-commerce platform, {""}
              <a
                href="https://www.tokopedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Tokopedia.com
              </a>
              , during my third year of undergraduate studies. I'm also passionate about digital technology and its impact, with a particular interest in Distributed Systems and Cyber Security. Currently, I'm excited about the possibility of contributing to and learning from dynamic teams through internship opportunities, particularly through Backend Engineer role.
            </p>
            <p className="text-gray-300">
              When I'm not coding, I enjoy getting lost in books, playing the piano, exploring new places, spending time with my friends, playing boardgames, and capturing moments through photography and videography. One of my dream destinations is Svalbard—I'd love to visit it someday! If you are interested, you can also check out some of my photos in the gallery on this site or on my Instagram {" "}
              <a
                href="https://www.instagram.com/by.anm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                @by.anm
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Skills I Have Learnt</h3>

            <div className="grid grid-cols-4 sm:grid-cols-4 gap-6">
              {techSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-white/10 hover:border-pink-500/50 transition-all hover:transform hover:scale-105"
                >
                  <skill.icon size={40} color={skill.color} className="mb-2" />
                  <span className="text-xs text-center text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
