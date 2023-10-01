<template>
  <section class="two-column-l bg-light-grayish-blue-100">
    <div class="custom-shape-divider-top-1663530694">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div
      class="container mx-auto flex max-w-screen-lg flex-col px-5 pb-12 pt-48"
    >
      <div class="mx-auto">
        <h2 class="heading--3 text-dark-golden">Meet Joanna and Oktawia</h2>
        <div class="flex flex-col md:flex-row">
          <div
            class="flex items-center justify-center pl-6 pr-6 pt-12 text-center md:w-1/2 md:pl-0 lg:items-start lg:pr-12"
          >
            <div
              class="image-wrapper object-fit relative flex overflow-hidden rounded-lg"
            >
              <img
                class="h-full w-full max-w-sm"
                src="@/assets/images/joanna-and-oktawia.jpg"
                alt="Joanna and Oktawia"
              />
            </div>
          </div>
          <div class="pt-16 text-left sm:mt-0 md:w-2/3 md:pt-6 md:pl-8 lg:mt-4">
            <p class="mb-4 text-lg font-semibold">
              Joanna has 14 years’ experience in the industry and won the award
              for best Lincolnshire beauty salon in the 2021 and 2022 England
              Business Awards.
            </p>
            <p class="mb-4">
              She’s a cosmetologist and graduated top of her class in her
              university beauty therapy course. She specializes in diagnosing
              skin problems, PRP, mesotherapy, skin peels, body contouring
              treatments, skin boosters, botulinum toxin, and business training.
            </p>
            <p class="mb-8">
              As well as delivering Beauty Kingdom Academy training, Joanna runs
              her own beauty business and has invested in a portfolio of
              properties. Balancing being a mum with her successful businesses
              is something she wants to help other women achieve. We can have it
              all.
            </p>
            <p class="mb-4 text-lg font-semibold">
              Oktawia has 10 years’ experience in beauty therapy and training,
              Oktawia specializes in platelet rich plasma (vampire facial),
              dermal fillers, botulinum toxin & mesotherapy.
            </p>
            <p class="mb-4">
              Knowing her clients are happy is what drives her, and she loves
              teaching beauty therapists how to get the same results.
            </p>
            <p class="mb-4">
              Oktawia moved to the UK 8 years ago with no English. And in that
              time, she’s built a thriving business, regularly being flown by
              clients to the US to deliver treatments
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-shape-divider-top-1663530694 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1663530694 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 126px;
}

.custom-shape-divider-top-1663530694 .shape-fill {
  fill: #fff;
}

.two-column-l {
  position: relative;
}
.two-column-l::after {
  content: '';
  display: block;
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 1px;
  background-color: var(--dark-golden);
}
</style>
