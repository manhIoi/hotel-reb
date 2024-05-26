<script>
import PlaceDetailHeader from "pages/place-detail/views/PlaceDetailHeader.vue";
import MainWrapper from "layouts/MainWrapper.vue";
import PlaceDetailBlog from "pages/place-detail/views/PlaceDetailBlog.vue";
import PlaceDetailSearch from "pages/place-detail/views/PlaceDetailSearch.vue";

export default {
  name: "PlaceDetail",
  components: {
    PlaceDetailSearch,
    PlaceDetailBlog,
    MainWrapper,
    PlaceDetailHeader,
  },
};
</script>

<template>
  <q-page>
    <place-detail-header />
    <main-wrapper>
      <div
        class="row q-col-gutter-lg"
        style="padding-top: 32px; padding-bottom: 32px"
      >
        <div class="col-md-8 col-xs-12">
          <place-detail-blog />
        </div>
        <div class="col-md-4 col-xs-12">
          <place-detail-search />
        </div>
      </div>
    </main-wrapper>
  </q-page>
</template>

<style scoped lang="css"></style>
