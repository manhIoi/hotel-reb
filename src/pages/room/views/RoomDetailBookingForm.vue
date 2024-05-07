<script setup>
import {computed, ref} from "vue";
import InputCounter from "components/input/InputCounter.vue";
import InputDatePicker from "components/input/InputDatePicker.vue";
import InputBase from "components/input/InputBase.vue";
import {getRangeDate, validators} from "src/utils";
import {useDialog} from "src/composables";
import {useToast} from "src/composables/useToast";

const formData = ref({
  dateCheckIn: '',
  dateCheckOut: '',
  guestNumber: 0,
  roomNumber: 0,
  message: ''
})

const {showDialog} = useDialog()
const {showToast} = useToast()

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
const datePickerProps = computed(() => {
  return {
    checkIn: {
      options: getRangeDate(new Date(), formData.value.dateCheckOut ? new Date(formData.value.dateCheckOut) : null),
    },
    checkOut: {
      options: getRangeDate(formData.value.dateCheckIn ? new Date(formData.value.dateCheckIn) : new Date(), null),
    }
  }
})

function onSubmit() {
  showDialog('confirm', {message: 'Are you sure booking this room?'}).onOk(handleSubmit)
}

function handleSubmit() {
  const dialogLoading = showDialog('loading');
  setTimeout(() => {
    dialogLoading.hide().onDismiss(() => showToast('success', 'Book room successfully submitted'))
  }, 2000)
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
            <input-date-picker label="Check in" v-model="formData.dateCheckIn" :input-props="formInputProps.checkIn"
                               :date-picker-props="datePickerProps.checkIn"/>
          </div>
          <div class="col-6">
            <input-date-picker label="Check out" v-model="formData.dateCheckOut" :input-props="formInputProps.checkOut"
                               :date-picker-props="datePickerProps.checkOut"/>
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

