<template>
  <div>
    <!-- <ul>
      <li :key="i" v-for="(item, i) in list">{{item}}</li>
    </ul> -->
    <ol>
      <li :key="num" v-for="num in nums">{{num}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: {
        name: '王春伟',
        age: '20',
        job: '工程师'
      },
      nums: [1, 2, 3, 4]
    }
  },
  beforeCreate () {
    // this.list.height = '100'
  },
  created () {
    // this.list.height = '178'
  },
  mounted () {
    // console.log(this)
    // this.$set(this.list, 'height', '250')
    // this.$set(this.nums, 5, 'nihao666')
    this.nums.push(5)
    this.nums[4] = 8
    console.log(this.nums)
  }
}
</script>

<style scoped>

</style>
