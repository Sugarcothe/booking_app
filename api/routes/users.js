import express from "express";
import {
  deleteUser,
  getallUser,
  getoneUser,
  updatedUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("You are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("You are logged in, and you can delete your account");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Hello Admin, You are logged in, and you can delete all accounts");
});

// UPDATE
router.put("/:id", updatedUser);

// DELETE
router.delete("/:id", deleteUser);

// GET
router.get("/:id", getoneUser);

// GET ALL
router.get("/", getallUser);

export default router;
