import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const { name } = params;
  return new Response(JSON.stringify({
    message: `Hello ${name}`,
  }));
};
