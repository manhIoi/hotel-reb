<script>
import { ref } from "vue";

export default {
  name: "SupportChatBox",
  setup(props) {
    const messages = ref([
      { text: "Hello!", isMine: false },
      { text: "Hi! How are you?", isMine: true },
    ]);

    const newMessage = ref("");

    function sendMessage() {
      if (newMessage.value.trim() !== "") {
        messages.value.push({ text: newMessage.value, isMine: true });
        newMessage.value = "";

        // Fake response from other user
        setTimeout(() => {
          messages.value.push({ text: "I am good, thanks!", isMine: false });
        }, 1000);
      }
    }

    function onLoadMessage() {}

    return {
      messages,
      newMessage,
      sendMessage,
      onLoadMessage,
    };
  },
};
</script>

<template>
  <q-card class="chat-box flex column">
    <q-card-section class="bg-primary text-white">
      <q-item-label class="text-subtitle1 text-weight-bold">
        REB Support
      </q-item-label>
    </q-card-section>
    <q-card-section class="chat-content overflow-auto">
      <q-infinite-scroll @load="onLoadMessage" reverse>
        <q-chat-message
          v-for="(message, index) in messages"
          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
          :key="index"
          :name="message.isMine ? `Me` : `REB Support`"
          :class="['message', message.isMine ? 'my-message' : 'their-message']"
          :sent="message.isMine"
          :bg-color="message.isMine ? 'lightblue' : 'lightgrey'"
        >
          <div>
            {{ message.text }}
          </div>
        </q-chat-message>
      </q-infinite-scroll>
    </q-card-section>

    <q-card-section class="flex">
      <q-input
        outlined
        v-model="newMessage"
        placeholder="Type a message"
        @keyup.enter="sendMessage"
        dense
        class="chat-input"
      >
        <template v-slot:append>
          <q-btn
            flat
            icon="send"
            @click="sendMessage"
            color="primary"
            class="no-shadow"
          />
        </template>
      </q-input>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="css">
.chat-box {
  width: 100%;
  height: 500px;
}

.chat-content {
  flex: 1;
  padding: 10px;
  background-color: #f5f5f5;
}

.message {
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  word-wrap: break-word;
}

.chat-input {
  flex: 1;
}
</style>
