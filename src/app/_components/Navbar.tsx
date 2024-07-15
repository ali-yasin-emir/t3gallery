"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-center bg-slate-500 p-4">
      <div className="flex w-[1240px] items-center justify-between">
        <h1 className="text-white">Gallery</h1>
        <div className="flex items-center gap-12">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UploadButton
              appearance={{ button: "bg-purple-500" }}
              endpoint="imageUpload"
              onClientUploadComplete={() => {
                router.refresh();
              }}
            />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
