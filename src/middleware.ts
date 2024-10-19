// Middleware for NextAuth (generic file for NextJS)
// If request matches '/protected' -> ensure use logged in

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/protected"],
};
