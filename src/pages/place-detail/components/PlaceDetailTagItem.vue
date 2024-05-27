<script>
export default {
  name: "PlaceDetailTagItem",
  props: {
    tag: {
      type: Object,
    },
  },
  setup(props) {},
};
</script>

<template>
  <q-item class="bg-white q-mr-sm items-center br-sm tag-item" clickable>
    <q-item-label class="q-mb-none text-grey-8">
      {{ tag?.title }}
    </q-item-label>
  </q-item>
</template>

<style scoped lang="css">
.tag-item {
  border: solid 1px #cacaca;
}
</style>
