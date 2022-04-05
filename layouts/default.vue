<template>
    <div>
      <header class="container px-4 py-8 mx-auto">
        <NuxtLink to="/">| HOME</NuxtLink>
        <NuxtLink to="/characters">| CHARACTERS</NuxtLink>
        <NuxtLink to="/posts">| POSTS</NuxtLink>
      </header>
      <main class="container px-4 mx-auto">
        <slot/>
      </main>
    </div>
</template>
