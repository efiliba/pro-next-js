import NextAuth, { CallbacksOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

const users = [
  {
    id: "1",
    username: "test",
    password: "",
    name: "Tester",
    email: "test@ing.com",
  },
];

const authOptions = {
  callbacks: {
    async signIn({
      profile,
      credentials,
    }: {
      profile?: { login: string };
      credentials?: { username: string };
    }) {
      return profile?.login === "efiliba" || credentials?.username === "test";
    },
  } as unknown as CallbacksOptions,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "elf" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        return (
          users.find(
            ({ username, password }) =>
              username === credentials?.username &&
              password === credentials?.password
          ) || null
        );
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
