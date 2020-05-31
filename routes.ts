import { Router } from "https://deno.land/x/oak/mod.ts";
import { getUsers, getUser } from "./users.ts";

const router = new Router();

router.get("/api/v1/users", getUsers);
router.get("/api/v1/users/:id", getUser);

export default router;
