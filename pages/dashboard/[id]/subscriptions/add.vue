<script lang="ts" setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <NuxtLayout>
    <div class="container-md mx-auto">
      <div class="flex flex-col gap-2">
        <div class="text-2xl font-bold">Add subscription</div>
        <DashboardSubscriptionsAddPickSocialNetwork />
      </div>
    </div>
  </NuxtLayout>
</template>
