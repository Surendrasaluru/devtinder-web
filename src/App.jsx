import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
