<template>
  <div class="flex items-center">
    <Listbox v-if="currentStyle == 'dropdown-right-top'" v-model="localeSetting" as="div" class="relative flex items-center">
      <ListboxButton>
        <IconLa:language />
      </ListboxButton>
      <ListboxOptions class="absolute top-full right-0 p-1 z-50 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300">
        <ListboxOption
          v-for="lang in availableLocales"
          :key="lang.iso"
          :value="lang.iso"
          :class="{
            'py-2 px-2 flex items-center cursor-pointer': true,
            'text-sky-500 bg-gray-100 dark:bg-gray-600/30':
              localeSetting === lang.iso,
            'hover:bg-gray-50 dark:hover:bg-gray-700/30':
              localeSetting !== lang.iso,
          }"
        >
          <span class="text-sm mr-2">{{ lang.flag }}</span>
          <span class="flex-1 truncate">
            {{ lang.name }}
            <span class="text-xs">({{ lang.iso }})</span>
          </span>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption
} from '@headlessui/vue'
import { availableLocales } from '~/utils/lang'
// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top'
  }
})
const localeSetting = useState<string>('locale.setting')
const currentStyle = toRef(props, 'type')
</script>
