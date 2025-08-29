import { Rating } from "../others/Rating"

export const Skills = () => {

    const skills = [
        {
            type:"Front End",
            data:[
                {
                    name:"HTML",
                    level:"80%"
                },
                {
                    name:"CSS",
                    level:"80%"
                },
                {
                    name:"Javascript",
                    level:"85%"
                },
                {
                    name:"React JS",
                    level:"80%"
                },
                {
                    name:"Next JS",
                    level:"80%"
                },
                {
                    name:"Flowbite",
                    level:"70%"
                },
                {
                    name:"Tailwind",
                    level:"70%"
                },
                {
                    name:"React Bits",
                    level:"50%"
                },
                {
                    name:"Bootstrap",
                    level:"60%"
                },
                {
                    name:"Spline",
                    level:"40%"
                }
            ]
        },
        {
            type:"Back End",
            data:[
                {
                    name:"PHP",
                    level:"75%"
                },
                {
                    name:"Python",
                    level:"80%"
                },
                {
                    name:"MySQL",
                    level:"70%"
                },
                {
                    name:"Restful API'S",
                    level:"70%"
                },
                {
                    name:"Java",
                    level:"50%"
                },
                {
                    name:"Node JS",
                    level:"70%"
                }
            ]
        },
        {
            type:"Others",
            data:[
                {
                    name:"VS Code",
                    level:"95%"
                },
                {
                    name:"Github",
                    level:"80%"
                },
                {
                    name:"Netlify",
                    level:"80%"
                },
                {
                    name:"Eclipse",
                    level:"70%"
                },
                {
                    name:"Power Automate",
                    level:"70%"
                },
                {
                    name:"Power Apps",
                    level:"70%"
                },
                {
                    name:"Visual Basic",
                    level:"80%"
                }
            ]
        }
    ]
        
  return (
    <section className="mb-7 border-b border-b-slate-700 pb-10" id="Skills">
        <div className='mb-7 max-sm:text-center max-lg:text-center'>
            <p className="mb-2 text-blue-700 text-lg">My development</p>
            <h1 className="text-4xl dark:text-white font-bold">Skills</h1>
        </div>
        <div className="">
            <div className="flex justify-center mt-4 max-sm:flex-col max-lg:flex-col">  
                {
                    skills.map((items,index) => 
                        <Rating key={index} items={items} />
                    )
                }
            </div>
        </div>
    </section>
  )
}
