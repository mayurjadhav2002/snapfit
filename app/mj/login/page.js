"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [password, setPassword] = useState("");
  const [securityText, setSecurityText] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if the user is already logged in
    if (localStorage.getItem("loggedIn")) {
      router.push("/mj/dashboard/email-campaign"); // Redirect to company page
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!password || !securityText) {
      setError("Please enter both password and security text.");
      return;
    }

    // API call to verify login
    const response = await fetch("/api/verify-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, securityText }),
    });

    const data = await response.json();

    if (data.success) {
      localStorage.setItem("loggedIn", "true");
      router.push("/mj/dashboard/email-campaign"); // Redirect to company page
    } else {
      setError(data.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Security Text</label>
            <input
              type="text"
              value={securityText}
              onChange={(e) => setSecurityText(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
