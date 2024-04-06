<template>
  <button class="bg-red-700" :style="{color: color}">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "SFCButton",
  props: ["color"],
  setup(props) {
    // setup() receives props as the first argument.
    console.log(props.color);
  },
};
</script>
