<script setup>
import CardSkeleton from "components/skeleton/CardSkeleton.vue";

const { isShow } = defineProps({
  isShow: {
    required: true,
    type: Boolean,
  },
});
</script>

<template>
  <div v-if="isShow">
    <q-skeleton type="text" height="60px" width="200px" class="q-mb-md" />
    <div class="row q-col-gutter-lg">
      <div class="col-md-6 col-xs-12">
        <card-skeleton />
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="row q-col-gutter-lg">
          <div class="col-md-6 col-xs-12" v-for="index in 4" :key="index">
            <card-skeleton />
          </div>
        </div>
      </div>
    </div>
  </div>
  <slot v-else />
</template>

<style scoped lang="css"></style>
