<script setup>
import MainWrapper from "layouts/MainWrapper.vue";
import {useRoute, useRouter} from "vue-router";
import SectionTitle from "components/SectionTitle.vue";
import {ref} from "vue";
import InputDatePicker from "components/input/InputDatePicker.vue";
import InputCounter from "components/input/InputCounter.vue";

const router = useRouter()
const route = useRoute();

const roomData = {
  id: 1,
  information: {
    adultNumber: 2,
    childrenNumber: 2,
    acreage: 2,
    amount: 2,
    bedNumber: 2,
    bathNumber: 2,
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto autem consectetur debitis dolores earum fuga harum incidunt iure minus modi mollitia nemo nesciunt perspiciatis, porro quam rem temporibus vero.'
}

const dateStartModel = ref();
const dateEndModel = ref();
const branchModel = ref();
const branchOptions = [];
const dialogBooking = ref(false)

</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper>
      <div class="row q-col-gutter-lg">
        <div class="col-md-6 col-xs-12">
          <section-title title="Overview">
            <p>{{roomData.description}}</p>
          </section-title>
          <section-title title="Room Availability">
            <p>room available</p>
          </section-title>
          <section-title title="Free Amenities">
            <p>room available</p>
          </section-title>
          <section-title title="Overview">
            <p>{{roomData.description}}</p>
          </section-title>
        </div>
        <div class="col-md-6 col-xs-12">
          <q-btn label="Book now"  @click="dialogBooking = true" />
        </div>
      </div>
    </main-wrapper>
    <q-dialog v-model="dialogBooking">
      <q-card>
        <q-card-section>
          <div class="text-h6">Book now</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <div class="row q-col-gutter-lg">
            <div class="col-xs-12">
              <input-date-picker label="Check in" />
            </div>
            <div class="col-xs-12">
              <input-date-picker label="Check out" />
            </div>
            <div class="col-xs-12">
              <input-counter />
            </div>
            <div class="col-xs-12">
              <input-counter />
            </div>
            <div class="col-xs-12">
              <q-select outlined v-model="branchModel" :options="branchOptions" label="Select branch" />
              <q-select outlined v-model="branchModel" :options="branchOptions" label="Select branch" />
            </div>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn size="lg" color="primary" label="Decline" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style scoped lang="css">

</style>
