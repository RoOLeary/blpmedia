import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const AuthOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: String(process.env.GITHUB_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
  ],
  secret: process.env.SECRET,
    theme: {
        colorScheme: "auto", // "auto" | "dark" | "light"
        brandColor: "#ffffff", // Hex color code
        logo: "" // Absolute URL to image
    },
    callbacks: {
        async session({ session, token, user }:any): Promise<any> {
          session.user.username = session.user.name
            .split(" ")
            .join("")
            .toLocaleLowerCase();
    
          session.user.uid = token.sub;
          return session;
        },
        async redirect({ url, baseUrl }) {
            const redirUrl = 'https://blpmedia.vercel.app/account'
            return redirUrl;
        }
    }
};
