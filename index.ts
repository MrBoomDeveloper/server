import { serve } from "std/http/server.ts";

function handler(request: Request): Response {
	console.log(JSON.stringify(request));
	return new Response(JSON.stringify(data), {
		status: 200,
    	headers: {
			"content-type": "application/json"
		}
	});
}

const data: News = {
	blog: [
		{
			title: "title",
			message: "idk",
			pinned: true,
			date: 484839394848
		}, {
			title: "hmm",
			pinned: false,
			message: "idkhhhh",
			date: 36346
		}
	]
}

interface News {
	blog: Post[]
}

interface Post {
	title: string,
	message: string,
	date: number,
	pinned: boolean
}

serve(handler);