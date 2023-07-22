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
        "Tailwind, Vite",
        "Ruby on Rails, Strapi",
      ],
    },
    {
      year: "2019 - 2020",
      company: "Meero",
      post: "Front-end developer",
      contentSkills: [
        "React Native (with expo)",
        "Vue 2 & 3 / Nuxt.js / SPA / SSR",
        "Tailwind, Vite",
        "Ruby on Rails, Strapi",
      ],
    },
    {
      year: "2018 - 2019",
      company: "Coding bootcamp",
      post: "Web Development",
      contentSkills: [
        "React Native (with expo)",
        "Vue 2 & 3 / Nuxt.js / SPA / SSR",
        "Tailwind, Vite",
        "Ruby on Rails, Strapi",
      ],
    },
    {
      year: "2015 - 2018",
      company: "",
      post: "Project manager",
      contentTitle: "Luxury villas and chalets renting plateform",
      contentSkills: [
        "React Native (with expo)",
        "Vue 2 & 3 / Nuxt.js / SPA / SSR",
        "Tailwind, Vite",
        "Ruby on Rails, Strapi",
      ],
    },
  ]

  const handleItemClick = (idx: number) => {
    if (collapsedIndex === idx) setCollapsedIndex(null)
    else setCollapsedIndex(idx)
  }

  return (
    <section>
      <h2 className="mb-3 text-2xl text-blue dark:text-white">Experiences</h2>
      <ul className="flex flex-col">
        {experiences.map((item, idx) => (
          <li
            key={idx}
            onClick={() => handleItemClick(idx)}
            className="flex cursor-pointer flex-col border-b px-1 py-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-2/12 font-medium text-slate-400 opacity-80">
                {item.year}
              </div>
              <div className="w-8/12 text-slate-600 dark:text-white">
                <span>{item.post}</span>
                {item.company && (
                  <span className="italic">- {item.company}</span>
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
                {/* <h3 className="text-md mb-4 text-white">{item.contentTitle}</h3> */}
                <ul className="list-none text-white">
                  {item.contentSkills.map((skill) => (
                    <li className="custom-li-disc mb-2">{skill}</li>
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
