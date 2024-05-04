<script setup>
import {computed, ref} from "vue";
import {useRouter} from "vue-router";
import {ROUTES_PATH} from "src/router/routes";

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

const router = useRouter();
const currentHover = ref(-1);
const leftDrawerOpen = ref(false);
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

function onClickLogo() {
  router.push(ROUTES_PATH.home);
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<template>
  <q-layout>
    <q-header bordered reveal class="text-white bg-white q-py-md" height-hint="61.59">
      <q-toolbar class="q-py-sm q-px-md justify-between">
        <q-avatar size="32px" @click="onClickLogo" class="bg-primary cursor-pointer">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" alt="logo_app">
        </q-avatar>
        <q-space/>
        <q-list v-if="$q.screen.gt.sm" class="row items-center no-wrap">
          <q-item v-for="(item, index) in navbarList" :key="item.title" class="text-grey-7 items-center nav-item"
                  :class="{ 'item-hovered': currentHover === index }"
                  @mouseenter="() => onHoverItem(item, index)" @mouseleave="() => onBlurItem(item, index)">
            <p class="text-weight-bold q-mr-xs">{{ item.title }}</p>
            <q-icon name="expand_more"/>
            <q-menu v-model="menuStates[index]" v-if="item.subItems?.length > 0" class="bg-white text-primary"
                    auto-close>
              <q-list style="min-width: 200px">
                <q-item v-for="(subItem, index) in item.subItems" :key="`subitem_${item.title}_${index}`" clickable>
                  <q-item-section>{{ subItem.title }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-item>
        </q-list>
        <q-space/>
        <q-btn color="primary" class="q-mr-md">
          <p>Hello</p>
        </q-btn>
        <transition
          transition-show="jump-down"
        >
          <q-btn v-if="!$q.screen.gt.sm" dense flat round @click="toggleLeftDrawer" color="primary">
            <q-icon v-if="leftDrawerOpen" name="close"/>
            <q-icon v-else name="menu"/>
          </q-btn>
        </transition>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer class="footer q-pa-lg">
      <div style="height: 300px;"></div>
    </q-footer>
  </q-layout>
</template>

<style lang="css">
.item-hovered > i,
.item-hovered > p {
  color: var(--q-primary) !important;
}

.footer {
  background-color: var(--footer-color);
}
</style>
