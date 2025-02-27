// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { Document } from "@langchain/core/documents";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// export const aiSummariseCommit = async (diff: string) => {
//   try {
//     const response = await model.generateContent([
//       `You are an expert programmer, and you are trying to summarize a git diff.
//         Reminders about the git diff format:
//         A line starting with \`+\` means it was added.
//         A line starting with \`-\` means that line was deleted.
//         A line that starts with neither \`+\` nor \`-\` is context.

//         EXAMPLE SUMMARY COMMENTS:
//         * Raised the amount of returned recordings from \`10\` to \`100\` [packages/server/recordings_api.ts]
//         * Fixed a typo in the GitHub action name [.github/workflows/gpt-commit-summarizer.yml]
//         * Moved the \`octokit\` initialization to a separate file [src/octokit.ts]

//         Most commits will have fewer comments than this example.
//         The last comment does not include file names when there are too many.
//         `,
//       `Summarize this git diff:\n\n${diff}`,
//     ]);

//     // Properly extract the content
//     const text = await response.response.text();

//     if (!text) {
//       console.warn("Empty response received from Gemini API.");
//       return "No summary generated.";
//     }

//     return text;
//   } catch (error) {
//     console.error("Error generating summary:", error);
//     return "Error generating summary.";
//   }
// };
// // export const aiSummariseCommit = async (diff: string) => {
// //   //https://github.com/docker/genai-stack/commit/<commithash>.diff
// //   const response = await model.generateContent([
// //     `You are an expert programmer, and you are trying to summarize a git diff.
// //     Reminders about the git diff format:For every file, there are a few metadata lines, like (for example):
// // \`\`\`
// // diff --git a/lib/index.js b/lib/index.js
// // index aadf691..bfef603 100644
// // --- a/lib/index.js
// // +++ b/lib/index.js
// // \`\`\`
// // This means that \`lib/index.js\` was modified in this commit. Note that this is only an example.
// // Then there is a specifier of the lines that were modified.
// // A line starting with \`+\` means it was added.
// // A line that starting with \`-\` means that line was deleted.
// // A line that starts with neither \`+\` nor \`-\` is code given for context and better understanding.
// // It is not part of the diff.
// // [...]
// // EXAMPLE SUMMARY COMMENTS:
// // \`\`\`
// // * Raised the amount of returned recordings from \`10\` to \`100\` [packages/server/recordings_api.ts], [packages/server/constants.ts]
// // * Fixed a typo in the github action name [.github/workflows/gpt-commit-summarizer.yml]
// // * Moved the \`octokit\` initialization to a separate file [src/octokit.ts], [src/index.ts]
// // * Added an OpenAI API for completions [packages/utils/apis/openai.ts]
// // * Lowered numeric tolerance for test files
// // \`\`\`
// // Most commits will have less comments than this examples list.
// // The last comment does not include the file names,
// // because there were more than two relevant files in the hypothetical commit.
// // Do not include parts of the example in your summary.
// // It is given only as an example of appropriate comments.`,
// //     `Please summarize the following diff file:\n\n ${diff}`,
// //   ]);
// //   return response.response.text();
// // };

// export async function summarizeCode(doc: Document) {
//   console.log("getting summary for", doc.metadata.source);
//   try {
//     const code = doc.pageContent.slice(0, 10000);
//     const response = await model.generateContent([
//       `You are an intelligent senior software engineer who specializes in onboarding junior software engineers onto projects.
//     You are onboarding a junior software engineer and explaining to them the purpose of the ${doc.metadata.source} file.
//     Here is the code:
//     ${code}
//     Give a summary no more than 100 words of the code above`,
//     ]);
//     return response.response.text();
//   } catch (error) {
//     return "";
//   }
// }

// export async function generateEmbedding(summary: string) {
//   const model = genAI.getGenerativeModel({
//     model: "text-embedding-004",
//   });
//   const result = await model.embedContent(summary);
//   const embedding = result.embedding;
//   return embedding.values;
// }
// console.log(await generateEmbedding('Hello, world!'));

import Bottleneck from "bottleneck";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Document } from "@langchain/core/documents";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Create a rate limiter that allows 5 requests per minute
const limiter = new Bottleneck({
  maxConcurrent: 1, // Only one request at a time
  minTime: 1000, // 12 seconds per request (60 per minute)
});

export const aiSummariseCommit = async (diff: string) => {
  return limiter.schedule(async () => {
    try {
      const response = await model.generateContent([
        `You are an expert programmer, and you are trying to summarize a git diff.
          Reminders about the git diff format:
          A line starting with \`+\` means it was added.
          A line starting with \`-\` means that line was deleted.
          A line that starts with neither \`+\` nor \`-\` is context.

          EXAMPLE SUMMARY COMMENTS:
          * Raised the amount of returned recordings from \`10\` to \`100\` [packages/server/recordings_api.ts]
          * Fixed a typo in the GitHub action name [.github/workflows/gpt-commit-summarizer.yml]
          * Moved the \`octokit\` initialization to a separate file [src/octokit.ts]

          Most commits will have fewer comments than this example.
          The last comment does not include file names when there are too many.
          `,
        `Summarize this git diff:\n\n${diff}`,
      ]);

      const text = await response.response.text();
      return text || "No summary generated.";
    } catch (error) {
      console.error("Error generating summary:", error);
      return "Error generating summary.";
    }
  });
};

export async function summarizeCode(doc: Document) {
  console.log("Getting summary for", doc.metadata.source);
  return limiter.schedule(async () => {
    try {
      const code = doc.pageContent.slice(0, 10000);
      const response = await model.generateContent([
        `You are an intelligent senior software engineer who specializes in onboarding junior software engineers onto projects.
        You are onboarding a junior software engineer and explaining to them the purpose of the ${doc.metadata.source} file.
        Here is the code:
        ${code}
        Give a summary no more than 100 words of the code above`,
      ]);
      return response.response.text();
    } catch (error) {
      console.error("Error summarizing code:", error);
      return "";
    }
  });
}

export async function generateEmbedding(summary: string) {
  return limiter.schedule(async () => {
    const embeddingModel = genAI.getGenerativeModel({
      model: "text-embedding-004",
    });
    const result = await embeddingModel.embedContent(summary);
    return result.embedding.values;
  });
}
