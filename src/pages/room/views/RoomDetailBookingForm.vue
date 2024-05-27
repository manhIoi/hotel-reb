<script setup>
import { computed, onMounted, ref, watch } from "vue";
import InputCounter from "components/input/InputCounter.vue";
import InputDatePicker from "components/input/InputDatePicker.vue";
import InputBase from "components/input/InputBase.vue";
import { getRangeDate, validators } from "src/utils";
import { useDialog } from "src/composables";
import { useToast } from "src/composables/useToast";
import server from "src/server";
import { useRouter } from "vue-router";
import { ROUTES_PATH } from "src/router/routes";
import { useCardPaymentStore } from "stores/card-payment-store";

const { room } = defineProps({
  room: Object,
});
const dialog = defineModel("dialog");
const router = useRouter();
const cardPaymentStore = useCardPaymentStore();

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
const selectedCard = ref("");

const stepBooking = ref({
  stepNumber: 1,
  formInputted: false,
  selectedPayment: false,
});
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

function onNextPayment() {
  stepBooking.value.stepNumber = 2;
  stepBooking.value.formInputted = true;
}

function onPreviousPayment() {
  stepBooking.value.stepNumber = 1;
  stepBooking.value.formInputted = false;
}

function onSubmit() {
  showDialog("confirm", { message: "Are you sure booking this room?" }).onOk(
    handleSubmit
  );
}

function onBookingSuccess() {
  router.replace({ name: ROUTES_PATH.home });
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
      stepBooking.value.stepNumber = 3;
      stepBooking.value.selectedPayment = true;
    }
  } catch (e) {
  } finally {
    dialogLoading.hide();
  }
}

function navigateCreateCard() {
  router.push({ name: ROUTES_PATH.cardManagement });
}
</script>

<template>
  <q-card>
    <q-card-section>
      <q-item-label class="text-weight-bold">Book now</q-item-label>
    </q-card-section>

    <q-separator />

    <q-stepper
      v-model="stepBooking.stepNumber"
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Input"
        icon="settings"
        :done="stepBooking.formInputted"
      >
        <q-form method="post" @submit.prevent="onNextPayment">
          <div style="max-height: 50vh" class="scroll">
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
          </div>
          <q-stepper-navigation>
            <q-btn size="md" color="primary" label="BOOK NOW" type="submit" />
          </q-stepper-navigation>
        </q-form>
      </q-step>

      <q-step
        :name="2"
        title="Select payment"
        icon="create_new_folder"
        :done="stepBooking.selectedPayment"
      >
        <q-form
          v-if="cardPaymentStore.cardList?.length > 0"
          method="post"
          @submit.prevent="onSubmit"
        >
          <q-select
            outlined
            v-model="selectedCard"
            :options="cardPaymentStore.cardList"
            option-label="name"
            option-value="cardNumber"
            :rules="[validators.required]"
            hide-bottom-space
          />
          <q-stepper-navigation>
            <q-btn type="submit" color="primary" label="Confirm" />
            <q-btn
              flat
              @click="onPreviousPayment"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-form>
        <div v-else>
          <q-item class="items-center">
            <q-item-label class="q-mr-md">
              Create your payment card to process booking
            </q-item-label>
            <q-btn
              color="primary"
              label="Create now"
              class="no-shadow"
              @click="navigateCreateCard"
            />
          </q-item>
        </div>
      </q-step>

      <q-step :name="3" title="Booking Result" icon="create_new_folder">
        <q-item-label
          class="text-weight-bolder text-h5 text-positive text-center q-pa-md"
        >
          Booking successfully 🎉
        </q-item-label>
        <q-stepper-navigation>
          <q-btn @click="onBookingSuccess" color="primary" label="Go Home" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-card>
</template>

<style scoped lang="css"></style>
