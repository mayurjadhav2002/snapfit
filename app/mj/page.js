// app/login/page.js

"use client"; // Ensure this is a client-side component

import { useRouter } from "next/navigation"; // Correct import for App Router
import { useEffect } from "react";

function Page() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is already logged in
    if (localStorage.getItem("loggedIn")) {
      router.push("/mj/dashboard/email-campaign"); // Redirect to dashboard page
    }
    else{
        router.push("/mj/login"); // Redirect to login page
    }
  }, [router]);

  return <div>Redirecting...</div>;
}

export default Page;
