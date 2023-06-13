/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img
            src={
              session?.user?.image ||
              "https://lh3.googleusercontent.com/a/AAcHTtfc7dU5zAt-TL7Ko22sZN4WjRtDUer419NxosCNAQ=s96-c"
            }
            alt="userImage"
            className="w-6 h-6 rounded-r-md"
          />
          <span className="px-3 font-semibold select-none">
            {session?.user?.name}
          </span>
        </div>
      </div>
    </Layout>
  );
}
