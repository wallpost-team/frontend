<script lang="ts" setup>
const { data: guilds } = await DiscordApi.getGuilds();
</script>

<template>
  <div class="flex flex-col gap-8 bg-turquoise-100 p-2.5 rounded-md">
    <div class="picker__section">
      <div class="text-2xl font-bold">Pick a server</div>
      <div class="guild-list">
        <NuxtLink to="/dashboard/123">asdasdas</NuxtLink>
        <NuxtLink
          v-for="guild in guilds?.manageable"
          :key="guild.id"
          :to="`/dashboard/${guild.id}`"
        >
          <DashboardGuild v-bind="guild" />
        </NuxtLink>
      </div>
    </div>
    <div class="picker__section">
      <div class="text-xl font-bold">Or invite me to...</div>
      <div class="guild-list">
        <DashboardGuild
          v-for="guild in guilds?.inviteable"
          :key="guild.id"
          v-bind="guild"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.picker__section {
  @apply flex flex-col gap-5;
}
.guild-list {
  @apply flex flex-col gap-2;
}
</style>
