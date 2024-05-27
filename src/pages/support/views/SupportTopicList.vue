<script>
import SupportTopicItem from "pages/support/components/SupportTopicItem.vue";
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  name: "SupportTopicList",
  components: { SupportTopicItem },
  setup(props) {
    const topicList = ref([
      {
        id: 1,
        title: "How to Book a Room",
        summary: "Learn the steps to book a room easily and quickly.",
      },
      {
        id: 2,
        title: "Understanding Room Categories",
        summary: "An overview of different room categories and their features.",
      },
      {
        id: 3,
        title: "Managing Your Bookings",
        summary: "Tips on how to manage your current and future bookings.",
      },
      {
        id: 4,
        title: "Cancelling a Reservation",
        summary: "Step-by-step guide to cancel your room reservation.",
      },
      {
        id: 5,
        title: "Checking Room Availability",
        summary: "How to check room availability for your desired dates.",
      },
      {
        id: 6,
        title: "Understanding Rates and Charges",
        summary: "Detailed information about our rates and additional charges.",
      },
      {
        id: 7,
        title: "Booking Policies",
        summary: "Learn about our booking policies and terms.",
      },
    ]);

    const openTopic = (topic) => {
      // Implement the logic to open the article, e.g., navigate to the article's page
      console.log(`Opening article: ${topic.title}`);
    };

    return {
      topicList,
      openTopic,
    };
  },
};
</script>

<template>
  <div>
    <q-item-label class="text-h6 q-mb-sm">Popular Articles</q-item-label>
    <q-list>
      <support-topic-item
        v-for="topic in topicList"
        :key="topic.id"
        @click="openTopic(topic)"
        :topic="topic"
      />
    </q-list>
  </div>
</template>

<style scoped lang="css"></style>
