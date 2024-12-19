import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const uniqueId = searchParams.get("id");


  // Update the company information via the external API
  try {
    const response = await fetch(
      `https://6764024217ec5852caead03d.mockapi.io/company/${uniqueId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            emailOpened: true,
            emailedOpenedOn: new Date().toISOString(), 
        }),
      }
    );

    if (!response.ok) {
      console.error(`Failed to update company: ${response.statusText}`);
    } else {
      console.log(`Company with ID ${uniqueId} updated successfully.`);
    }
  } catch (error) {
    console.error(`Error updating company: ${error.message}`);
  }

  // Serve the 1x1 transparent pixel
  const pixelBuffer = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=",
    "base64"
  );

  return new NextResponse(pixelBuffer, {
    headers: {
      "Content-Type": "image/png",
      "Content-Length": pixelBuffer.length,
    },
  });
}
