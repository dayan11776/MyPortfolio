import { Card } from "../others/Card"

export const Project = () => {

  const Project = [
    {
      name:"WatchMe",
      image:"./assets/images/MyMovie.png",
      netlify:"https://watchme11.netlify.app/",
      github:"https://github.com/dayan11776/WatchMe"
    },
    {
      name:"Old Portfolio",
      image:"./assets/images/OldPortfolio.png",
      netlify:"https://adoring-mahavira-4710f4.netlify.app/",
    }
  ]

  return (
     <section className="mb-7 border-b border-b-slate-700 pb-10" id="Projects">
        <div className="mb-7 max-sm:text-center max-lg:text-center">
            <p className="mb-2 text-blue-700 text-lg">My work</p>
            <h1 className="text-4xl dark:text-white font-bold">Projects</h1>
        </div>
        <div className="flex flex-wrap max-sm:flex-col">
          {
            Project.map((items,index) => 
              <Card key={index} items={items}/>
            )
          }
        </div>
     </section>
  )
}
