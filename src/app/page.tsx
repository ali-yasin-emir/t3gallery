import { SignedIn, SignedOut } from "@clerk/nextjs";

import Images from "./_components/Images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="bg-purple-300 text-black">
      <SignedOut>
        <div className="flex items-center justify-center bg-slate-600 text-white">
          <h1 className="text-2xl font-thin tracking-wider">
            Pls sign in to see the gallery
          </h1>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
