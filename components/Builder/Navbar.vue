<template>
  <header
    ref="navbar"
    class="supports-backdrop-blur:bg-white/95 sticky top-0 z-40 py-3 bg-white/75 backdrop-blur dark:bg-dark/75"
  >
    <div id="navbar-banner" class="banner">
      <slot name="banner" />
    </div>
    <div class="mx-auto w-full max-w-5xl">
      <div class="relative flex items-center h-10">
        <slot name="title">
          <div :class="classHover" class="relative z-20" @mouseover="mouseOver" @mouseleave="mouseLeave">
            <NuxtLink :to="{ name: 'index' }" class="cursor-pointer">
              <a class="header-entry-mini">
                <img
                  src="/images/my.jpg"
                  class="rounded-full"
                >
              </a>
              <a class="header-entry-avatar">
                <div class="w-20 h-20 translate-x-0  translate-y-0">
                  <img
                    src="/images/my.jpg"
                    class="rounded-full"
                  >
                </div>
              </a>
            </NuxtLink>
          </div>
        </slot>
        <slot name="menu" />
        <div
          v-if="$slots['options']"
          class="flex flex-1 justify-end lg:hidden"
        >
          <button
            class="flex items-center focus:outline-none"
            aria-label="Toggle Options Menu"
          >
            <span
              class="flex items-center text-sm text-gray-600 dark:text-gray-300"
            >
              <icon-fa-solid:ellipsis-v />
            </span>
          </button>
        </div>
      </div>
    </div>
    <ClientOnly>
      <Teleport to="#app-after">
        <!-- <Transition name="slide-fade-from-up" mode="out-in">
          <div v-if="showDrawer && $slots['drawer']" class="fixed lg:hidden bg-gray-100 dark:bg-slate-800 pt-12 top-0 left-0 w-screen h-screen z-30 fkex flex-col">
            <div class="flex flex-1 flex-col relative overflow-y-auto">
              <slot name="drawer" :toggle-drawer="toggleDrawer" />
            </div>
          </div>
        </Transition> -->

        <div v-if="showOptions && $slots['options']">
          <slot name="options" :toggle-options="toggleOptions" :show-options="showOptions" />
        </div>
      </Teleport>
    </ClientOnly>
  </header>
</template>

<script setup lang="ts">
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
const navbar = ref(null)
const showDrawer = useState<boolean>('navbar.showDrawer', () => false)
const showOptions = useState<boolean>('navbar.showOptions', () => false)

let timer: NodeJS.Timer

onMounted(() => {
  if (!navbar.value) { return }
  const { onScroll } = useSticky(navbar.value, 0)
  setTimeout(() => {
    onScroll()
  }, 50)

  setInterval(() => {
    const minW = 1024
    if (window.innerWidth < minW) {
      updateDrawerOptions()
    }
  }, 100)
})
onBeforeUnmount(() => {
  if (timer) { clearInterval(timer) }
})

const updateDrawerOptions = () => {
  if (showDrawer.value || showOptions.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.add('overflow-hidden')
  }
}

const classHover = ref('mini-avatar--small')

const toggleDrawer = () => (showDrawer.value = !showDrawer.value)

const mouseOver = () => {
  classHover.value = 'mini-avatar--large'
}

const mouseLeave = () => {
  classHover.value = 'mini-avatar--small'
}

const toggleOptions = (show?: boolean) => {
  if (show) {
    showOptions.value = show
  } else {
    showOptions.value = !showOptions.value
  }
}
</script>

<style lang="scss" scoped>
.header-entry-mini {
  position: absolute;
    top: -19px;
  left: 10px;
  z-index: 2;
  display: block;
  width: 38px;
  height: 38px;
  border-radius: 50%;
}

.mini-avatar--small {
  .header-entry-mini {
    animation: fadeIn .6s both;
  }
  .header-entry-avatar {
    animation: avatarFadeSmall .35s both;
  }
}
.mini-avatar--large {
  .header-entry-mini {
    animation: fadeOut .6s both;
  }
  .header-entry-avatar {
    animation: avatarFadeLarge .35s both;
  }
}
.header-entry-avatar {
  position: absolute;
  top: -19px;
  left: 10px;
  z-index: 2;
  display: block;
  border-radius: 50%;
  transform-origin: top left
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes avatarFadeSmall {
  0% {
    transform: scale(1) translate(-36px, 10px);
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(.4) translateY(-2px) translate(3px);
  }
}

@keyframes avatarFadeLarge {
  0% {
    opacity: 0;
    transform: scale(.4) translateY(-2px) translate(3px);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scale(1) translate(-36px,10px);
  }
}
</style>
