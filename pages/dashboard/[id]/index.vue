<script lang="ts" setup>
definePageMeta({
  middleware: ["guild"],
  layout: "dashboard",
});
</script>

<template>
  <NuxtLayout>
    <div class="container-md mx-auto">
      <div class="flex flex-col gap-5">
        <div class="text-2xl font-bold">Subscriptions</div>
        <div class="flex flex-col">
          <button class="bg-curious-blue p-2 rounded-md text-white">
            Add subscription
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
