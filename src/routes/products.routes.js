import { Router } from "express";
import prisma from "../db.js";

const router = Router();

router.get("/", async (req, res) => {
  const response = await prisma.user.findMany();
  console.log(response);
  res.send("Hello World!");
});

router.post("/", async (req, res) => {
  const response = await prisma.user.create({
    data: req.body,
  });
  res.send(response);
});
export default router;
