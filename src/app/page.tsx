import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/182dfc24-86b6-4a47-b19a-9bb27cdb950f-mm3pnd.jpeg",
  "https://utfs.io/f/7fde19a4-b3d3-48a0-a4b1-17b0ad3e8e33-xdujla.jpeg",
  "https://utfs.io/f/de4b08a6-1aaf-4441-8fc5-683c1ce4313f-h0u3f.jpeg",
  "https://utfs.io/f/c8612333-4190-48f1-8617-9a044fa944aa-9jd1ol.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="m-12">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.name}</h1>
            </div>
          );
        })}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="relative flex h-48 w-48">
            <Image
              src={image.url}
              fill
              sizes="100%"
              alt="Image"
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
