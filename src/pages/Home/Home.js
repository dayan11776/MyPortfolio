import { About } from "./components/layout/About"
import { Contact } from "./components/layout/Contact"
import { Content } from "./components/layout/Content"
import { Project } from "./components/layout/Project"
import { Skills } from "./components/layout/Skills"

export const Home = () => {
  return (
    <main>
      <Content />
      <About />
      <Skills />
      <Project />
      <Contact />
    </main>
  )
}


