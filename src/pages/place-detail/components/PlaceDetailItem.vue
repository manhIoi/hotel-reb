<script>
export default {
  name: "PlaceDetailItem",
};
</script>

<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <q-item-label class="text-h5 q-mt-sm q-mb-xs">Title</q-item-label>
        <q-item-label class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </q-item-label>
      </q-card-section>

      <q-card-section class="col-5 flex flex-center">
        <q-img
          class="rounded-borders"
          src="https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/blog-content-01.jpg"
        />
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions class="q-pa-none">
      <q-item class="items-center">
        <q-icon name="fa-regular fa-calendar" color="primary" class="q-mr-sm" />
        <q-item-label class="text-grey">20/11/2023</q-item-label>
      </q-item>
      <q-item class="items-center">
        <q-icon name="fa-regular fa-user" color="primary" class="q-mr-sm" />
        <q-item-label class="text-grey">Admin</q-item-label>
      </q-item>
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="css">
.my-card {
}
</style>
