<template>
  <div class="about">
    <h1 class="green">This is your <span>formatted</span> text</h1>
    <section v-html="$props.textToDisplay"></section>
  </div>
</template>

<script>
export default {
  props: {
    textToDisplay: {
      type: Object
    }
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    margin-block-end: 3rem;
    color: #42b883;
    font-size: 2.5rem;
  }

  span {
    color: #0080b3;
    font-weight: bold;
    letter-spacing: 0.15rem;
  }
}
</style>
