import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.status(400);
	res.send({ errorCode: "auth.unauthorized" });
});

router.post("/login", async (req, res) => {
	switch (req.headers.method) {
		case "google":
			res.status(400);
			res.send({ errorCode: "auth.method.unavailable" });
			break;
		
		case "gamejolt":
			res.status(400);
			await fetch("https://gamejolt.com");
			res.send({ errorCode: "auth.invalidCredentials" });
			break;
		
		default:
			res.send({ errorCode: "auth.method.unknown" });
	}
});

export default router;