import { PrismaClient } from "@prisma/client";

const recipiesRoute = async (req, res) => {
  const prisma = new PrismaClient();
  const recipies = await prisma.recipe.findMany();
  res.json(recipies);
  res.status(200).end();
};

export default recipiesRoute;
