import express from "express";
import {
  createRoom,
  deleteRoom,
  getallRooms,
  getRoom,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
// CREATE
router.post("/:hotelid", verifyAdmin, createRoom);
// UPDATE
router.put("/:id", verifyAdmin, updateRoom);

// DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getallRooms);

export default router;
