# Shrinklyy

Shrinklyy is a URL shortening service built with the T3 stack, designed to make long URLs shorter and more manageable. It offers a seamless user experience with secure authentication, database management, and validation, leveraging modern technologies like Next.js, tRPC, and Prisma.

## Tech Stack

This project is built using the **T3 Stack**, a powerful combination of technologies that provide full flexibility and scalability.

- **Next.js**: The React framework for production, providing server-side rendering and API routes.
- **NextAuth**: For secure authentication with support for multiple providers.
- **tRPC**: Type-safe API development with minimal boilerplate.
- **Prisma**: ORM for type-safe database access.
- **PostgreSQL**: The relational database used for storing URLs, user sessions, and other data.
- **Zod**: For schema validation and TypeScript-first approach to runtime type checking.

## Features

- **URL Shortening**: Convert long URLs into short, shareable links.
- **User Authentication**: Secure login using NextAuth with different authentication providers.
- **Custom Links**: Users can create custom short links with their own preferred alias.
- **Analytics**: Track click counts and other analytics on shortened URLs.
- **Validation**: Ensure that all inputs, like URLs and custom aliases, meet the required criteria using Zod validation.
- **API Endpoints**: Expose API routes using tRPC for fast, type-safe communication between the frontend and backend.

## Prerequisites

To run the project locally, ensure you have the following tools installed:

- Node.js (v18 or later)
- PostgreSQL (set up a local database or use a remote instance)
- Yarn or npm (preferred package manager)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/shrinklyy.git
cd shrinklyy
2. Install Dependencies
bash
Copy code
yarn install
3. Set Up Environment Variables
Create a .env file at the root of the project with the following variables:

bash
Copy code
DATABASE_URL=postgresql://user:password@localhost:5432/shrinklyy
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000
4. Migrate the Database
Run Prisma migrations to set up the database schema:

bash
Copy code
npx prisma migrate dev
5. Start the Development Server
Run the application in development mode:

bash
Copy code
yarn dev
The app should now be running at http://localhost:3000.

Contributing
Feel free to contribute by opening an issue or submitting a pull request! Make sure to follow the contribution guidelines.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

vbnet
Copy code

You can adjust the instructions based on your actual setup (e.g., custom environment variables or additional dependencies).





