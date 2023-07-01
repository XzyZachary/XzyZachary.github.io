<template>
  <ContentNavigation>
    <ul>
      <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
      <li v-for="item of articles" :key="item._path" class="group flex cursor-pointer bg-transparent bg-opacity-20 px-2 py-6 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
        <ContentDoc v-slot="{ doc }" :path="item._path">
          <div class="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
            <dl>
              <dt class="sr-only">
                Published on
              </dt>
              <dd class="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                <time :dateTime="doc.date">{{ doc.date }}</time>
              </dd>
            </dl>
            <div class="space-y-5 xl:col-span-4">
              <div>
                <h2 class="text-2xl font-bold leading-8 tracking-tight">
                  <NuxtLink class="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500">
                    {{ doc.title }}
                  </NuxtLink>
                </h2>
              </div>
              <div class="flex flex-wrap">
                <Tag v-for="item in doc.tags" :key="item" :text="item" />
              </div>
              <div>
                {{ doc.summary }}
              </div>
            </div>
          </div>
        </ContentDoc>
      </li>
    </ul>
  </ContentNavigation>
</template>
<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import Tag from './Tag.vue'
const localeSetting = useState<string>('locale.setting')
const articles = ref()
// _path: localeSetting.value === 'zh' ? { $in: ['cn'] } : { $nin: ['cn'] }
articles.value = await queryContent('blog').where({ _path: localeSetting.value === 'zh' ? { $contains: ['cn'] } : { $not: /cn$/ } }).limit(3).find()
watch(localeSetting, async () => {
  articles.value = await queryContent('blog').where({ _path: localeSetting.value === 'zh' ? { $contains: ['cn'] } : { $not: /cn$/ } }).limit(3).find()
})
</script>
