<script lang="ts" setup>
export interface ISocialButton {
  type: "vk";
  text: string;
}
const props = defineProps<ISocialButton>();

const typeToStyle = {
  vk: {
    color: { r: 0, g: 119, b: 255 },
    logo: "VK1",
  },
};

const style = {
  ...typeToStyle[props.type],
  logo: new URL(
    `/assets/imgs/socials/${typeToStyle[props.type].logo}.svg`,
    import.meta.url
  ).href,
};
</script>

<template>
  <button
    type="button"
    class="social-button text-white focus:ring-4 focus:outline-none font-medium rounded-md px-4 py-2.5 text-center flex items-center gap-2"
  >
    <img class="w-6 h-6" :src="style.logo" :alt="text" />
    <div>
      {{ text }}
    </div>
  </button>
</template>

<style scoped lang="postcss">
.social-button {
  $r: v-bind("style.color.r");
  $g: v-bind("style.color.g");
  $b: v-bind("style.color.b");

  background-color: rgb($r, $g, $b);

  &:hover {
    background-color: rgba($r, $g, $b, 0.9);
  }
  &:focus {
    --tw-ring-color: rgba($r, $g, $b, 0.5);
  }
}
</style>
