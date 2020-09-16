<template>
  <div>
    <div>示例2【具名插槽】</div>
    <slot name="test1"></slot>
    <!-- slot 相当于子组件中的占位符，内容由父组件填充 -->
    <slot name="test2"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
  data: function() {
    return {
      status: "ok"
    };
  }
};
</script>

