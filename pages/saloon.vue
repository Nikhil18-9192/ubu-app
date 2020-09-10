<template>
    <div>
    <carousel :items="items" :slideText="slideText" />
    <how :howdata="howdata"/>
  </div>
</template>
<script>
import carousel from '@/components/Homecarousel.vue'
import how from '@/components/How.vue'
export default {
    
     components: {carousel, how},
  data(){
    return{
      howdata:[
       {
          title: 'Register Your Salon',
          src: '/crsl5.png'
        },
        {
          title: 'Setup Details',
          src: '/crsl6.png'
        },
        {
          title: 'Connect with your customers',
          src: '/crsl7.png'
        }
      ],
      
        items: ['/salon_bg.png'],
        slideText:
          {
            h2: 'Want to register Your Salon With Us?',
            p: 'Please fill in the details to request your salon for registering in our app',
            h5: '',
            a: 'Send Request >>',
            img: ''
          }
    }
  }

}
</script>
<style lang="scss" scoped>

</style>