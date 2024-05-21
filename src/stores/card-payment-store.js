import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";
import server from "src/server";

export const useCardPaymentStore = defineStore("card-payment", () => {
  const cardList = ref(JSON.parse(localStorage.getItem("cardList") || "[]"));

  onMounted(() => {
    getCardPaymentData();
  });

  watch(cardList, () => {
    localStorage.setItem("cardList", JSON.stringify(cardList.value));
  });

  async function getCardPaymentData() {
    try {
      const response = await server.getPaymentCardList();
      if (response.data) {
        cardList.value = response.data;
      }
    } catch (e) {}
  }

  function addCard(newCard) {
    cardList.value = [...cardList.value, newCard];
  }

  function editCard(newCard) {
    cardList.value = cardList.value.map((item) => {
      if (item.id === newCard.id) {
        return newCard;
      }
      return item;
    });
  }

  function removeCard(card) {
    cardList.value = cardList.value.filter((item) => item?.id !== card.id);
  }

  return {
    cardList,
    addCard,
    editCard,
    removeCard,
  };
});
