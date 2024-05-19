import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";
import server from "src/server";

export const useCardPaymentStore = defineStore("card-payment", () => {
  const cardList = ref([]);

  onMounted(() => {
    getCardPaymentData();
  });

  async function getCardPaymentData() {
    try {
      const response = await server.getPaymentCardList();
      console.log("LOG_IT:: response", response);
      if (response.data) {
        cardList.value = response.data;
      }
    } catch (e) {}
  }

  function addCard(newCard) {
    cardList.value.push(newCard);
  }

  function removeCard(card) {
    const cardIndex = cardList.value.findIndex(
      (item) => item.cardNumber === card.cardNumber
    );
    if (cardIndex !== -1) {
      cardList.value.splice(cardIndex, 1);
    }
  }

  return {
    cardList,
    addCard,
    removeCard,
  };
});
