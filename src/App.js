import React from "react";
import Header from "./components/Header";
import Mainbody from "./components/Mainbody";
import Template from "./components/Template";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formheader from "./components/Formheader";
import Centeredtabs from "./components/Centeredtabs";
import Questionform from "./components/Questionform";
import Userform from "./components/Userform";
import SubmitForm from "./components/SubmitForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Template />
                <Mainbody />
              </>
            }
          />
          <Route path="/response" element={<Userform />} />
          <Route path="/submitted" element={<SubmitForm />} />
          <Route
            path="/form/:id"
            element={
              <>
                <Formheader />
                <Centeredtabs />
                <Questionform />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
