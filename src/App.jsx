import { Routes, Route, Navigate } from "react-router-dom";
import { useSession } from "./lib/auth-client";

import Login from "./pages/Login";
import DashBoardPage from "./pages/DashBoardPage";

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

      <Route
        path="/dashboard"
        element={
          session ? <DashBoardPage /> : <Navigate to="/login" />
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