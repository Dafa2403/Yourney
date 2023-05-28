import React, { Component, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/style.scss";
import "./Font/font.css";

const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
const Login = React.lazy(() => import("./commponents/Admin/login/Login"));
const DefaultLayoutPortal = React.lazy(() =>
  import("./layout/DefaultLayoutPortal")
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route
              exact
              path="/"
              name="Portal"
              element={<DefaultLayoutPortal />}
            />
            <Route path="/adminYourney" name="login" element={<Login />} />
            <Route path="*" name="Admin" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
