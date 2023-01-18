<script lang="ts" setup>
const login = () => {
  const oauthPopup = window.open(
    `/api/auth/discord/redirect`,
    "DiscordAuthPopup",
    "location=yes,height=570,width=520,scrollbars=yes,status=yes"
  );
  const oauthTimer = setInterval(() => {
    if (!oauthPopup) {
      oauthTimer && clearInterval(oauthTimer);
      return;
    }
    const currentHref = oauthPopup.location.href;
    if (!currentHref) {
      return;
    }

    const currentUrl = new URL(currentHref);
    if (currentUrl.pathname.split("/").at(-1) === "okay") {
      oauthPopup.close();
      initAuth();
      navigateTo("/dashboard");
    }
  }, 500);
};
const { discordProfile } = useDiscordProfile();
const { initAuth, isAuthenticated } = useAuth();
</script>

<template>
  <div class="flex align-middle justify-between">
    <div class="text-2xl font-bold text-gradient">WallPost</div>
    <div class="flex gap-x-5 text-white-600">
      <NuxtLink to="/">Support server</NuxtLink>
      <div v-if="isAuthenticated">Authenticated!!</div>
      <button v-else @click="login">Login</button>
    </div>
  </div>
</template>
