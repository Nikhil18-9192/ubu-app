<template>
     <div id="footer" :style="$route.name == 'saloon' ? { background: '#0091ea'} : '' ">
         <nuxt-link to="/" v-for="(item, i) in list" :key="i" :style="$route.name == 'saloon' ? { color: '#fff'} : '' ">{{ item }}</nuxt-link>
     </div>
</template>
<script>
export default {
    data(){
        return{
            list:['Home', 'Salon Registration', 'About', 'Privacy Policy', 'Terms & Conditions' ]
        }
    }
}
</script>
<style lang="scss" scoped>
#footer{
    display: flex;
    align-items: center;
    min-height: 40px;
    background: #edca3b;
    justify-content: center;

    @include for-phone-only{
        flex-direction: column;
    }

    a{
        margin: 0 12px;
        text-decoration: none;
        font-size: 14px;
        color: black;
        text-align: center;
    }
}
</style>