import { useEffect } from "react"
import GameComponent1 from "./GameComponent1"
import GameComponent2 from "./GameComponent2"
import matter from "gray-matter"
import Hero from "./Hero"


export default function App() {

  const modules = import.meta.glob('./projects/*.md', {
    eager: true
  })

  const games = Object.values(modules).map((module) => {
    return {
      frontmatter: module.attributes, // The YAML frontmatter
      description: module.html        // The parsed Markdown body
    }
  }).sort((a, b) => a.frontmatter.order - b.frontmatter.order);

  return (
    <div>
      <Hero />


      {games.map((game, index) => (


        <GameComponent1
          key={game.frontmatter.title}
          {...game.frontmatter}
          description={game.description}
          reverse={index % 2 !== 0} />


      ))}


    </div>

  )
}
