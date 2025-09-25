"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import Aquarium from "@/public/assets/projects/aquarium.png"
import PortfolioV1 from "@/public/assets/projects/portfolio-v1.png"
import NeuraPrice from "@/public/assets/projects/NeuraPrice.png"
import Domotique from "@/public/assets/projects/domotique.png"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import ProjectCard from "../ProjectCard"

export default function ProjectSection() {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)

  const elementRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".qoutes-animation"),
            {
              y: "-200%",
            },
            {
              y: 0,
            }
          )
        },
      },
    })
  }, [])

  // Set Active Session
  const projectSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    projectSectionOnView && setSection("#project")
  }, [projectSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative h-full bg-gray-50 dark:bg-gray-100 overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex absolute left-1/2 -translate-x-1/2 flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Mes projets
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden ">
            <div className="qoutes-animation  md:w-full text-center font-medium flex flex-col items-center">
              <div>Présentation de plusieurs projets</div>
              <div>Personnels et professionnels</div>
            </div>
          </div>
        </div>
        <div className="w-full pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        <div className="font-medium">
          Découvrez plus de projets sur{" "}
          <Link
            href="https://github.com/Florian-DAUVERGNE"
            target="_blank"
            aria-label="Découvrez-en plus sur mon profil github"
            rel="noopener noreferrer"
            className="text-accentColor navlink dark:hover:text-black"
          >
            mon profil GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}

export interface Project {
  id: number
  title: string
  description: string
  techStacks: string[]
  image: StaticImageData
  githubURL: string
  githubApi: string
  liveURL: string
}

const projects: Project[] = [
  {
   id: 1,
   title: "NeuraPrice",
   description:
     "Une application dédiée à la prédiction de prix basée sur des modèles neuronaux avancés.",
   techStacks: ["NextJS", "React", "TensorFlow.js", "Python"],
   image: NeuraPrice,
   githubURL: "https://github.com/Florian-DAUVERGNE/NeuraPrice",
   liveURL: "https://fdauvergne-portfolio-v1.vercel.app",
   githubApi: "https://api.github.com/repos/Florian-DAUVERGNE/NeuraPrice",
  },
  {
    id: 2,
    title: "Portfolio V1",
    description:
      "Mon premier site Web de portfolio personnel pour présenter mes compétences, mes projets et mes expériences en tant que développeur.",
    techStacks: ["NextJS", "React"],
    image: PortfolioV1,
    githubURL: "https://github.com/Florian-DAUVERGNE/Portfolio_V1",
    liveURL: "https://fdauvergne-portfolio-v1.vercel.app",
    githubApi: "https://api.github.com/repos/Florian-DAUVERGNE/Portfolio_V1",
  },
  {
    id: 3,
    title: "Domotique",
    description:
      "Système de domotique intelligent permettant le contrôle à distance des appareils domestiques via une application web.",
    techStacks: ["JavaScript", "Arduino"],
    image: Domotique,
    githubURL: "https://github.com/Florian-DAUVERGNE/Domotique",
    liveURL: "https://fdauvergne-domotique.vercel.app/",
    githubApi: "https://api.github.com/repos/Florian-DAUVERGNE/Domotique",
  },
  {
    id: 4,
    title: "Aquarium commandé",
    description:
      "Construction d'un dispositif d'aquarium intelligent avec contrôle de la température, de l'éclairage et de la qualité de l'eau via une application web.",
    techStacks: ["JavaScript", "Arduino"],
    image: Aquarium,
    githubURL: "https://github.com/Florian-DAUVERGNE/Aquarium",
    liveURL: "https://neura-price.vercel.app/",
    githubApi: "https://api.github.com/repos/Florian-DAUVERGNE/Aquarium",
  },


]
