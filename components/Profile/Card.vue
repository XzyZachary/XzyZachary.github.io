<template>
  <div ref="card" class="z-10 mb-8 scale-100 transition-all duration-200 ease-out hover:z-50 xl:mb-0 xl:hover:scale-[1.15]" style="perspective: 600px">
    <div :style="style" class="dark:bg-dark flex flex-col overflow-hidden bg-white shadow-cyan-100/50 transition-all duration-200 ease-out dark:shadow-cyan-700/50  xl:rounded-lg xl:shadow-lg">
      <img
        src="/images/my.jpg"
        alt="avatar"
        width="550"
        height="350"
        :style="{
          objectPosition: '50% 16%',
          objectFit: 'cover',
          width: '100%',
          aspectRatio: '17/11',
        }"
      >
      <ProfileInfo />
      <span class="h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
    </div>
  </div>
</template>

<script setup lang="ts">
const card = ref<HTMLInputElement>()
const style = ref()

const onMouseMove = (e: MouseEvent) => {
  if (!card.value || window.innerWidth < 1280) { return }
  const { clientX, clientY } = e
  const { width, height, x, y } = card.value.getBoundingClientRect()
  const mouseX = Math.abs(clientX - x)
  const mouseY = Math.abs(clientY - y)
  const rotateMin = -15
  const rotateMax = 15
  const rotateRange = rotateMax - rotateMin

  const rotate = {
    x: rotateMax - (mouseY / height) * rotateRange,
    y: rotateMin + (mouseX / width) * rotateRange
  }
  style.value = {
    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
  }
}

const onMouseLeave = () => {
  style.value = {
    transform: 'rotateX(0deg) rotateY(0deg)'
  }
}

onMounted(() => {
  if (!card.value) { return }
  card.value.addEventListener('mousemove', onMouseMove)
  card.value.addEventListener('mouseleave', onMouseLeave)
})

onUnmounted(() => {
  if (!card.value) { return }
  card.value.removeEventListener('mousemove', onMouseMove)
  card.value.removeEventListener('mouseleave', onMouseLeave)
})
</script>
