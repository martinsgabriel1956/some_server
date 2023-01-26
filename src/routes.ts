import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// Login
router.post("/login", (req, res) => {});

// Register Ong

router.post("/ong/register", (req, res) => {
  res.send("Hello World!");
});

// List Ong

router.get("/ong/:id", (req, res) => {});

// List all cases of user

router.get("/ong/all", (req, res) => {});

// Register of Case

router.post("/case/register", (req, res) => {
  res.send("Hello World!");
});

// Delete of Case

router.delete("/case/:id", (req, res) => {});

// List Specific Case

router.get("/case/:id", (req, res) => {
  res.send("Hello World!");
});

// Update of Case

router.put("/case/:id", (req, res) => {
  res.send("Hello World!");
});

export { router };
