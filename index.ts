import { listenAndServe, ServerRequest } from "https://deno.land/std@v0.51.0/http/server.ts";
import { createRouter, AugmentedRequest, createRouteMap, textResponse, jsonResponse } from "https://deno.land/x/reno@v1.0.0-alpha.1/reno/mod.ts";

export const routes = createRouteMap([
	["/", () => textResponse("Hello, World!")],
	["/news/action", () => jsonResponse([
		{ title: "Test 1", description: "hi" },
		{ title: "Test 2", description: "hey!" }
	]),
	["/gamemodes", () => jsonResponse([
		{ title: "Test 1", description: "hi" },
		{ title: "Test 2", description: "hey!" }
	])
]);

const router = createRouter(routes);
(async () => {
	console.log("Listening for requests...");
	await listenAndServe(":8001", async (req: ServerRequest) => {
		try {
			const res = await router(req);
			return req.respond(res);
		} catch (e) {
			return req.respond(e);
		}
	});
})();