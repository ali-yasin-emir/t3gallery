import Image from "next/image";
import { desc } from "node_modules/drizzle-orm/expressions.cjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="m-12">
      <div className="mb-12 flex flex-wrap gap-4">
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
      Hello (gallery in progress)
    </main>
  );
}
