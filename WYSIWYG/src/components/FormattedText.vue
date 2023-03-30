<template>
  <div>{{ textToDisplay }}</div>
</template>

<script>
export default {
  props: {
    textToDisplay: {
      data: String
    }
  }
}
</script>

<style scoped></style>
