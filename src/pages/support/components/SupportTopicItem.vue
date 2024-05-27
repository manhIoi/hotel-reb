<script>
export default {
  name: "SupportTopicItem",
  props: {
    topic: {
      type: Object,
    },
  },
};
</script>

<template>
  <q-item :key="topic.id" clickable>
    <q-icon name="description" color="grey-9" size="24px" class="q-mr-md" />
    <q-item-section>
      <q-item-label>{{ topic.title }}</q-item-label>
      <q-item-label caption>{{ topic.summary }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<style scoped lang="css"></style>
