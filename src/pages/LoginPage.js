import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import royal_logo_only from "../Images/royal_logo_only.png";
import logo from "../Images/logo-name.png";
import login_background from "../Images/login_background.png";
import { FcGoogle } from "react-icons/fc";

function LoginPage() {
  const navigate = useNavigate(); // Create a navigate function

  const handleGoogleLogin = () => {
    // Here you would typically handle Google login authentication
    // For now, we'll just redirect to the home page after clicking
    navigate("/");
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <img
        src={login_background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay and Content */}
      <div className="relative z-10">
        {/* Gradient Overlay */}
        <div className="h-12 bg-gradient-to-b from-[#36188d] via-[#2c1475] to-black flex justify-center items-center">
          <img src={royal_logo_only} alt="Royal Logo" className="h-14" />
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Additional Content */}
        <div className="flex justify-center align-middle mt-24">
          <div className="backdrop-blur-sm w-3/12 rounded-lg">
            <div className="p-8 flex justify-center items-center flex-col">
              <img src={royal_logo_only} alt="Royal Logo" />
              <img src={logo} alt="Logo" />
              <button onClick={handleGoogleLogin}>
                {" "}
                {/* Google login button handler */}
                <div className="flex gap-4 pt-20">
                  <div>
                    <FcGoogle className="h-12 w-12" />
                  </div>
                  <div>
                    <h2 className="text-yellow-400 text-2xl">
                      Login With Google
                    </h2>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
