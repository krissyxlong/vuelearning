<template>
  <span class="nav-link">
    示例1【插槽组件】：
    <slot>默认文案</slot>
  </span>
</template>

<script>
export default {
  name: "nl",
  data: function() {
    return {
      status: "ok"
    };
  }
};
</script>

