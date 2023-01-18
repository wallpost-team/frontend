<script lang="ts" setup>
export interface IUserDropdown {
  id: string;
  username: string;
  avatar: string;
}
const props = defineProps<IUserDropdown>();

const avatarUrl = computed(() => {
  return `https://media.discordapp.net/avatars/${props.id}/${props.avatar}`;
});
</script>

<template>
  <div class="flex gap-2 items-center">
    <img class="w-10 rounded-full" :src="avatarUrl" :alt="username" />
    <div class="text-lg">{{ username }}</div>
  </div>
</template>
