<template>
  <div>
    <TheNavbar />
    <!-- <TheNavbarTemplate /> -->
    <!-- <header class="container px-4 py-8 mx-auto">
        <NuxtLink to="/">| HOME</NuxtLink>
        <NuxtLink to="/characters">| CHARACTERS</NuxtLink>
        <NuxtLink to="/posts">| POSTS</NuxtLink>
        <NuxtLink to="/mountains">| MOUNTAINS</NuxtLink>
      </header> -->
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
