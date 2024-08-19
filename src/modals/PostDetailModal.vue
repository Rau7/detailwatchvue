<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
    @click.self="close"
  >
    <div class="relative bg-white p-8 rounded-lg w-full max-w-4xl h-[600px]">
      <h3 class="text-3xl font-medium mb-4">{{ post.title }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div class="overflow-auto post-body">
          <p class="text-lg font-normal">
            {{ post.body }} Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Dolorum optio hic deserunt, alias reprehenderit non facilis
            quam tempora dicta adipisci, id obcaecati? Ipsum omnis eligendi
            necessitatibus tempora, esse corrupti praesentium! Magni, at quidem
            dolore repellendus quasi, quia quaerat voluptatem nostrum dolorem
            doloremque neque totam debitis, sunt blanditiis quisquam dolores
            deserunt ut ad laborum soluta facere? Possimus obcaecati modi
            necessitatibus repellendus.
          </p>
        </div>
        <div class="border-l border-gray-300 pl-6 overflow-y-auto comments">
          <h2 class="text-2xl font-semibold mb-8">Comments</h2>
          <div class="flex flex-col space-y-6">
            <div class="flex gap-4 mb-6 comment-item">
              <div class="w-12 h-12">
                <img
                  src="https://picsum.photos/150"
                  alt="user-pic"
                  class="w-12 h-12 rounded-full max-w-none"
                />
              </div>
              <div>
                <h2 class="text-lg font-medium">Leyla Selim</h2>
                <p class="text-lg font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error tenetur, quo tempore quisquam quibusdam autem sed alias,
                  eligendi accusamus suscipit magni debitis nobis veniam ut
                  eius, accusantium odio dolorum nulla.
                </p>
              </div>
            </div>
            <div class="flex gap-4 mb-6 comment-item">
              <div class="w-12 h-12">
                <img
                  src="https://picsum.photos/150"
                  alt="user-pic"
                  class="w-12 h-12 rounded-full max-w-none"
                />
              </div>
              <div>
                <h2 class="text-lg font-medium">Leyla Selim</h2>
                <p class="text-lg font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error tenetur, quo tempore quisquam quibusdam autem sed alias,
                  eligendi accusamus suscipit magni debitis nobis veniam ut
                  eius, accusantium odio dolorum nulla.
                </p>
              </div>
            </div>
            <div class="flex gap-4 mb-6 comment-item">
              <div class="w-12 h-12">
                <img
                  src="https://picsum.photos/150"
                  alt="user-pic"
                  class="w-12 h-12 rounded-full max-w-none"
                />
              </div>
              <div>
                <h2 class="text-lg font-medium">Leyla Selim</h2>
                <p class="text-lg font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error tenetur, quo tempore quisquam quibusdam autem sed alias,
                  eligendi accusamus suscipit magni debitis nobis veniam ut
                  eius, accusantium odio dolorum nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-4 right-4 cursor-pointer">
        <IconSquareRoundedX @click="close" class="w-6 h-6 text-gray-800" />
      </div>
    </div>
  </div>
</template>

<script>
import { IconSquareRoundedX } from "@tabler/icons-vue";

export default {
  props: {
    post: Object,
  },
  components: {
    IconSquareRoundedX,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.post-body {
  overflow-y: auto;
  max-height: 100%;
  margin-bottom: 20px;
}

.comments {
  overflow-y: auto;
  max-height: 100%;
  margin-bottom: 20px;
}
</style>
