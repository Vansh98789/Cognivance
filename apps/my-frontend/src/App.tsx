import { Navigate, Route, Routes } from "react-router-dom"
import Landing from "./features/Landing"
import DashBoard from "./features/DashBoard"
import Work from "./features/work"
import Passport from "./features/passport"
import Interview from "./features/interview"

function App() {

  return (
    <>
         <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/dashboard" element={<DashBoard/>}>
              <Route index element={<Navigate to="work" replace />} />
              <Route path="work" element={<Work/>}/>
              <Route path="interview" element={<Interview/>}/>
              <Route path="passport" element={<Passport/>}/>
            </Route>

          </Routes>
    </>
  )
}

export default App
