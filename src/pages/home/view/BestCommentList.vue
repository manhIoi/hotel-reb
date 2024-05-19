<script setup>
import { computed, ref } from "vue";
import CommentItem from "components/CommentItem.vue";
import SectionTitle from "components/SectionTitle.vue";
import { useI18n } from "vue-i18n";
import { useQuasar } from "quasar";

const { commentList } = defineProps({
  commentList: Array,
});
const $q = useQuasar();
const { t } = useI18n();
const commentSlide = ref(0);
const numOfItemInRow = computed(() => {
  return $q.screen.gt.sm ? 2 : 1;
});
const _commentList = computed(() => {
  const result = [];
  for (let i = 0; i < commentList.length; i += numOfItemInRow.value) {
    result.push(commentList.slice(i, i + numOfItemInRow.value));
  }
  return result;
});
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
      navigation
    >
      <q-carousel-slide
        v-for="(item, index) in _commentList"
        :name="index"
        :key="index"
      >
        <div class="row q-col-gutter-lg">
          <div
            v-for="subItem in item"
            class="col-md-6 col-xs-12"
            :key="`comment_${subItem?.id}`"
          >
            <comment-item class="comment-item" :comment-item="subItem" />
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
