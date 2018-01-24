<template>
  <el-button v-show="isShow" class="backtotop" type="primary" round size="small" icon="el-icon-upload2" @click="backTop"></el-button>
</template>
<script>
export default {
  data() {
      return{
        isShow:false
      }
  },
  mounted() {
      this.$nextTick(()=> {
        window.onscroll = ()=>{
            console.log(document.documentElement.scrollTop)
            this.isShow = document.documentElement.scrollTop > 100 ? true : false
          }
      })
  },
  methods: {
    backTop() {
        let timer = null
        timer = setInterval(()=>{
            let ct = document.body.scrollTop || document.documentElement.scrollTop
            ct -= 10
            if(ct > 0) {
                window.scrollTo(0,ct)
            }else {
                window.scrollTo(0,0)
                clearInterval(timer)
            }
        },10)
    }
  }
}
</script>

<style lang="less" scoped>
    .backtotop {
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
    }
</style>
