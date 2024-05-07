<script setup>
import {computed, ref} from "vue";
import InputCounter from "components/input/InputCounter.vue";
import InputDatePicker from "components/input/InputDatePicker.vue";
import InputBase from "components/input/InputBase.vue";
import {validators} from "src/utils";

const formData = ref({
  dateCheckIn: '',
  dateCheckOut: '',
  guestNumber: 0,
  roomNumber: 0,
  message: ''
})

const formInputProps = computed(() => {
  return {
    checkIn: {
      rules: [validators.required]
    },
    checkOut: {
      rules: [validators.required]
    },
    guests: {
      placeholder: 'Check In',
      rules: [validators.required]
    },
    rooms: {
      placeholder: 'Room Number',
      rules: [validators.required]
    }
  }
})

function onSubmit() {
  console.info("LOG_IT:: formData", formData);
}

</script>

<template>
  <q-card>
    <q-card-section>
      <p class="text-weight-bold">Book now</p>
    </q-card-section>

    <q-separator/>

    <q-form method="post" @submit.prevent="onSubmit">
      <q-card-section style="max-height: 50vh" class="scroll">
        <div class="row q-col-gutter-lg">
          <div class="col-6">
            <input-date-picker label="Check in" v-model="formData.dateCheckIn" :input-props="formInputProps.checkIn"/>
          </div>
          <div class="col-6">
            <input-date-picker label="Check out" v-model="formData.dateCheckOut"
                               :input-props="formInputProps.checkOut"/>
          </div>
          <div class="col-6">
            <input-counter v-model="formData.guestNumber" :input-props="formInputProps.guests" label="Guests"/>
          </div>
          <div class="col-6">
            <input-counter v-model="formData.roomNumber" :input-props="formInputProps.rooms" label="Rooms"/>
          </div>
          <div class="col-12">
            <input-base label="Message">
              <q-input outlined v-model="formData.message" type="textarea" placeholder="Say something..."/>
            </input-base>
          </div>
        </div>
      </q-card-section>

      <q-separator/>

      <q-card-actions>
        <q-btn size="md" color="primary" label="Decline" type="submit" class="fit q-ma-xs"/>
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<style scoped lang="css">

</style>

