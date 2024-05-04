<script setup>

import MainWrapper from "layouts/MainWrapper.vue";
import SectionTitle from "components/SectionTitle.vue";
import {ref} from "vue";
import RoomBookingItem from "components/RoomBookingItem.vue";

const branchModel = ref('');
const dateStartModel = ref(new Date());
const dateEndModel = ref(new Date());
const branchOptions = ['Branch 1', 'Branch 2', 'Branch 3']

</script>

<template>
  <q-page class="bg-grey-2">
    <main-wrapper>
      <div class="row">
        <div class="col-12">
          <div class="search-picker q-pa-md bg-white">
            <section-title center-title title="Search picker">
              <div class="row q-col-gutter-lg q-pa-md">
                <div class="col-md-4 col-xs-12">
                  <q-select outlined v-model="branchModel" :options="branchOptions" label="Select branch" />
                </div>
                <div class="col-md-4 col-xs-12">
                  <q-input outlined v-model="dateStartModel" mask="date" placeholder="Check in" readonly>
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-date v-model="dateStartModel">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
                <div class="col-md-4 col-xs-12">
                  <q-input outlined v-model="dateEndModel" mask="date" placeholder="Check out" readonly>
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-date v-model="dateEndModel">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
                <div class="col-md-4 col-xs-12">
                  <q-input outlined mask="date" placeholder="Adults" readonly>
                    <template v-slot:append>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
                      </q-avatar>
                    </template>
                  </q-input>
                </div>
                <div class="col-md-4 col-xs-12">
                  <q-input outlined mask="date" placeholder="Childrens" readonly />
                </div>
                <div class="col-md-4 col-xs-12">
                  <q-input outlined mask="date" placeholder="Beds" readonly />
                </div>
              </div>
            </section-title>
          </div>

        </div>
        <div class="col-12">
          <section-title center-title title="Search result" >
            <room-booking-item  />
          </section-title>
        </div>
      </div>
    </main-wrapper>
  </q-page>
</template>

<style lang="css">
.search-picker {
  border-radius: 8px;
}
</style>

