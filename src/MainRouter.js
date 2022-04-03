import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";

const MainRouter = ()=>{
    return(

        <>
        <Routes>
            <Route path="/" element={<Layout></Layout>}> 
                <Route index element={<Home></Home>}></Route>
                <Route path="/pages/Home" element={<Home></Home>}></Route>
            </Route>
          
        </Routes>
    </>

    )
}

export default MainRouter;