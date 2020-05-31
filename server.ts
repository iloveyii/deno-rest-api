import { Application } from "https://deno.land/x/oak/mod.ts";
import * as log from "https://deno.land/std/log/mod.ts";

import router from "./routes.ts";

const port = 5555;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

log.info(`Server listening on port ${port}`);
await app.listen({ port });
