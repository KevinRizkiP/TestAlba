import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logins from "./pages/Logins";
import Profile from "./pages/Profile";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logins" element={<Logins />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
