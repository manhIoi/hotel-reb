<script setup>
import { useQuasar } from "quasar";
import languages from "quasar/lang/index.json";
import { ref, watch } from "vue";

const appLanguages = languages.filter((lang) =>
  ["de", "en-US"].includes(lang.isoName)
);

const langOptions = appLanguages.map((lang) => ({
  label: lang.nativeName,
  value: lang.isoName,
}));

const $q = useQuasar();
const lang = ref($q.lang.isoName);

watch(lang, (val) => {
  // dynamic import, so loading on demand only
  import(
    /* webpackInclude: /(de|en-US)\.js$/ */
    "quasar/lang/" + val
  ).then((lang) => {
    $q.lang.set(lang.default);
  });
});
</script>

<template>
  <q-select
    v-model="lang"
    :options="langOptions"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
</template>

<style scoped lang="css"></style>
