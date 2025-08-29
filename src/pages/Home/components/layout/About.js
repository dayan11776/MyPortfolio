import { Accordion } from "../others/Accordion"

export const About = () => {

  const jobExperience = [
    {
      id:1001,
      Company:"Fujitsu",
      JobTitle:"Application System Engineer",
      Year:"2022-2025",
      Experience:[
        {
          Project:"Internal Project",
          Detail:[
            "Lead the design and development for automation.",
            "Create data in SharePoint List.",
            "Build design by using Power Apps.",
            "Create dataflow and export the data to excel sheet using Power Automate and also additional program using typescript."
          ]
        },
        {
          Project:"External Project",
          Detail:[
            "Collaborate with clients develop the system structure, data structure, and fix errors.",
            "Collaborate with clients develop the system structure, data structure, and fix errors.",
            "Create a program using PHP, Javascript, MySQL, HTML, CSS",
            "Create program evidence for the actual result",
            "Work within tight deadlines to ensure projects were completed"
          ]
        }
      ]
    },
    {
      id:1002,
      Company:"DENR",
      JobTitle:"Technical Support Staff",
      Year:"2021",
      Experience:[
        {
          Project:"",
          Detail:[
            "Worked in a team for a 3-month project called Survey and Registration of Protected Area Occupants (SRPAO)",
            "Create maps using ArcgisPro of the surveyed farm lots within the Protected Area",
            "Import kml/kmz files to Arcgis Pro and export to pdf/jpeg files",
            "Import kml/kmz files to Arcgis Pro and export to pdf/jpeg files",
            "Assist in the monitoring of the accomplishments of enumerators and data encoders."
          ]
        }
      ]
    }

  ]

  return (
      <section className="flex flex-wrap mb-12 max-sm:flex-col max-sm:items-center max-lg:flex-col max-lg:items-center max-lg:px-7">
        <div className="w-2/5 flex justify-center items-center max-sm:w-full max-sm:mb-7 max-lg:mb-7">
          <h1 className="text-5xl font-bold dark:text-white">My Experience</h1>
        </div>
        <div id="accordion-collapse" className='w-3/5 max-sm:w-full max-lg:w-full' data-accordion="collapse">
          {
            jobExperience.map((items) => 
              <Accordion key={items.id} items={items}/>
            )
          }
        </div>
      </section>
  )
}
