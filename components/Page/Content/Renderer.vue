<script setup lang="ts">
const props = defineProps({
  path: {
    type: String,
    required: true
  },
  pageTitle: {
    type: String,
    default: ''
  }
})

const localeSetting = useState<string>('locale.setting')

const { data } = await useAsyncData(props.path, () => {
  let localPath = props.path
  if (localeSetting.value !== 'en') {
    localPath += `.${localeSetting.value}`
  }
  return queryContent(localPath).findOne()
}, {
  watch: [localeSetting]
})

</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="pageTitle" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <ContentRenderer :value="data" class="prose prose-lg max-w-none pb-8 pt-8 dark:prose-dark" />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
