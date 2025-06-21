# Shrinklyy

Shrinklyy <a href="https://trim.nawin.xyz" target="_blank">trim.nawin.xyz</a> is a URL shortening service built with the T3 stack, designed to make long URLs shorter and more manageable. It offers a seamless user experience with secure authentication, database management, and validation, leveraging modern technologies like Next.js, tRPC, and Prisma.

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
- Node.js (v18 or later)
- PostgreSQL (set up a local database or use a remote instance)
- pnpm (preferred package manager)
