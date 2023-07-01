<template>
  <h1 class="text-neutral-900 dark:text-neutral-200">
    {{ t('common.21') }} <span class="font-medium">{{ siteMetadata.fullName }}</span> - {{ t('common.16') }}
    <span class="font-medium">{{ t('common.17') }}</span> {{ t('common.20') }}
    <span class="font-medium">{{ t('common.18') }}, {{ t('common.19') }}</span>
    <span class="absolute ml-1.5 inline-flex pt-[3px]">
      <Twemoji emoji="china" />
    </span>
  </h1>
</template>

<script setup lang="ts">
import Twemoji from '../Twemoji.vue'
import siteMetadata from '@/data/siteMetadata'
const { t } = useLang()
</script>
