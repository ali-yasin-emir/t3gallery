import "server-only";
import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export const getMyImages = async () => {
  const user = auth();

  if (!user.userId) {
    throw new Error("You must be logged in to view your images");
  }

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
};

export const getImage = async (id: number) => {
  const user = auth();

  if (!user.userId) {
    throw new Error("You must be logged in to view your images");
  }

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) {
    throw new Error("Image not found");
  }

  if (image.userId !== user.userId) {
    throw new Error("You do not have permission to view this image");
  }

  return image;
};
