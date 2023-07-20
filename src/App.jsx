import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { auth } from "./firebase";

function App() {

  const isLoggedIn = auth.currentUser;
  console.log(isLoggedIn);

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;