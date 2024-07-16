import Image from "next/image";

import { getMyImages } from "~/server/queries";

const Images = async () => {
  const images = await getMyImages();

  return (
    <div className="gap-400 flex flex-wrap justify-center gap-12 p-4">
      {images.map((image) => (
        <div
          className="flex h-[320px] w-[200px] flex-col rounded-xl bg-purple-500"
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
          <div className="flex h-2/6 items-center p-4">
            <h1 className="text-sm font-thin text-white">{image.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;
