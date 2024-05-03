<script setup>
import {computed, ref} from "vue";

const navbarList = [
  {
    title: 'Branch',
    subItems: [
      {
        title: 'Branch 1'
      },
      {
        title: 'Branch 2'
      },
      {
        title: 'Branch 3'
      }
    ]
  },
  {
    title: 'Search',
  },
  {
    title: 'Contact',
  },
]

const currentHover = ref(-1);
const menuStates = computed(() => {
  return navbarList.reduce((current, item, index) => {
    return {
      ...current,
      [index]: index === currentHover.value
    }
  }, {})
})

function onHoverItem(item, index) {
  currentHover.value = index;
}

function onBlurItem(item, index) {
  currentHover.value = -1;
}

</script>

<template>
  <q-layout>
    <q-header elevated class="text-white bg-white q-py-md" height-hint="61.59">
      <q-toolbar class="q-py-sm q-px-md justify-between">
        <p class="text-weight-bolder text-primary text-h6">Quasar app</p>
        <q-space/>
        <q-list v-if="$q.screen.gt.sm" class="row items-center no-wrap">
          <q-item v-for="(item, index) in navbarList" :key="item.title" class="text-grey-7 items-center nav-item" :class="{ 'item-hovered': currentHover === index }"
                  @mouseenter="() => onHoverItem(item, index)" @mouseleave="() => onBlurItem(item, index)">
            <p class="text-weight-bold q-mr-xs">{{ item.title }}</p>
            <q-icon name="expand_more"/>
            <q-menu v-model="menuStates[index]" v-if="item.subItems?.length > 0" class="bg-white text-primary" auto-close>
                <q-list style="min-width: 200px">
                  <q-item v-for="(subItem, index) in item.subItems" :key="`subitem_${item.title}_${index}`" clickable>
                    <q-item-section>{{ subItem.title }}</q-item-section>
                  </q-item>
                </q-list>
            </q-menu>
          </q-item>
        </q-list>
        <q-space/>
        <q-btn color="primary">
          <p>Hello</p>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<style lang="css">
.item-hovered > i,
.item-hovered > p {
  color: var(--q-primary) !important;
}
</style>
