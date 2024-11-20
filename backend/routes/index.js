import { Router } from "express";
import {
  createCard,
  getCards,
  // getSingleCard,
} from "../controllers/cardController.js";

const router = Router();

router.get("/cards", getCards);
router.post("/cards", createCard);
// router.get("/cards/:title", getSingleCard);

export default router;
