<script>
import MainWrapper from "layouts/MainWrapper.vue";
import SupportChatBox from "pages/support/views/SupportChatBox.vue";
import SectionTitle from "components/SectionTitle.vue";
import SupportTopicList from "pages/support/views/SupportTopicList.vue";

export default {
  name: "SupportPage",
  components: { SupportTopicList, SectionTitle, SupportChatBox, MainWrapper },
};
</script>

<template>
  <q-page>
    <main-wrapper>
      <section-title title="How can we help you?">
        <div class="row q-col-gutter-lg">
          <div class="col-md-6 col-xs-12">
            <support-chat-box />
          </div>
          <div class="col-md-6 col-xs-12">
            <support-topic-list />
          </div>
        </div>
      </section-title>
    </main-wrapper>
  </q-page>
</template>

<style scoped lang="css"></style>
