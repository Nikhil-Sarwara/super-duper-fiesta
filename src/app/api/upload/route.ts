import { request } from "http";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    }
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
  maxDuration: 5,
}


// To handle a GET request to /api
export async function GET() {
  // Do whatever you want
  return Response.json({ message: "Use Post Method to upload file" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request: Request) {

  // Get the body of the Request
  const body = await request.json();

  // Print the body of the Request
  console.log(body);

  // Do whatever you want
  return Response.json({ message: "Hello World" }, { status: 200 });
}