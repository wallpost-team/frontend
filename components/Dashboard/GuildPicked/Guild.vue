<script lang="ts" setup>
export interface IGuild {
  id: string;
  name: string;
  icon: string | null;
}
const props = defineProps<IGuild>();

const iconUrl = computed(() => {
  return `https://media.discordapp.net/icons/${props.id}/${props.icon}`;
});
</script>

<template>
  <div
    class="flex gap-5 items-center group bg-curious-blue p-1.5 rounded-md cursor-pointer"
  >
    <img v-if="icon" class="guild__icon" :src="iconUrl" :alt="name" />
    <div v-else class="guild__icon bg-turquoise"></div>
    <div
      class="text-lg whitespace-nowrap overflow-hidden text-ellipsis text-white"
    >
      {{ name }}
    </div>
  </div>
</template>

<style scoped>
.guild__icon {
  @apply w-12 h-12 rounded-3xl group-hover:rounded-2xl transition-all duration-100 ease-linear;
}
</style>
