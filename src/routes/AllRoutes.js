import { Routes,Route } from "react-router-dom"
import { Home } from "../pages"

export const AllRoutes = ({name}) => {
  return (
    <Routes>
        <Route path="/" element={<Home name={name}/>} />
    </Routes>
  )
}
