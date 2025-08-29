import { useState } from "react"

export const Accordion = ({items}) => {

    const {Company,JobTitle,Year,Experience} = items
    const [accordion,setAccordion] = useState(false)

  return (
    <div>
        <h2 id="accordion-collapse-heading-3">
            <button onClick={() => setAccordion(!accordion)} type="button" className={`${accordion?"bg-blue-900":""} bg-blue-700 flex items-center justify-between w-full p-5 font-medium rtl:text-right border  hover:bg-blue-900 gap-3"  data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3`}>
            <span className="text-xl font-bold text-white">{Company}</span>
            {
                accordion?(
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
                    </svg>
                ):(
                    <svg className="w-6 h-6  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                    </svg>
                )
            }
            </button>
        </h2>
        <div id="accordion-collapse-body-3" className={`${accordion?"":"hidden"} dark:text-white`} aria-labelledby="accordion-collapse-heading-3">
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p className="font-bold text-lg">{JobTitle}</p>
                <p className="mb-2  ">({Year})</p>
                {
                    Experience.map((items,index) => 
                       <div className='mb-3' key={index}>
                         <p className="font-bold">{items.Project}</p>
                         <ul className='list-inside list-disc'>
                            {
                                items.Detail.map((items,index) => 
                                    <li key={index}>
                                        {items}
                                    </li>
                                )
                            }
                         </ul>
                       </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}
