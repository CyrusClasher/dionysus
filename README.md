# Dionysus

Dionysus is a powerful SaaS application that enables users to index and analyze all files present in a GitHub repository using AI. It provides detailed insights, commit summaries, and AI-driven responses to repository-related queries. Additionally, users can upload meeting recordings to extract key insights, all while leveraging Stripe for credit-based access to its features.

## Features

### 🔍 GitHub Repository Indexing & Analysis
- Index all files in a GitHub repository using the GitHub API.
- AI-powered file analysis using GeminiAPI.
- Retrieve summaries of all commits made to the repository.

### 🛠 Custom Hooks for Enhanced Functionality
- **`useProject`**: Manages and provides project-related data within a React component, leveraging React hooks and local storage.
- **`useRefetch`**: Dynamically refetches active queries using React Query's `useQueryClient` to update the UI without needing a page refresh.

### 💡 AI-Powered Repository Q&A
- Users can ask questions about the repository.
- Queries are transformed into vector embeddings.
- The system retrieves the top 10 most relevant files based on the question vector.
- AI provides responses along with files that need modifications.
- Users can save AI-generated answers for later reference.

### 📂 Meeting Analysis & AI Insights
- Users can upload meeting recordings via Google Firebase Storage.
- AI processes the recordings using Assembly AI to generate summaries, extract key points, and identify potential issues.

### 💳 Stripe-Integrated Credit System
- Users can purchase credits (50 credits = $1) via Stripe.
- Each GitHub file indexing operation consumes 1 credit.

## Tech Stack
- **Frontend**: Next.js, React
- **Authentication**: Clerk
- **Database**: PostgreSQL (via Prisma)
- **Storage**: Firebase
- **AI Integration**: GeminiAPI, Assembly AI
- **Payments**: Stripe
- **Backend & API Handling**: Next.js API routes

## Real-World Application
Dionysus can be highly beneficial in a **tech development environment**, particularly for **engineering teams managing large codebases**. It streamlines code review, facilitates AI-driven repository exploration, and helps developers quickly understand project changes without manually sifting through commit histories. Additionally, it can assist project managers in deriving **actionable insights from meeting discussions**, improving collaboration and decision-making.

## Environment Variables
To run this project, configure the following environment variables:

```env
DATABASE_URL=""
DB_URL="postgresql://neondb_owner:.ap-southeast-1.aws.neon.tech/dionysus?sslmode=require"
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL='/sync-user'
GITHUB_TOKEN=""
GEMINI_API_KEY=""
ASSEMBLYAI_API_KEY=""
STRIPE_SECRET_KEY=""
STRIPE_PUBLISHABLE_KEY=""
STRIPE_WEBHOOK_SECRET=""
NEXT_PUBLIC_APP_URL='https://dionysus-drab.vercel.app/dashboard'
```
