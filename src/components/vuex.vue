<template>
  <div>
    <button @click="handleClick">点击</button>
    <div>数据展示：变量{{count}}--依赖变量{{count2}}</div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "Router",
  props: {
    msg: String
  },
  // 从store中展示数据
  // 第一种
  computed: {
    count() {
      return this.$store.state.count;
    },
    count2() {
      return this.$store.getters.count2;
    }
  },
  // 第二种：
  //   computed: mapState(["count", "count2"]),
  // 第三种[报错]
  //   computed: {
  //     ...mapGetters([
  //       "count",
  //       "count2"
  //       // ...
  //     ])
  //   },
  methods: {
    handleClick: function() {
      console.log("this:", this);
      this.$store.commit("increment");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
