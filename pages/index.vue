<template>
  <div>
    <carousel :items="items" :slideText="slideText" />
    <how :howdata="howdata"/>
  </div>
</template>

<script>
import carousel from '@/components/Homecarousel.vue'
import how from '@/components/How.vue'
export default({
  components: {carousel, how},
  data(){
    return{
      howdata:[
       {
          title: 'Select the category',
          src: '/crsl1.png'
        },
        {
          title: 'Select The Service',
          src: '/crsl2.png'
        },
        {
          title: 'Select The Salon',
          src: '/crsl3.png'
        },
        {
          title: 'Book Your Chair',
          src: '/crsl4.png'
        }
      ],
      
        items: ['/phone1.png', '/phone2.png', '/phone3.png'],
        slideText:
          {
            h2: 'Let’s use technology to embrace social distancing',
            p: 'During this pandemic it’s necessary to act & follow goverment regulations on social distancing and other preventive measures.',
            h5: 'We can keep salons operating without being crowded and losing that connection with user.',
            a: 'Download App Now',
            img: '/app_icon.svg'
          }
        
      
    }
  }
})
</script>

<style>
 
</style>
