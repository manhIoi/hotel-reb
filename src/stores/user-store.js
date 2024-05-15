import { defineStore } from "pinia";
import { computed, onMounted, ref, watch } from "vue";
import server from "src/server";
import { useDialog } from "src/composables";
import { isEmpty } from "lodash";

export const useUserStore = defineStore("user", () => {
  const { showDialog } = useDialog();
  const user = ref(
    JSON.parse(localStorage.getItem("user") || "{}") || {
      name: null,
    }
  );

  const isUserLogin = computed(() => {
    return !isEmpty(user.value);
  });

  function updateProfile(value) {
    user.value = {
      ...user.value,
      ...value,
    };
  }

  function logout() {
    return showDialog("confirm", { message: "Are you sure logout ?" }).onOk(
      () => {
        user.value = {};
      }
    );
  }

  watch(user, () => {
    localStorage.setItem("user", JSON.stringify(user.value || "{}"));
  });

  return {
    user,
    isUserLogin,
    updateProfile,
    logout,
  };
});
