import express from "express";
import { createHotel, deleteHotel, getallHotel, getoneHotel, updatedHotel } from "../controllers/hotel.js";


const router = express.Router();
// CREATE 
router.post('/', createHotel)
// UPDATE
router.put("/:id", updatedHotel);

// DELETE
router.delete("/:id", deleteHotel);

// GET
router.get("/:id", getoneHotel);

// GET ALL
router.get("/", getallHotel);

export default router;
