<script setup>
import { computed, ref } from "vue";
import InputCounter from "components/input/InputCounter.vue";
import InputDatePicker from "components/input/InputDatePicker.vue";
import InputBase from "components/input/InputBase.vue";
import { getRangeDate, validators } from "src/utils";
import { useDialog } from "src/composables";
import { useToast } from "src/composables/useToast";
import server from "src/server";
import { useRouter } from "vue-router";
import { ROUTES_PATH } from "src/router/routes";

const { room } = defineProps({
  room: Object,
});
const dialog = defineModel("dialog");

const formData = ref({
  dateCheckIn: "",
  dateCheckOut: "",
  adultNumber: 0,
  childrenNumber: 0,
  bedNumber: 0,
  message: "",
});

const { showDialog } = useDialog();
const { showToast } = useToast();
const router = useRouter();

const formInputProps = computed(() => {
  return {
    checkIn: {
      label: "Date checkin",
      rules: [validators.required],
    },
    checkOut: {
      label: "Date checkout",
      rules: [validators.required],
    },
    adults: {
      label: "Adult number",
      rules: [validators.required],
    },
    childrens: {
      rules: [validators.required],
      label: "Children number",
    },
    beds: {
      rules: [validators.required],
      label: "Bed number",
    },
  };
});
const datePickerProps = computed(() => {
  return {
    checkIn: {
      options: getRangeDate(
        new Date(),
        formData.value.dateCheckOut
          ? new Date(formData.value.dateCheckOut)
          : null
      ),
    },
    checkOut: {
      options: getRangeDate(
        formData.value.dateCheckIn
          ? new Date(formData.value.dateCheckIn)
          : new Date(),
        null
      ),
    },
  };
});

function onSubmit() {
  showDialog("confirm", { message: "Are you sure booking this room?" }).onOk(
    handleSubmit
  );
}

async function handleSubmit() {
  const dialogLoading = showDialog("loading");
  try {
    const response = await server.createBookingRoomHistory({
      roomId: room?.id,
      ...formData.value,
    });
    if (response.data) {
      dialogLoading
        .hide()
        .onDismiss(() =>
          showToast("success", "Book room successfully submitted")
        );
      dialog.value = false;
      await router.push({ name: ROUTES_PATH.roomBookingHistory });
    }
  } catch (e) {
  } finally {
    dialogLoading.hide();
  }
}
</script>

<template>
  <q-card>
    <q-card-section>
      <q-item-label class="text-weight-bold">Book now</q-item-label>
    </q-card-section>

    <q-separator />

    <q-form method="post" @submit.prevent="onSubmit">
      <q-card-section style="max-height: 50vh" class="scroll">
        <div class="row q-col-gutter-lg">
          <div class="col-6">
            <input-date-picker
              v-model="formData.dateCheckIn"
              :input-props="formInputProps.checkIn"
              :date-picker-props="datePickerProps.checkIn"
            />
          </div>
          <div class="col-6">
            <input-date-picker
              v-model="formData.dateCheckOut"
              :input-props="formInputProps.checkOut"
              :date-picker-props="datePickerProps.checkOut"
            />
          </div>
          <div class="col-6">
            <input-counter
              v-model="formData.adultNumber"
              :input-props="formInputProps.adults"
              label="Adult Number"
            />
          </div>
          <div class="col-6">
            <input-counter
              v-model="formData.childrenNumber"
              :input-props="formInputProps.childrens"
              label="Children Number"
            />
          </div>
          <div class="col-6">
            <input-counter
              v-model="formData.bedNumber"
              :input-props="formInputProps.beds"
              label="Bed Number"
            />
          </div>
          <div class="col-12">
            <q-input
              outlined
              v-model="formData.message"
              type="textarea"
              label="Message"
            />
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn
          size="md"
          color="primary"
          label="BOOK NOW"
          type="submit"
          class="fit q-ma-xs"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<style scoped lang="css"></style>
