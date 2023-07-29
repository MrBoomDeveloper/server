import express from "express";
import accountRoute from "./src/routes/account.js";
import profileRoute from "./src/routes/profile.js";

const app = express();

app.use((req, res, next) => {
	console.log("New request at: " + Date.now());
	next();
});

app.get("/", (req, res) => {
	res.send({
		status: "ok",
		secret: process.env.DB_HOST || "Not found"
	});
});

app.use("/account", accountRoute);
app.use("/profile", profileRoute);

app.get("*", handleUnknown);
app.post("*", handleUnknown);
app.delete("*", handleUnknown);

function handleUnknown(req, res) {
	res.status(404);
	res.send({ errorCode: "route.unknown" });
}

app.listen(8080);