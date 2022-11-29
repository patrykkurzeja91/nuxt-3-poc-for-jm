<template>
  <section class="">
    <div
      class="container mx-auto flex max-w-screen-lg flex-col items-center justify-center px-5 pb-24 pt-20"
    >
      <img
        class="mb-16 w-5/6 rounded object-cover object-center md:w-4/6 lg:w-4/6"
        alt="hero"
        src="@/assets/images/bk_logo-gold.png"
      />
      <div class="w-full text-center lg:w-2/3">
        <p class="mb-10 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, sed
          atque quae praesentium qui labore enim doloremque animi cumque
          reprehenderit. Eius, nobis voluptate? Ab dolor molestias ullam
          distinctio hic excepturi.
        </p>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const event = useEvent()
console.log(event.value)
</script>
