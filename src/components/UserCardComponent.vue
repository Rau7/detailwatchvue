<template>
  <div
    class="border border-gray-300 rounded-lg p-4 mb-4 w-full hover:shadow-lg transition-all duration-300 cursor-pointer"
  >
    <div class="flex items-center gap-12 mb-4">
      <img
        src="https://picsum.photos/150"
        alt="user-pic"
        class="w-24 h-24 rounded-full object-cover"
      />
      <div>
        <h3 class="text-xl font-medium text-gray-700">{{ user.name }}</h3>
        <p class="text-base font-light text-gray-500">{{ user.email }}</p>
        <p class="text-base font-light text-gray-500">{{ user.phone }}</p>
      </div>
    </div>
    <div>
      <div class="mb-4">
        <div class="flex items-center gap-3 text-base font-medium">
          <IconMapPinHeart class="w-6 h-6 text-gray-500" />
          <p>Location</p>
        </div>
        <p class="text-base font-light text-gray-500 ml-2">
          Timko sokak no:2 Yenimahalle, Ankara
        </p>
      </div>
      <div class="mb-4">
        <div class="flex items-center gap-3 text-base font-medium">
          <IconBuildingSkyscraper class="w-6 h-6 text-gray-500" />
          <p>Company</p>
        </div>
        <p class="text-base font-light text-gray-500 ml-2">
          {{ user.company.name }}
        </p>
      </div>
      <div>
        <div class="flex items-center gap-3 text-base font-medium">
          <IconWorldShare class="w-6 h-6 text-gray-500" />
          <p>Website</p>
        </div>
        <a
          :href="user.website"
          target="_blank"
          class="text-base font-light text-gray-500 ml-2"
          >{{ user.website }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import {
  IconMapPinHeart,
  IconBuildingSkyscraper,
  IconWorldShare,
} from "@tabler/icons-vue";

export default {
  name: "UserCardComponent",
  components: {
    IconMapPinHeart,
    IconBuildingSkyscraper,
    IconWorldShare,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
