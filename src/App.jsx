import { Routes, Route, Navigate } from "react-router-dom";
import { useSession } from "./lib/auth-client";

import Login from "./pages/Login";
import DashBoardPage from "./pages/DashBoardPage";
import RepositaryPage from "./pages/RepositaryPage";
import SettingPage from "./pages/SettingPage";

function App() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={
          session ? <Navigate to="/dashboard" /> : <Login />
        }
      />
  <Route path="/repository" element={<RepositaryPage />} />
      <Route
        path="/dashboard"
        element={
          session ? <DashBoardPage /> : <Navigate to="/login" />
        }
      />

             <Route
        path="/settings"
        element={
          session ? <SettingPage /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/"
        element={
          <Navigate
            to={session ? "/dashboard" : "/login"}
          />
        }
      />
    </Routes>
  );
}

export default App;