<template>
  <header class="bg-white w-full">
    <div class="p-5">
      <RouterLink
        to="/"
        class="flex items-center gap-8 text-black text-2xl font-semibold no-underline transition-colors duration-300 hover:text-[#4f359b]"
      >
        <IconSquareRoundedArrowLeft class="w-8 h-8" />
        Go Home
      </RouterLink>
    </div>
  </header>
</template>

<script>
import { IconSquareRoundedArrowLeft } from "@tabler/icons-vue";
import { RouterLink } from "vue-router";

export default {
  name: "HeaderComponent",
  components: {
    IconSquareRoundedArrowLeft,
    RouterLink,
  },
};
</script>
