import { useState } from "react"
import IconDarkMode from "~icons/bxs/right-arrow"

export const Experiences = ({}) => {
  const [collapsedIndex, setCollapsedIndex] = useState<number | null>(null)

  const experiences = [
    {
      year: "2021 - Present",
      company: "Le Collectionist",
      post: "Front-end & Mobile developer",
      contentSkills: [
        "React Native (with expo)",
        "Vue 2 & 3 / Nuxt.js / SPA / SSR",
        "Vuex, Pinia, Tailwind, Vite, Jest",
        "Rest api: Ruby on Rails, Strapi",
      ],
    },
    {
      year: "2019 - 2020",
      company: "Meero",
      post: "Front-end developer",
      contentSkills: [
        "Vue 2 SPA & twig",
        "Vuex, SASS, Webpack, Jest",
        "Rest api: PHP symfony",
      ],
    },
    {
      year: "2018 - 2019",
      company: "Coding bootcamp",
      post: "Web Development",
      contentSkills: [
        "HTML, CSS and Javascript",
        "React, Jest",
        "UML, technical and functional documentation",
      ],
    },
    {
      year: "2015 - 2018",
      company: "Travel industry",
      post: "Traffic manager",
      contentSkills: [
        "Management of ads campaigns",
        "Acquisition, retargeting",
        "Excel & monitoring tools",
      ],
    },
  ]

  const handleItemClick = (idx: number) => {
    if (collapsedIndex === idx) setCollapsedIndex(null)
    else setCollapsedIndex(idx)
  }

  return (
    <section className="mb-16">
      <h2 className="mb-3 text-2xl font-medium text-blue dark:text-white">
        Work experience
      </h2>
      <ul className="flex flex-col">
        {experiences.map((item, idx) => (
          <li
            key={idx}
            onClick={() => handleItemClick(idx)}
            className="flex cursor-pointer flex-col border-b px-1 py-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-3/12 font-medium text-slate-400">
                {item.year}
              </div>
              <div className="w-7/12 text-slate-600 dark:text-white">
                <span>{item.post}</span>
                {item.company && (
                  <span className="italic"> - {item.company}</span>
                )}
              </div>
              <div className="flex w-1/12">
                <div className="ml-auto flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-200 text-sm text-black dark:bg-slate-100/50">
                  <IconDarkMode
                    style={{
                      fontSize: "0.6em",
                      color: "rgb(51 65 85)",
                      transform: `rotate(${
                        collapsedIndex === idx ? `90deg` : "0deg"
                      })`,
                      transition: "all 0.2s ease-in",
                    }}
                  />
                </div>
              </div>
            </div>
            {collapsedIndex === idx && (
              <div className="mt-4">
                <ul className="list-none text-white">
                  {item.contentSkills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="custom-li-disc mb-3 text-slate-600 dark:text-white"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
