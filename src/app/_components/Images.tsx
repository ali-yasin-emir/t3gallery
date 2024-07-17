import Image from "next/image";
import Link from "next/link";

import { getMyImages } from "~/server/queries";

const Images = async () => {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-12 p-12">
      {images.map((image) => (
        <div
          className="flex h-[320px] w-[200px] flex-col rounded-xl bg-purple-500"
          key={image.id}
        >
          <Link href={`/img/${image.id}`} className="relative h-4/6">
            <Image
              src={image.url}
              fill
              alt="Image"
              className="rounded-t-lg object-cover"
            />
          </Link>
          <div className="flex h-2/6 items-center p-4">
            <h1 className="text-sm font-thin text-white">{image.name}</h1>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Images;
