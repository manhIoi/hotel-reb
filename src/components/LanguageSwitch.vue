<script setup>
import { useI18n } from "vue-i18n";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";

const localesName = {
  "en-US": "English",
  vi: "Vietnamese",
};

const router = useRouter();

const { locale, availableLocales } = useI18n({
  useScope: "global",
});
const lang = ref({ name: localesName[locale.value], locale: locale.value });
const _localesOptions = computed(() => {
  return availableLocales.map((locale) => ({
    name: localesName[locale],
    locale,
  }));
});

watch(lang, () => {
  locale.value = lang.value.locale;
  localStorage.setItem("lang", lang.value.locale);
  router.go();
});
</script>

<template>
  <q-select
    v-model="lang"
    :options="_localesOptions"
    option-value="locale"
    option-label="name"
    borderless
    options-dense
    style="min-width: 150px"
  />
</template>

<style scoped lang="css"></style>
