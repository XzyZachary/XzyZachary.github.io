<template>
  <div className="flex flex-col space-y-1.5">
    <NuxtLink to="/projects" class="hover:underline">
      <Twemoji emoji="hammer-and-wrench" />
      <span data-umami-event="home-link-projects" class="ml-1.5">
        {{ t('common.27') }}
      </span>
    </NuxtLink>
    <NuxtLink to="/blog" class="hover:underline">
      <Twemoji emoji="memo" />
      <span data-umami-event="home-link-blog" class="ml-1.5">
        {{ t('common.28') }}
      </span>
    </NuxtLink>
    <NuxtLink to="/about" class="hover:underline">
      <Twemoji emoji="face-with-monocle" />
      <span data-umami-event="home-link-about" class="ml-1.5">
        {{ t('common.29') }}
      </span>
    </NuxtLink>
    <NuxtLink to="/resume" class="hover:underline">
      <Twemoji emoji="briefcase" />
      <span data-umami-event="home-link-resume" class="ml-1.5">
        {{ t('common.30') }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { t } = useLang()
</script>
