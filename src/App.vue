<template>
  <div>
    <div>
      <RouterView />
    </div>

    <div>
      <div>
        <RouterLink to="/">Home</RouterLink>
      </div>

      <div>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
