<template>
  <BuilderNavbar>
    <template #menu>
      <div class="relative ml-auto hidden items-center lg:flex">
        <nav
          class="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300"
          role="navigation"
        >
          <ul class="flex items-center space-x-8">
            <li v-for="(item, i) in menus" :key="i">
              <Anchor
                v-if="item.type == 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="capitalize hover:text-slate-900 hover:no-underline hover:dark:text-white"
              >
                {{ item.text }}
              </Anchor>
              <Button
                v-else-if="item.type === 'button'"
                :text="item.text"
                size="xs"
                class="font-extrabold capitalize"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
              />
            </li>
          </ul>
        </nav>
        <div
          class="ml-6 flex space-x-4 border-l border-gray-900/10 pl-6 dark:border-gray-50/[0.2]"
        >
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </template>
  </BuilderNavbar>
</template>
<script setup lang="ts">
import { AppConfigInput } from '@nuxt/schema'

const { t } = useLang()
const app = useAppConfig() as AppConfigInput
export interface IMenuItem {
  type: 'link' | 'button';
  text: string;
  href?: any;
  route?: any;
}

const menus = computed((): IMenuItem[] => [
  {
    type: 'link',
    text: t('pages.getting-started.nav'),
    route: { name: 'getting-started' }
  },
  { type: 'link', text: t('pages.blank.nav'), route: { name: 'blank' } },
  { type: 'link', text: t('pages.test.nav'), route: { name: 'test' } },
  { type: 'link', text: t('pages.post.nav'), route: { name: 'post' } },
  { type: 'link', text: t('pages.resume.nav'), route: { name: 'resume' } },
  {
    type: 'button',
    text: t('pages.dashboard.nav'),
    route: { name: 'dashboard' }
  }
])
</script>
