export default async function handler(request: Request): Promise<Response> {
  return new Response(
    `Hello from all handler: ${new URL(request.url).pathname}`,
  );
}
