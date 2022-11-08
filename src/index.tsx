import ReactDOM from "react-dom";
import React from "react";
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render((
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
  
), document.getElementById("compsoc"));

const emailField = document.getElementById(
  "ctl00_ctl39_rptContactInfo_ctl00_hlEmailAddress"
) as HTMLAnchorElement;

if (emailField) {
  emailField.innerText = "hello@computingsociety.co.uk";
  emailField.href = "mailto:hello@computingsociety.co.uk";
}
