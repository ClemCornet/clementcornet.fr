import { forwardRef } from "react"
import Account from "~icons/mdi/account"
import Coffee from "~icons/iconoir/coffee-cup"
import Twitter from "~icons/mdi/twitter"
import Github from "~icons/mdi/github"

type RefType = HTMLDivElement
type PropsType = { [x: string]: any }

export const HeroNavigation = forwardRef<RefType, PropsType>(
  ({ ...props }, ref) => {
    const items = [
      {
        id: "about",
        component: <Account style={{ fontSize: "1rem" }} />,
        link: "/about",
        text: "About",
      },
      {
        id: "til",
        component: <Coffee style={{ fontSize: "1.10rem" }} />,
        link: "/today-i-learned",
        text: "Posts",
      },
      {
        id: "twitter",
        component: <Twitter style={{ fontSize: "1rem" }} />,
        link: "https://twitter.com/ClemCornet",
        text: "Twitter",
      },
      {
        id: "github",
        component: <Github style={{ fontSize: "1rem" }} />,
        link: "https://github.com/ClemCornet",
        text: "Github",
      },
    ]

    const isActive = (link: string) => {
      return props.currentPath === link
    }

    return (
      <nav ref={ref} {...props}>
        <ul className="flex w-full justify-around space-x-6 font-medium md:justify-normal">
          {items.map(({ id, component, link, text }) => (
            <li
              key={id}
              className="group relative flex cursor-pointer flex-col items-center justify-center md:flex-row md:justify-start"
            >
              <div
                className="
              relative
              mb-2
              rounded-lg
              bg-gradient-to-tl
              from-slate-200
              to-slate-200
              p-1
              text-slate-700
              transition-all
              duration-300
              ease-out
              after:overflow-hidden
              group-hover:scale-125
              dark:bg-gradient-to-tl
              dark:from-blue
              dark:via-blue/60
              dark:to-blue/20
              dark:text-slate-400
              dark:after:absolute
              dark:after:inset-x-0
              dark:after:bottom-0
              dark:after:top-6
              dark:after:block
              dark:after:h-4
              dark:after:w-6
              dark:group-hover:after:bg-blue/50
              dark:group-hover:after:blur-md
              md:mb-0
              md:mr-2"
              >
                {component}
              </div>
              <a
                className={`${
                  isActive(link)
                    ? "font-semibold text-slate-500 dark:text-slate-300"
                    : "text-slate-400"
                } text-center text-sm md:text-base`}
                href={link}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
)
