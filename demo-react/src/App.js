import {Home} from "./pages/Home";
import {Admin} from "./pages/Admin";
import {Route, Routes} from "react-router-dom";
import {ListStudent} from "./pages/students/ListStudent";
import {CreatStudent} from "./pages/students/CreatStudent";
import React from "react";
import {EditStudent} from "./pages/students/EditStudent";

function App() {
  return (
      <>
          <Routes>
              <Route path={'/'} element={<Home></Home>}>
                  <Route path={'/'} element={<ListStudent></ListStudent>}></Route>
                  <Route path={'/create-student'} element={<CreatStudent></CreatStudent>}></Route>
                  <Route path={'/edit-student/:id'} element={<EditStudent></EditStudent>}></Route>
              </Route>
              <Route path={'admin'} element={<Admin></Admin>}></Route>
          </Routes>

      </>
  )

}

export default App;
