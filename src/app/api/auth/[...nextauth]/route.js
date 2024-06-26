import { paths } from "@/config";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Email address",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password",
                },
            },
            async authorize(credentials) {
                console.log("Credentials", credentials);
                // try {
                //     const { email, password } = credentials;

                //     const response = await AuthService.authrizeUser(credentials?.url || 'login', {
                //         email,
                //         password,
                //     });

                //     if (response?.data?.response_code === 200) {
                //         const response_data = {
                //             account: {
                //                 ...response?.data,
                //             },
                //         };

                //         return response_data;
                //     } else {
                //         throw response?.data;
                //     }
                // } catch (error) {
                //     throw new Error(
                //         typeof error === 'string'
                //             ? error
                //             : error?.response_message || 'Unexpected Error!'
                //     );
                // }
            },
        }),
    ],
    session: {
        maxAge: 1 * 60 * 60,
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "credentials") {
                return user;
            }

            return false;
        },
        async jwt({ user, token, trigger, session }) {
            if (user) {
                token = { ...user };
            }

            if (trigger === "update") {
                return {
                    ...token,
                    ...session.user,
                };
            }

            return token;
        },
        async session({ session, token }) {
            session.user = token;

            return session;
        },
    },
    pages: {
        signIn: paths.login,
        signOut: paths.login,
        error: paths.login,
    },
});

export { handler as GET, handler as POST };
