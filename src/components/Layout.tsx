import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import { useState } from "react";
import Logo from "@/components/Logo";
import { FcGoogle } from "react-icons/fc";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-bgGray w-screen h-screen flex items-center">
        <div className="select-none absolute left-5 top-5 text-blue-950 flex flex-row gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
          <p className="font-semibold self-center text-2xl">E-Admin</p>
        </div>
        <div className="text-center w-full flex items-center justify-center">
          <button
            onClick={() => signIn("google")}
            className="bg-blue-950 p-2 px-4 rounded-lg flex flex-row self-center text-white"
          >
            Login with Google
            <FcGoogle className="self-center ml-2 w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bgGray min-h-screen ">
      <div className="md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            color="black"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6 ">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} />
        <div className="flex-grow p-4">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
