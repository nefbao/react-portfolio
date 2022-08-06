import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";
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