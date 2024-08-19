<template>
  <div class="user-card">
    <div class="user-card-heading">
      <img src="https://picsum.photos/150" alt="user-pic" />
      <div class="user-card-name">
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
        <p>{{ user.phone }}</p>
      </div>
    </div>
    <div class="user-card-body">
      <div class="body-item">
        <div class="item-heading">
          <IconMapPinHeart />
          <p>Location</p>
        </div>
        <p class="item-entry">Timko sokak no:2 Yenimahalle, Ankara</p>
      </div>
      <div class="body-item">
        <div class="item-heading">
          <IconBuildingSkyscraper />
          <p>Company</p>
        </div>
        <p class="item-entry">{{ user.company.name }}</p>
      </div>
      <div class="body-item">
        <div class="item-heading">
          <IconWorldShare />
          <p>Website</p>
        </div>
        <a class="item-entry-link" :href="user.website" target="_blank">{{
          user.website
        }}</a>
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

<style scoped>
.user-card {
  border: 1px solid #d8d9dd;
  border-radius: 1.2rem;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  transition: all 0.3s ease;
  text-decoration: none;
  padding-left: 2rem;
  padding-right: 2rem;
}

.user-card:hover {
  box-shadow: 0 0 2rem 1rem rgba(85, 85, 85, 0.2);
  cursor: pointer;
}

.user-card-heading {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.user-card-heading img {
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
}

.user-card-heading h3 {
  font-size: 1.8rem;
  font-weight: 500;
  color: rgba(92, 102, 114, 1);
}

.user-card-heading p {
  font-size: 1.4rem;
  font-weight: 300;
  color: rgba(92, 102, 114, 1);
}

.user-card-body {
  padding-bottom: 1rem;
}

.body-item {
  margin-top: 1.25rem;
}

.body-item .item-heading {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.item-heading svg {
  width: 2.4rem;
  height: 2.4rem;
}

.item-heading p {
  font-size: 1.4rem;
  font-weight: 500;
}

.item-entry {
  font-size: 1.4rem;
  font-weight: 300;
  color: rgba(92, 102, 114, 1);
  padding-left: 0.5rem;
  margin: 0;
}

.item-entry-link {
  font-size: 1.4rem;
  font-weight: 300;
  color: rgba(92, 102, 114, 1);
  padding-left: 0.5rem;
  margin: 0;
  text-decoration: none;
}
</style>
