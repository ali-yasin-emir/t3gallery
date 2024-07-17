const PhotoModal = ({
  params: { id: photoId },
}: {
  params: { id: string };
}) => {
  return <div className="h-24">{photoId}</div>;
};

export default PhotoModal;
