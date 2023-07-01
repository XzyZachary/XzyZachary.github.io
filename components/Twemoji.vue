<template>
  <i :class="cls.trim()" />
</template>
<script setup lang="ts">
import type { TwemojiProps } from '@/types'

const Props = withDefaults(defineProps<TwemojiProps>(), {
  emoji: '',
  size: 'twa-lg',
  className: ''
})

function kebabCase (str: string): string | undefined {
  return str?.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)?.map(x => x.toLowerCase())?.join('-')
}
const cls = `inline-block twa ${Props.size} twa-${kebabCase(Props.emoji)} ${Props.className || ''}`
</script>
