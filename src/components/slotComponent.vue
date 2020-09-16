<template>
  <div>
    <!-- 示例1 -->
    <navigation-link />
    <navigation-link>
      覆盖文案
      <a href="javascript:">链接哈</a>
    </navigation-link>
    <!-- 示例2 -->
    <base-layout>
      <template #test1>
        <div>插槽1----</div>
      </template>
      <div></div>
      <template v-slot:[dynamicSlotName]>动态插槽名</template>
      <template v-slot:test2>
        <div>插槽2</div>
      </template>
      <div>默认插槽内容</div>
    </base-layout>
    <!-- 示例3 -->
    <current-user hint="“simple 版本"></current-user>
    <current-user hint="complex 版本">
      <template v-slot:default="slotProps">{{ JSON.stringify(slotProps)}}</template>
    </current-user>
    <!-- <slot name="navigation"></slot> -->
  </div>
</template>

<script>
import NavigationLink from "./slot/navigationLink";
import BaseLayout from "./slot/baseLayout";
import CurrentUser from "./slot/currentUser";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    NavigationLink,
    BaseLayout,
    CurrentUser
  },
  data: function() {
    return {
      dynamicSlotName: "test1"
    };
  }
};
</script>

