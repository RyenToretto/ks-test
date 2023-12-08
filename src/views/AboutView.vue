<template>
  <div class="about">
    <h1>This is an about page</h1>
    <pre><code>{{ createXhReport }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import createXhReport from 'xh-report'
const xhReport = createXhReport({ pkg: 'com.777.web' })
xhReport('pau_suc')
</script>

<style></style>
