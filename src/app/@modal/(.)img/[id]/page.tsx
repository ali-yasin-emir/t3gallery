import { getImage } from "~/server/queries";

const PhotoModal = async ({
  params: { id: photoId },
}: {
  params: { id: string };
}) => {
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) {
    throw new Error("Invalid photo ID");
  }

  const image = await getImage(idAsNumber);

  return (
    <div className="">
      <img className="w-96" src={image.url} alt={image.name} />
    </div>
  );
};

export default PhotoModal;
