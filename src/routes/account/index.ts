import { Router } from "express";
import loginRoute from "@routes/account/login";

const router = Router();

router.use("/login", loginRoute);

router.get("/", (req, res) => {
	res.status(400);
	res.json({ errorCode: "auth.unauthorized" });
});

router.post("/submit", (req, res) => {
	switch(req.body.fd) {

	}
});

export default router;