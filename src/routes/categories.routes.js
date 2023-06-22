import { Router } from "express";
import prisma from "../db.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const response = await prisma.category.findMany();
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

export default router;
