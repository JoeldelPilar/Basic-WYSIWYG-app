<template>
  <div class="text">
    <p :class="{ 'success-message': showSuccess, 'fade-out': !showSuccess }">{{ success }}</p>
    <h1>Textskaparen</h1>

    <Editor v-model="content" :init="initConfig" />

    <button @click="saveText">Spara text</button>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  components: {
    Editor
  },

  setup() {},

  data() {
    const success = 'Din Text har sparats!'
    const showSuccess = false
    return {
      showSuccess,
      success,
      content: '',
      initConfig: {
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
      }
    }
  },
  methods: {
    saveText() {
      this.$emit('savedText', this.content)
      this.showSuccess = true
      setTimeout(() => {
        this.showSuccess = false
      }, 1000)
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .text {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #editor {
    width: 100%;
  }

  .success-message {
    opacity: 1;
    transition: opacity 0.4s ease-out;
  }

  .fade-out {
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }
}
</style>
