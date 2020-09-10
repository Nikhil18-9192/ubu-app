<template>
             <div class="header">
             <div class="row">
                 <div class="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-12">
                     <div class="logo">
                         <img src="../static/ubu.svg" alt="">
                         <p>Salon Booking, Live Listing & More...</p>
                     </div>
                 </div>
                 <div class="col-xl-6 col-lg-6 col-md-6 col-sm-7 col-12">
                     <div class="menu">
                        
                              <nuxt-link to="/" :style="$route.name == 'index' ? { color: '#edca3b' } : ''" >Home</nuxt-link>
                              <nuxt-link to="/saloon" :style="$route.name == 'saloon' ? { color: '#edca3b' } : ''">Salon Registration</nuxt-link>
                              <nuxt-link to="/about" :style="$route.name == 'about' ? { color: '#edca3b' } : ''">About</nuxt-link>
                         
                     </div>
                 </div>
             </div>
         </div>
</template>
<script>
export default {
    
     
}
</script>

<style lang="scss" scoped>
.header{
    padding: 46px 166px;
    position: sticky;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 46px 166px;
    justify-content: space-between;
    top: 0;
    left: 0;
    z-index: 1000;

    @include for-phone-only{
        padding: 30px;
        background: #fff;
    }

    @include for-phone-only-landscape{
        padding: 30px 60px;
        background: #fff;
    }

    @include for-tablet-landscape-up{
         padding: 30px 60px;
         
    }

    .logo {
        @include for-phone-only{
            text-align: center;
        }
    p{
     font-weight: 600;
    font-size: 9px;
    color: #1f1f1f;
    margin-top: 4px;
    }
    }

    .menu{
        float: right; 
        padding: 12px 0;
        background: #fff;

        @include for-phone-only{
            float: left;
        }
        
        a{
        margin-left: 44px;
        text-decoration: none;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #000000;
        font-family: 'Montserrat', sans-serif;
        transition: 0.3s ease all;

        @include for-phone-only{
            margin-left: 20px;
        }

        @include for-phone-only-landscape{
            margin-left: 20px;
        }

        &:hover{color: #edca3b;}
        }
        
        
    }
}
</style>