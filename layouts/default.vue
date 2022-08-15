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
      <main class="pt-24">
        <slot/>
      </main>
      <TheFooter />
    </div>
</template>
