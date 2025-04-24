import { Routes, Route } from "react-router-dom";
import LoginForm from "./login";
import RegisterForm from "./register1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
    </Routes>
  );
}

export default App;
