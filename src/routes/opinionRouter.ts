import express from "express";
import opinionController from "../controllers/opinionController";

const router = express.Router();

router
  .route("/")
  .post(opinionController.createOne)
  .get(opinionController.getAllDangers);

router
  .route("/:id")
  .get(opinionController.getOne)
  .delete(opinionController.deleteOne)
  .patch(opinionController.patchOne);

export default router;
