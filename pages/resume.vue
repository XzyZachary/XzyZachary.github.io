<template>
  <PageContentRenderer
    path="/authors/resume"
  />
</template>
<script setup lang="ts">
import { capitalize } from '~/utils/str'
// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page'
})

useHead(() => ({
  title: capitalize(t('pages.getting-started.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.getting-started.description')
    }
  ]
}))
</script>
