<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <h3>{{ post.title }}</h3>
      <div class="post-body">
        <div class="post-info">
          <p>{{ post.body }}</p>
        </div>
        <div class="post-comments">
          <h2>Comments</h2>
          <div class="single-comment">
            <div class="user-img">
              <img src="https://picsum.photos/150" alt="user-pic" />
            </div>
            <div class="user-info">
              <h2>Leyla Selim</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                tenetur, quo tempore quisquam quibusdam autem sed alias,
                eligendi accusamus suscipit magni debitis nobis veniam ut eius,
                accusantium odio dolorum nulla.
              </p>
            </div>
          </div>
          <div class="single-comment">
            <div class="user-img">
              <img src="https://picsum.photos/150" alt="user-pic" />
            </div>
            <div class="user-info">
              <h2>Leyla Selim</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                tenetur, quo tempore quisquam quibusdam autem sed alias,
                eligendi accusamus suscipit magni debitis nobis veniam ut eius,
                accusantium odio dolorum nulla.
              </p>
            </div>
          </div>
          <div class="single-comment">
            <div class="user-img">
              <img src="https://picsum.photos/150" alt="user-pic" />
            </div>
            <div class="user-info">
              <h2>Leyla Selim</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                tenetur, quo tempore quisquam quibusdam autem sed alias,
                eligendi accusamus suscipit magni debitis nobis veniam ut eius,
                accusantium odio dolorum nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="close-btn">
        <IconSquareRoundedX @click="close" />
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
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 1024px;
  height: 60rem;
  overflow-y: auto;
}

.modal-content h3 {
  font-size: 2.4rem;
  font-weight: 500;
  margin: 0;
}

.post-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.post-comments {
  border-left: 1px solid #d8d9dd;
  padding-left: 2rem;
  overflow-y: auto;
}

.post-comments h2 {
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 2rem;
}

.single-comment {
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  margin-top: 2rem;
}

.user-img {
  width: 4.8rem;
  height: 4.8rem;
}

.user-img img {
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 5rem;
}

.user-info h2 {
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0;
}

.user-info p {
  font-size: 1.4rem;
  font-weight: 400;
}

.post-info {
  overflow-y: visible;
}

.post-info p {
  font-size: 1.4rem;
  font-weight: 400;
}

.close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
}

.close-btn svg {
  width: 2.4rem;
  height: 2.4rem;
  color: #26303e;
}
</style>
