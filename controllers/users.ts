import * as log from "https://deno.land/std/log/mod.ts";
import { users } from "../mocks.ts";
import { User } from "../types.ts";

// @desc Get all users
// @route GT /api/v1/users
export const getUsers = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: users,
  };
};

// @desc Get a single user
// @route GT /api/v1/users/:id
export const getUser = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const user: User | undefined = users.find(
    (user) => user.id == Number(params.id)
  );

  if (user) {
    response.status = 200;
    response.body = {
      success: true,
      data: user,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      data: "no user",
    };
  }
};

// @desc Create a single user
// @route POST /api/v1/users
export const createUser = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const user = body.value.user;
  log.info(JSON.stringify(user));

  // If body has data
  if (body) {
    const id = users[users.length - 1].id + 1;
    user.id = id;
    users.push({ ...user });
    response.status = 201;
    response.body = {
      success: true,
      data: user,
    };
  } else {
    response.status = 400;
    response.body = {
      success: false,
      msg: "no data",
    };
  }
};
