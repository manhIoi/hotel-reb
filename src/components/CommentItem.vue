<script setup>
const { commentItem } = defineProps({
  commentItem: Object,
});
</script>

<template>
  <q-card flat class="custom-shadow">
    <q-card-section>
      <q-item-label class="text-weight-medium text-subtitle1 text-grey-8">
        {{ commentItem.content }}
      </q-item-label>
    </q-card-section>
    <q-card-section>
      <div class="row items-center">
        <q-avatar size="56px">
          <q-img :src="commentItem.user.avatar" />
        </q-avatar>
        <div class="column q-pa-md">
          <q-item-label class="text-weight-medium text-h6">
            {{ commentItem.user.name }}
          </q-item-label>
          <q-item-label class="text-grey-8 text-weight-medium">
            {{ commentItem.user.country }}
          </q-item-label>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="css"></style>
