<template>
  <div>
    <ul id="bios" class="hidden">
      <li>
        {{ t('common.1') }} <b className="font-medium">Zachary</b> {{ t('common.2') }}.
      </li>
      <li>{{ t('common.3') }}</li>
      <li>
        {{ t('common.4') }}<b class="font-medium">{{ t('common.5') }}</b>.
      </li>
      <li>
        {{ t('common.6') }} <b class="font-medium">{{ t('common.7') }}</b>.
      </li>
      <li>
        {{ t('common.8') }} <b class="font-medium">Java</b>.
      </li>
      <li>{{ t('common.10') }}</li>
      <li>{{ t('common.11') }}</li>
      <li>{{ t('common.12') }}</li>
      <li>
        {{ t('common.13') }}
        <b class="font-medium">{{ t('common.14') }}</b>
        <Twemoji emoji="cat" />.
      </li>
      <li>
        {{ t('common.15') }}
        <span class="ml-1">
          <Twemoji emoji="basketball" />,
          <Twemoji emoji="man-swimming" />
        </span>
        .
      </li>
    </ul>
    <span ref="el" class="text-neutral-900 dark:text-neutral-200" />
  </div>
</template>
<script setup lang="ts">
import Typed from 'typed.js'

const { t } = useLang()
const typed = ref()
const el = ref(null)

const localeSetting = useState<string>('locale.setting')

const initTypeBios = async () => {
  await nextTick()
  typed.value = new Typed(el.value, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000
  })
}

onMounted(() => initTypeBios())
watch(localeSetting, () => {
  typed.value.destroy()
  initTypeBios()
})

</script>
