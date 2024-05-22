import { readFile } from "fs";
import { request } from "http";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import {getTextExtractor} from "office-text-extractor";

const extractor = getTextExtractor();

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
// export async function POST(request: Request) {

//   // Get the body of the Request
//   // const body = await request.json();
//     const formData = await request.formData();
//     console.log(formData.get("email"));
//     // get resume file 
//     const resume = formData.get("resume");
//     console.log(resume);
//     const buffer = await readFile(resume);
//   const text = await extractor.extractText({ input: resume, type: 'file' });
   

//   // Do whatever you want
//   return Response.json({ message: "Hello World" }, { status: 200 });
// }


export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    console.log(formData.get("email"));

    const resume = formData.get("resume");

    if (resume && resume instanceof File) {
      // Convert the File to an ArrayBuffer
      const arrayBuffer = await resume.arrayBuffer();
      // Extract text from the ArrayBuffer
      const text = await extractor.extractText({ input: arrayBuffer, type: 'file' });
      // Do whatever you want
      return new Response(JSON.stringify({ message: "Hello World", extractedText: text }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: "Resume file is missing or invalid" }), { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "An error occurred", error: error.message }), { status: 500 });
  }
}
