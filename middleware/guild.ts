export default defineNuxtRouteMiddleware(async (to, from) => {
  const manageableGuilds = await DiscordApi.getManageableGuilds();

  const userHasAccess = manageableGuilds.data.value?.some(
    (guild) => guild.id == to.params.id
  );
  console.log(manageableGuilds.error.value);

  if (!userHasAccess) {
    return navigateTo("/");
  }
});
