<script setup>
import { ref } from "vue";
import CommentItem from "components/CommentItem.vue";
import SectionTitle from "components/SectionTitle.vue";
import { useI18n } from "vue-i18n";

const { commentList } = defineProps({
  commentList: Array,
});
const { t } = useI18n();
const commentSlide = ref(0);
</script>

<template>
  <section-title :title="t('home.ourGuestLoveUs')" center-title>
    <q-carousel
      v-model="commentSlide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      padding
      height="300px"
      arrows
    >
      <q-carousel-slide
        v-for="(item, index) in commentList"
        :name="index"
        :key="`comment_${item.id}`"
        class="column no-wrap"
      >
        <div class="row q-col-gutter-lg">
          <div class="rounded-borders col-12">
            <div class="fit flex justify-center">
              <comment-item class="comment-item" :comment-item="item" />
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </section-title>
</template>

<style scoped lang="css">
.comment-item {
  max-width: 900px;
}
</style>
