<script setup>
const { commentItem } = defineProps({
  commentItem: Object
})
</script>

<template>
<q-card flat class="custom-shadow">
  <q-card-section >
    <p class="text-weight-medium text-subtitle1 text-grey-8">{{ commentItem.content }}</p>
  </q-card-section>
  <q-card-section>
    <div class="row items-center" >
      <q-avatar size="56px">
        <q-img :src="commentItem.user.avatar" />
      </q-avatar>
      <div class="column q-pa-md">
        <p class="text-weight-medium text-h6" >{{commentItem.user.name}}</p>
        <p class="text-grey-8 text-weight-medium">{{ commentItem.user.country }}</p>
      </div>
    </div>
  </q-card-section>
</q-card>
</template>

<style scoped lang="css">

</style>
