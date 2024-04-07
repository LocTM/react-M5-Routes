import {Home} from "./pages/Home";
import {Admin} from "./pages/Admin";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
          <Routes>
              <Route path={'/'} element={<Home></Home>}></Route>
              <Route path={'admin'} element={<Admin></Admin>}></Route>
          </Routes>

      </>
  )

}

export default App;
