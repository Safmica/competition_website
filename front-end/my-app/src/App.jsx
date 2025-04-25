import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./login";
import RegisterForm from "./register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
