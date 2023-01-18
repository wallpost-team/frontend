export const getDiscordProfile = async () => {
  const { data: discordProfile, error } = await useFetch("/api/discord/user", {
    credentials: "include",
  });
  if (error.value) {
    console.error(error.value);
  } else {
    console.log(discordProfile.value);
  }
};
