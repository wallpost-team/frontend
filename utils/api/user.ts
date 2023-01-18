import { IUser } from "./types";

export const getUser = async () => {
  try {
    const user = $fetch<IUser>("/api/user", {
      credentials: "include",
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};
