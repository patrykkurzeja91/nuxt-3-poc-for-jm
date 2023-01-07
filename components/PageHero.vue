<template>
  <section class="hero relative overflow-hidden">
    <div
      class="container mx-auto flex max-w-screen-lg flex-col items-center justify-center px-5"
    >
      <div class="grid grid-cols-12">
        <div class="relative z-20 col-span-12 mb-20 mt-20 md:col-span-6">
          <img
            class="mb-16 w-full rounded object-cover object-center md:w-1/2"
            alt="hero"
            src="@/assets/images/bk_logo-gold.png"
          />
          <div class="w-full">
            <h1
              class="mb-10 text-center text-4xl text-dark-orange md:text-left"
            >
              Celebrate your success with us!
            </h1>
            <p
              class="mx-auto mb-10 w-5/6 text-center text-lg md:ml-0 md:text-left"
            >
              After many years of running salons and an academy that gives
              British qualifications to work in the beauty industry, we want to
              appreciate other businesses in the industry that stand out on the
              market.
            </p>
          </div>
        </div>
        <div class="col-span-12 hidden md:col-span-6 md:flex">
          <div class="image-wrapper">
            <div class="triangle absolute">
              <svg
                viewBox="0 0 265 661"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M265 1.7314e-05L1.84029e-06 7.14891e-05L3.28317e-05 661L265 1.7314e-05Z"
                />
              </svg>
            </div>
            <img
              class="image"
              alt="hero"
              src="@/assets/images/hero-woman-trans.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.triangle {
  width: 380px;
  height: calc(100% + 2px);
}
.triangle svg {
  fill: #fff;
}
.image-wrapper {
  @apply absolute right-0 top-0 bottom-0 flex h-full bg-yale-blue object-contain;
  width: 60%;
}
.image {
  margin-top: auto;
  display: block;
  position: relative;
  width: 560px;
  margin-left: 100px;
}
/* .hero-image:after {
  @apply absolute left-0 top-0 bottom-0 w-1/2 bg-yale-blue object-contain;
  height: 100%;
  width: 100%;
  content: '';

  background: url('@/assets/images/hero-woman-trans.png');
  background-size: contain;
  background-repeat: no-repeat;
} */

.custom-shape-divider-top-1663530825 {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1663530825 svg {
  position: relative;
  display: block;
  width: 96px;
  height: calc(100% + 2px);
  transform: rotateY(180deg);
}

.custom-shape-divider-top-1663530825 .shape-fill {
  fill: #002366;
}
</style>
<!-- <script lang="ts" setup>
const event = useEvent()
</script> -->
