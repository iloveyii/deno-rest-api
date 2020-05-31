import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const port = 5555;
const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());
router.get("/api/v1/users", ({ response }: { response: any }) => {
  response.body = "Hello world!";
});

console.log(`Server listening on port ${port}`);
await app.listen({ port });
