<template>
  <span>
    <div>示例3【作用域插槽】{{hint}}</div>
    <slot v-bind:user="user">{{ user.lastName }}</slot>
  </span>
</template>

<script>
export default {
  props: ["hint"],
  name: "CurrentUser",
  data: function() {
    return {
      user: {
        firstName: "xiao",
        lastName: "long"
      }
    };
  }
};
</script>

