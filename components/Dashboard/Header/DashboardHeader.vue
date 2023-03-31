<script lang="ts" setup>
const { discordProfile } = useDiscordProfile();
</script>

<template>
  <div class="flex align-middle justify-between px-5 py-2.5">
    <div class="text-2xl font-bold">WallPost</div>
    <UserDropdown v-if="discordProfile" v-bind="discordProfile" />
  </div>
</template>
