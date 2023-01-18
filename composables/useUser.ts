import { getUser } from "~~/utils/api";
import { IUser } from "~~/utils/api/types";

export default () => {
  const user = useState<IUser | undefined>("user", () => undefined);

  const get = async () => {
    const data = await getUser();
    user.value = data;
  };

  return { user, getUser: get };
};
