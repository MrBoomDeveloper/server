import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.send({
		errorMessage: "Unauthorized!"
	});
});

router.get("/:id", (req, res) => {
	res.send({
		errorMessage: `Failed to find ${req.params.id}'s profile.`
	});
});

router.post("/:id/friend", (req, res) => {
	res.send({
		errorMessage: `Failed to add ${req.params.id} to friends.`
	});
});

export default router;