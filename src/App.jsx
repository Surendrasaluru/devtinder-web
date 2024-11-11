import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import LoginPage from "./components/LoginPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Requests from "./components/Requests";
import Connections from "./components/Connections";
import Quotebox from "./components/Quotebox";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/quotes" element={<Quotebox />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
