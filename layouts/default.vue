<template>
  <div>
    <RequestModel v-show="$store.state.salonModalState" />
    <div :class="$store.state.salonModalState ? 'blur' : ''">
        <div id="q-circ"></div>
    <Appheader />
    <nuxt id="my-app" />
    <Appfooter />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Appheader from '@/components/Appheader.vue'
import Appfooter from '@/components/Appfooter.vue'
import RequestModel from '@/components/RequestModel.vue'

export default({
  components: { Appheader, Appfooter, RequestModel }
})
</script>

<style>
html {
  
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #fff;
}
#my-app{
    font-family: 'Montserrat', sans-serif;
}

h1, h2, h3, h4, h5, h6,p{margin: 0; padding: 0;}
.container{max-width: 1500px;}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#q-circ{
  position: absolute;
  background-color: #fafafa;
  width: 55%;
  max-height: 650px;
  height: 100%;
  border-radius: 0 0 100% 3%;
}
.blur{
  filter: blur(10px);
  pointer-events: none;
  user-select: none;
}
 
</style>
