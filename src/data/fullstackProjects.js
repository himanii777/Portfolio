// src/data/fullstackProjects.js

export const fullstackProjects = [
  {
    id: "mern-auth",
    slug: "mern-auth",
    title: "MERN Authentication System",
    category: "Full-Stack / Web App",
    shortTagline:
      "End-to-end authentication with JWT, OTP verification, secure cookies, and protected routes.",
    shortDescription:
      "A MERN-based authentication system featuring email OTP verification, password reset, protected routes, and JWT tokens stored in httpOnly cookies.",
    longDescription:
      "This project implements a complete authentication workflow using the MERN stack. Users can register, verify their email through OTP, log in, reset their password, and access protected routes. The backend uses Express, MongoDB, bcrypt, JWT, and Nodemailer to ensure secure credential handling. The frontend demonstrates how to manage authenticated state, redirect logic, and protected views. It follows real-world authentication patterns used in production-grade web apps.",
    approach: [
      "Implemented a secure authentication flow using JWT stored in httpOnly cookies to prevent XSS token theft.",
      "Designed a Mongoose User schema with fields for OTP verification, expiry, and password security.",
      "Integrated Nodemailer to deliver OTP codes for both account verification and password reset.",
      "Created protected API routes using authentication middleware that validates user JWTs.",
      "Built frontend forms for registration, login, email verification, and password reset.",
      "Structured the API using clear route separation for auth, user info, and OTP operations."
    ],
    githubUrl: "https://github.com/himanii777/MERN_AUTHENTICATION",
    extraLinks: [],
    images: [
      {
        title: "Login Screen",
        description:
          "User login form that triggers authentication and sets the secure JWT cookie.",
      },
      {
        title: "Registration + OTP Verification",
        description:
          "New users receive an OTP email and must verify before accessing protected content.",
      },
      {
        title: "Password Reset",
        description:
          "Request OTP, verify identity, and create a new password using secure flows.",
      }
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "bcrypt",
      "Nodemailer"
    ]
  },

  {
    id: "netflix-data-service",
    slug: "netflix-data-service",
    title: "Netflix Data Service (Spring Boot + PostgreSQL)",
    category: "Backend API / Spring Boot",
    shortTagline:
      "REST API over a PostgreSQL-backed Netflix catalog using JPA and layered architecture.",
    shortDescription:
      "A Spring Boot backend service that loads Netflix dataset into PostgreSQL and exposes filter/search APIs using a clean JPA service architecture.",
    longDescription:
      "This project demonstrates how to build a robust backend service using Spring Boot, PostgreSQL, and JPA. A Netflix dataset is ingested into the database and mapped to a JPA entity. The API exposes multiple query endpoints supporting filtering by type, rating, country, year, and text search. The project adopts a layered architecture separating controllers, services, and repositories to maintain clean abstraction and maintainability.",
    approach: [
      "Defined a Netflix catalog JPA entity mapping all relevant CSV columns such as title, type, country, and rating.",
      "Configured PostgreSQL and schema generation through Spring Boot application properties.",
      "Used Spring Data JPA repositories for automatic query generation and custom filtering.",
      "Built a service layer encapsulating catalog logic and providing reusable operations.",
      "Exposed REST endpoints for listing, filtering, and searching titles using query parameters.",
      "Verified functionality using Postman and inspected generated SQL queries from Hibernate."
    ],
    githubUrl:
      "https://github.com/himanii777/Netflix-Data-Service-Spring-Boot-PostgreSQL",
    extraLinks: [],
    images: [
      {
        title: "Database Schema",
        description:
          "PostgreSQL table representing the Netflix catalog mapped from the CSV dataset.",
      },
      {
        title: "API Filtering (Postman)",
        description:
          "Sample API call showing filtered search using query parameters.",
      }
    ],
    tech: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "REST API"]
  }
];
