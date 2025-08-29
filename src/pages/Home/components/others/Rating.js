export const Rating = ({items}) => {
    const {type,data} = items
  return (
    
    <div className="py-4 w-full max-lg:flex max-lg:flex-col max-lg:items-center">
        <span className="block max-w-sm p-6 h-full bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-sm:max-w-lg max-sm:rounded-none max-lg:w-full">
            <h5 className="mb-2 text-2xl text-center border-b font-bold tracking-tight text-gray-900 dark:text-white">{type}</h5>
            {
                data.map((items,index) =>
                    <div key={index} className=" items-center mt-4">
                        <span className="dark:text-white">{items.name}</span>
                        <div className="flex">
                            <div className="w-full h-5 mx-4 bg-gray-200 rounded-sm dark:bg-gray-700">
                                <div className="h-5 bg-yellow-300 rounded-sm" style={{width: items.level}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{items.level}</span>
                        </div>
                    </div>
                )
            }
        </span>
    </div>
  )
}
