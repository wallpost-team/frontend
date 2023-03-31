<template>
  <div class="bg-ocean-blue">
    <div class="container flex flex-col gap-5 h-screen mx-auto">
      <DashboardHeader />
      <div class="grow">
        <!-- <DashboardSidebar /> -->
        <slot />
      </div>
    </div>
  </div>
</template>
