import { DiscordProfile } from "~~/types/DiscordProfile";

export default () => {
  const discordProfile = useState<DiscordProfile | undefined>(
    "discordProfile",
    () => undefined
  );

  const get = async () => {
    const data = await $fetch<DiscordProfile>("/api/discord/user");
    discordProfile.value = data;
  };

  return { discordProfile, getDiscordProfile: get };
};
