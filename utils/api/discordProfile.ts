export const getDiscordProfile = async () => {
  try {
    const discordProfile = await $fetch("/api/discord/user", {
      credentials: "include",
    });
    return discordProfile;
  } catch (err) {
    console.log(err);
  }
};
