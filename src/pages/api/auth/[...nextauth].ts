import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { Session, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "../../../../lib/mongodb";

const adminEmails = ["valentingeorgiev1996@gmail.com"];

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  // callbacks: {
  //   session: (session: Session) => {
  //     if (adminEmails.includes(session?.user?.email || "bgtsbqwe@gmail.com")) {
  //       return session;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
};

// export async function isAdminRequest(req: any, res: any) {
//   const session: any = await getServerSession(req, res, authOptions as any);
//   if (!adminEmails.includes(session?.user?.email)) {
//     res.status(401);
//     res.end();
//     throw "not an admin";
//   }
// }

export default NextAuth(authOptions);
