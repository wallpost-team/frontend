<script lang="ts" setup>
const { initAuth } = useAuth();
onBeforeMount(initAuth);
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
