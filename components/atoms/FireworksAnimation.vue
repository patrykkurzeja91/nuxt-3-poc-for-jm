<template>
  <div class="fireworks">
    <Fireworks
      v-if="mounted"
      ref="fw"
      class="fw-container h-full"
      :autostart="true"
      :options="options"
    />
  </div>
</template>
<script lang="ts" setup>
import { Fireworks } from '@fireworks-js/vue'
import type { FireworksOptions } from '@fireworks-js/vue'
const fw = ref<InstanceType<typeof Fireworks>>()
const options = ref<FireworksOptions>({
  autoresize: true,
  opacity: 0.5,
  acceleration: 1.0,
  friction: 0.96,
  gravity: 1.9,
  particles: 50,
  traceLength: 3,
  traceSpeed: 9,
  explosion: 6,
  intensity: 20,
  // flickering: 0,
  lineStyle: 'round',
  hue: {
    min: 35,
    max: 43,
  },
  delay: {
    min: 30,
    max: 60,
  },
  rocketsPoint: {
    min: 50,
    max: 50,
  },
  lineWidth: {
    explosion: {
      min: 1,
      max: 3,
    },
    trace: {
      min: 1,
      max: 2,
    },
  },
  brightness: {
    min: 40,
    max: 70,
  },
  decay: {
    min: 0.008,
    max: 0.0121,
  },
  mouse: {
    click: false,
    move: false,
    max: 1,
  },
})
const mounted = ref(true)
async function startFireworks() {
  if (!fw.value) return
  fw.value.start()
  await new Promise((resolve) => setTimeout(resolve, 10000))
  await fw.value.waitStop()
}
watch(fw, () => startFireworks())
onUnmounted(() => {
  fw.value?.stop()
})
</script>
<style lang="css" scoped>
.fireworks {
  @apply w-full;
  height: 700px;
  @screen md {
    height: 500px;
  }
}
.fw-container {
  @apply absolute bottom-1/3 h-2/3 w-full;
}
</style>
