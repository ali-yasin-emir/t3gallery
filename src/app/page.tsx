import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { desc } from "node_modules/drizzle-orm/expressions.cjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="m-12 flex flex-wrap gap-4 py-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div className="flex flex-col gap-4" key={image.id + "-" + index}>
          <div className="relative flex h-48 w-48">
            <Image
              src={image.url}
              fill
              sizes="100%"
              alt="Image"
              className="rounded-lg object-cover"
            />
          </div>
          <div>
            <h1>{image.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-screen flex justify-center items-center bg-slate-600 text-white ">
          <h1 className="mb-12 text-2xl font-thin tracking-wider">Pls sign in to see the gallery</h1>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
      Hello (gallery in progress)
    </main>
  );
}
