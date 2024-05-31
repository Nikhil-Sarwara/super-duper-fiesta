import { readFile } from "fs";
import { request } from "http";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import {getTextExtractor} from "office-text-extractor";

const extractor = getTextExtractor();

const keywords = {
  contact: ['mobile', 'phone', 'address'],
  education: ['education', 'courses'],
  experience: ['experience', 'jobs', 'internship'],
  achievements: ['achievements', 'certifications', 'skills', 'interests']
};

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
     const data=  extractSection(text, keywords);
      return new Response(JSON.stringify({ message: "File Fetched SuccessFully", extractedText: data }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: "Resume file is missing or invalid" }), { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "An error occurred", error: error.message }), { status: 500 });
  }
}


// algorithim


function extractSection(text, sectionKeywords) {
  const sections = {};
  const lines = text.split('\n');
  let currentSection = null;
  for (let line of lines) {

      // section is for section and keywords are diffrent synonyms 
      for (let [section, keywords] of Object.entries(sectionKeywords)) {
          if (keywords.some(keyword => line.toLowerCase().includes(keyword))) {
              currentSection = section;
              // console.log(section)
              if (!sections[currentSection]) {
                  sections[currentSection] = [];
              }
              break;
          }
      }

      // If it's a new section line, we don't add it to the previous section content
      if (currentSection) {
          sections[currentSection].push(line);
      }

  }

  // Convert arrays to strings
  // for (let section in sections) {
  //     sections[section] = sections[section].join('\n').trim();
  // }

  return sections;
}
