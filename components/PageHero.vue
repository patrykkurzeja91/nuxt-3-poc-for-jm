<template>
  <section class="hero relative overflow-hidden">
    <div
      class="container mx-auto flex max-w-screen-lg flex-col items-center justify-center px-5"
    >
      <div class="grid grid-cols-12">
        <div class="relative z-20 col-span-12 mb-20 mt-20 md:col-span-6">
          <img
            class="mb-16 w-full rounded object-cover object-center md:w-1/2"
            alt="Beauty kingdom awards logo"
            src="@/assets/images/bk_logo-gold.png"
            width="525"
            height="230"
          />
          <div class="w-full">
            <h1 class="mb-10 text-center text-4xl md:text-left">
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
            <img
              class="image"
              width="1600"
              height="666"
              alt="Lady that won a beauty price - hero image"
              src="@/assets/images/hero-image.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.image-wrapper {
  @apply absolute right-0 top-0 bottom-0  flex h-full object-cover;
}
.image {
  width: 100%;
  display: block;
  object-fit: cover;
}
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
