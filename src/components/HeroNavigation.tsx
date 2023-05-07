import { forwardRef } from "react"

export const HeroNavigation = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <nav ref={ref} className={`mt-8 text-slate-400`}>
      <ul className="flex space-x-6">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Posts</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
        <li>
          <a href="">Github</a>
        </li>
      </ul>
    </nav>
  )
})
