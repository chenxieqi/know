<template>
  <div class="home">
    <NavHeader />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from "@/components/NavHeader.vue";
export default {
  name:"Home",
  components: {
    NavHeader,
  },
}
</script>

<style>

</style>