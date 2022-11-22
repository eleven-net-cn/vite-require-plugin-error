<script lang="tsx">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "HelloWorld",
})
export default class HelloWorld extends Vue {
  @Prop()
  readonly msg!: string;
}
</script>

<template>
  <div class="greetings">[vite] Internal server error: p is not iterable</div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 36px;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.greetings h1,
.greetings h3 {
  display: block;
  text-align: left;
}
</style>
