<template>
  
</template>

<script>
  export default {
    layout: "content",

    async mounted() {
      await this.$store.dispatch("library/getAllCategories");
      await this.$store.dispatch("library/getAllBooks");
    }
  }
</script>

<style lang="scss" scoped>
  
</style>