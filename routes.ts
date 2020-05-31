import { Router } from "https://deno.land/x/oak/mod.ts";
import { getUsers, getUser, createUser } from "./controllers/users.ts";

const router = new Router();

router.get("/api/v1/users", getUsers);
router.get("/api/v1/users/:id", getUser);
router.post("/api/v1/users", createUser);

export default router;
