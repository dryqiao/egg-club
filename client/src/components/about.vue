<template>
  <div v-html="aboutHtml"></div>
</template>
<script>
import marked from 'marked'
export default {
  data() {
      return {
        aboutMd :`# 关于`
      }
  },
    computed:{
        aboutHtml() {
            return marked(this.aboutMd)
        }
    }
}
</script>


