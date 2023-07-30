import express from "express";
import bodyParser from "body-parser";
import accountRoute from "@routes/account";
import profileRoute from "@routes/profile";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	console.log("New request at: " + Date.now());
	next();
});

app.get("/", (req, res) => {
	res.json({
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
	res.json({ errorCode: "route.unknown" });
}

app.listen(8080, () => {
	console.log("Server started!");
});
