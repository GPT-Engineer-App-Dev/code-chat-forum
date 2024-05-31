import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/success" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;