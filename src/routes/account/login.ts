import { sql } from "@util/db";
import { Router } from "express";

const router = Router();

router.post("/google", async (req, res) => {
	try {
		const result = await sql`select version()`;
		console.log(result);
		
		if(false) {
			res.json({ token: "vbyvkrheh4747er78nhh7w7ea4wn7fn7mfj7aeffn47afojfojm4f48jfj4f84fmemga848" });
		} else {
			res.json({ errorMessage: "auth.submit_required" });
		}
	} catch(e) {
		res.status(400);
		res.json({ errorMessage: "server.internal_error" });
		console.error(e);
	}
});

export default router;