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
        link: "/",
        text: "About",
      },
      {
        id: "skills",
        component: <Coffee style={{ fontSize: "1.10rem" }} />,
        link: "/",
        text: "Skills",
      },
      {
        id: "twitter",
        component: <Twitter style={{ fontSize: "1rem" }} />,
        link: "/",
        text: "Twitter",
      },
      {
        id: "github",
        component: <Github style={{ fontSize: "1rem" }} />,
        link: "/",
        text: "Github",
      },
    ]

    return (
      <nav ref={ref} {...props}>
        <ul className="flex space-x-6 font-medium">
          {items.map(({ id, component, link, text }) => (
            <li
              key={id}
              className="group relative flex cursor-pointer items-center"
            >
              <div
                className="
              relative
              mr-2
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
              dark:group-hover:after:blur-md"
              >
                {component}
              </div>
              <a className="text-slate-400" href={link}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
)
