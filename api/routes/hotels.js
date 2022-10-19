import express from "express";
import { createHotel, deleteHotel, getallHotel, getoneHotel, updatedHotel } from "../controllers/hotel.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
// CREATE 
router.post("/", verifyAdmin, createHotel);
// UPDATE
router.put("/:id", verifyAdmin, updatedHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/:id", getoneHotel);

// GET ALL
router.get("/", getallHotel);

export default router;
