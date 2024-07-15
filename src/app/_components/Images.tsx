import Image from "next/image";
import { db } from "~/server/db";

const Images = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="gap-400 flex flex-wrap justify-center gap-12 p-4">
      {images.map((image) => (
        <div
          className="flex w-[200px] h-[320px] flex-col rounded-xl bg-purple-500"
          key={image.id}
        >
          <div className="relative h-4/6">
            <Image
              src={image.url}
              fill
              alt="Image"
              className="rounded-t-lg object-cover"
            />
          </div>
          <div className="flex items-center h-2/6 p-4">
            <h1 className="text-white text-sm font-thin">{image.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;
