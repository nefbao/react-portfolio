import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
export default function App() {
  return (
    <BrowserRouter>
      {" "}
            
      <Routes>
        {" "}
                
        <Route path="/" element={<Layout />}>
          {" "}
                    
          <Route index element={<Home />} />           
          <Route path="about" element={<About />} />           
          <Route path="contact" element={<Contact />} />           
          <Route path="work" element={<Work />} />         
        </Route>{" "}
              
      </Routes>{" "}
          
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
