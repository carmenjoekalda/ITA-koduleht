import React, { useState, useContext, useEffect } from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Admin.css";
import { useAuth }  from "../AuthContext";import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  // If already authenticated, redirect to the admin page
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(username, password);
    if (result.success) {
      navigate("/admin");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <NavigationBar />
      <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
        <div style={{ height: "30vh", width: "30vw" }}>
          <h1 className="p-0">Sisselogimine</h1>
          <div
            style={{ height: "30vh", width: "30vw", border: "solid" }}
            className="m-0 p-0"
          >
            <div className="bg-dark" style={{ height: "4vh" }}>
              <h3 className="text-white p-3">Autoriseerimine</h3>
            </div>
            <div
              className="d-flex align-items-center w-100 flex-column "
              style={{ width: "30%" }}
            >
              <form className="p-0 m-0" onSubmit={handleSubmit}>
                <h2 className="pt-5">Kasutajatunnus</h2>
                <input
                  type="text"
                  placeholder="eesnimi.perekonnanimi@voco.ee"
                  className="form-control logininp"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <h2>Parool</h2>
                <input
                  type="password"
                  placeholder="********"
                  className="form-control logininp"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}

                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="siseneBtn">
                    sisene
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminLogin;