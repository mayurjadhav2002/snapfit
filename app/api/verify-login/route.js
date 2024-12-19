export async function POST(req) {
    const { password, securityText } = await req.json();
  
    // Simulating password and security text verification
    if (password === "THESTrongestAvenger!2334IsME" && securityText === "You DOnt know wHO I am becusae it is a essay dont try to hack") {
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200 }
      );
    }
  
    return new Response(
      JSON.stringify({ success: false, message: "Invalid credentials" }),
      { status: 401 }
    );
  }
  