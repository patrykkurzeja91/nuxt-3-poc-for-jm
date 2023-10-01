<script lang="ts" setup>
const event = useEvent()

const { londonDate } = useDateConverter()

const eventPlace = computed(
  () =>
    event.value.additional_info +
    ', ' +
    event.value.street +
    ', ' +
    event.value.city,
)
</script>

<template>
  <div
    class="-mx-4 -mb-10 -mt-4 flex flex-col space-y-6 sm:-m-4 md:flex-row md:space-y-0"
  >
    <div class="relative flex flex-col items-center p-6 text-center md:w-1/3">
      <div
        class="mb-10 inline-flex h-20 w-20 flex-shrink-0 items-end justify-center rounded-full"
      >
        <img
          src="@/assets/icons/crown-1.svg"
          width="40"
          height="29"
          class="w-10"
          alt="crown icon"
        />
        <!-- <nuxt-icon name="vector-8" class="h-10 w-10" stroke fill /> -->
      </div>
      <div class="flex-grow">
        <h3 class="heading--5 mb-6">
          {{ londonDate(event.ticket_sales_from) }}
          -
          {{ londonDate(event.ticket_sales_to) }}
        </h3>
        <p class="text-base">Early entry</p>
      </div>
      <nuxt-icon name="chevron-right" filled class="next w-8" />
    </div>
    <div class="relative flex flex-col items-center p-6 text-center md:w-1/3">
      <div
        class="mb-10 inline-flex h-20 w-20 flex-shrink-0 items-end justify-center rounded-full"
      >
        <img
          width="56"
          height="39"
          src="@/assets/icons/crown-2.svg"
          class="w-14"
          alt="crown icon"
        />
      </div>
      <div class="flex-grow">
        <h3 class="heading--5 mb-6">
          {{ londonDate(event.evaluation_from) }} -
          {{ londonDate(event.evaluation_to) }}
        </h3>
        <p class="text-base">Evaluation of applications</p>
      </div>
      <nuxt-icon name="chevron-right" filled class="next w-8" />
    </div>
    <div class="relative flex flex-col items-center p-6 text-center md:w-1/3">
      <div
        class="mb-10 inline-flex h-20 w-20 flex-shrink-0 items-end justify-center"
      >
        <img
          width="80"
          height="78"
          src="@/assets/icons/crown-3.svg"
          class="w-20"
          alt="crown icon"
        />
      </div>
      <div class="flex-grow">
        <h3 class="heading--5 mb-6">
          {{ londonDate(event.event_date) }}
        </h3>
        <p class="mb-4 text-base">Winners announced</p>
        <p class="text-base uppercase">GALA DINNER AT {{ eventPlace }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.next {
  position: absolute;
  bottom: -20px;
  transform: rotate(90deg);

  @screen md {
    right: -16px;
    top: 50%;
    bottom: none;
    transform: rotate(0deg);
  }
}
</style>
