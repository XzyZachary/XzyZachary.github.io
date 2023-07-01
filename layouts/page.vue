<template>
  <div>
    <!-- <slot name="app-before" />
    <div id="app-before"></div> -->
    <div class="flex min-h-screen flex-col">
      <slot name="header">
        <PageNavbar />
      </slot>
      <div class="mx-auto max-w-3xl px-3 sm:px-6 xl:max-w-5xl xl:px-0">
        <div
          class="relative mx-auto flex h-full w-full max-w-8xl flex-1 flex-col"
        >
          <slot />
        </div>
      </div>
      <slot name="footer">
        <!-- <PageFooter /> -->
      </slot>
    </div>
    <slot name="app-after" />
    <div id="app-after" />
  </div>
</template>
