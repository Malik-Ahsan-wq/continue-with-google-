import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const providers = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
  }),
];

export const authOptions: NextAuthOptions = {
  providers,
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        if ("email" in profile && typeof profile.email === "string")
          token.email = profile.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.email && session.user) session.user.email = token.email as string;
      return session;
    },
  },
};
