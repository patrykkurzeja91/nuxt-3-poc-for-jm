<template>
  <div>
    <TheNavbar />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
<style>
@screen md {
  main {
    padding-top: 90px;
  }
}
main {
  padding-top: 86px;
}
</style>
