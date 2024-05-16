<script setup>
import { useI18n } from "vue-i18n";

const emit = defineEmits(["clickItem"]);
const { bookingItem } = defineProps({
  bookingItem: Object,
});

const { t } = useI18n();
const background = bookingItem.images?.[0];
const { information } = bookingItem;
</script>

<template>
  <q-card
    flat
    class="booking-item-container bg-white row cursor-pointer"
    @click="emit('clickItem', bookingItem)"
  >
    <div class="col-xs-12 col-sm-6">
      <q-img
        class="full-width full-height"
        :src="background"
        :alt="`booking_item_${bookingItem.id}`"
      />
    </div>
    <div class="col-xs-12 col-sm-6">
      <div class="q-pa-md">
        <q-card-section>
          <div class="column items-start">
            <div
              class="q-pa-sm row flex-center booking-item-content_btn text-primary q-mb-lg custom-shadow"
            >
              <q-item-label class="text-weight-bolder text-subtitle1 q-mr-xs">
                ${{ bookingItem.amount }}
              </q-item-label>
              <q-item-label class="text-weight-medium text-body-2">
                {{ t("roomBookingDetailItem.perNight") }}
              </q-item-label>
            </div>
            <q-item-label class="text-h4 text-weight-bold q-mb-lg">
              {{ bookingItem.name }}
            </q-item-label>
            <div class="row q-mb-lg">
              <div
                class="row flex-center bg-grey-1 br-xs q-pa-sm q-mr-lg text-grey-9"
              >
                <q-icon name="fa-solid fa-person" class="q-mr-xs" size="24px" />
                <q-item-label>
                  {{
                    t("roomBookingDetailItem.adultNumber", {
                      value: information.adultNumber,
                    })
                  }}
                </q-item-label>
              </div>
              <div
                class="row flex-center bg-grey-1 br-xs q-pa-sm q-mr-lg text-grey-9"
              >
                <q-icon
                  name="fa-solid fa-child-reaching"
                  class="q-mr-xs"
                  size="24px"
                />
                <q-item-label>
                  {{
                    t("roomBookingDetailItem.childNumber", {
                      value: information.childrenNumber,
                    })
                  }}
                </q-item-label>
              </div>
              <div
                class="row flex-center bg-grey-1 br-xs q-pa-sm q-mr-lg text-grey-9"
              >
                <q-icon name="fa-solid fa-expand" class="q-mr-xs" size="24px" />
                <q-item-label>
                  {{
                    t("roomBookingDetailItem.acreageNumber", {
                      value: information.acreage,
                    })
                  }}
                </q-item-label>
              </div>
            </div>
          </div>
          <q-separator class="q-mb-lg" />
          <q-item-label class="text-grey-8 text-body2 q-mb-lg">
            {{ bookingItem.description }}
          </q-item-label>
          <q-btn color="primary" size="lg" class="q-px-xl br-sm">
            <q-item-label class="text-white text-weight-bold">
              {{ t("roomBookingDetailItem.bookNowBtn") }}
            </q-item-label>
          </q-btn>
        </q-card-section>
      </div>
    </div>
  </q-card>
</template>

<style scoped lang="css">
.booking-item-container {
  border-radius: 8px;
  overflow: hidden;
}

.booking-item-content_btn {
  border-radius: 4px;
  border: 2px solid var(--primary-color);
}
</style>
