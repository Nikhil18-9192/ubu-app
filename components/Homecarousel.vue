<template>
        <div class="home-carousel">
            <div class="dual-view">
                <div  class="left" :style="$route.name == 'saloon' ? { padding: '0', width: '65%' } : ''">
                <transition   name="slide" >
                <img class="slide-img" :src="item" v-for="(item, i) in items" :key="i" v-if="i==currentImgIndex" :style="$route.name == 'saloon' ? { position: 'unset', width: '700px', 'max-width': 'none' } : ''"  >
                </transition>
                </div>
                <div class="right">
                    <div class="slider-text">
                        <h2>{{ slideText.h2 }}</h2>
                        <p>{{ slideText.p }}</p>
                        <h5>{{ slideText.h5 }}</h5>
                        <a class="download-btn" href="https://www.google.com/" v-show="$route.name == 'index'"><img :src="slideText.img" alt="">{{ slideText.a }}</a>
                        <a v-show="$route.name == 'saloon'" class="request-btn" @click="$store.commit('TOGGLE_SALON_MODAL')"><img :src="slideText.img" alt="">{{ slideText.a }}</a>
                    </div>
                </div>
            </div>
        </div> 
</template>
<script>
export default {

   mounted() {
    setInterval(() => {
      this.currentImgIndex < this.items.length - 1
        ? this.currentImgIndex++
        : (this.currentImgIndex = 0)
    }, 3000)
  },
  
  props: ['items', 'slideText'],
   data(){
     return{
       currentImgIndex: 0
     }
   },

}
</script>
<style lang="scss" scoped>
.home-carousel{
  height: 100vh;
  padding: 0 166px;

  @include for-phone-only{
    padding: 0 30px;
    height: 100%;
  }

  @include for-phone-only-landscape{
    padding: 0 60px;
    height: 100%;
  }

  @include for-tablet-landscape-up{
    padding: 0 60px;
    height: 100%;
  }

.dual-view{
    display: flex;
    width: 100%;
    position: relative;

    @include for-phone-only{
      flex-direction: column;
    }

    @include for-phone-only-landscape{
      flex-direction: column;
    }
    
    
.left{
    width: 45%; 
    display: flex;
    position: relative;
    justify-content: flex-end;
    padding-right: 64px;
    position: relative;
    overflow: hidden;

    @include for-phone-only{
      width: 100%;
      padding-right: 0;
      justify-content: center;
    }

     @include for-phone-only-landscape{
       width: 100%;
      padding-right: 0;
      justify-content: center;
     }
    

  .slide-img{
    max-width: 320px;
    width: 100%; 
    position: absolute;

     @include for-phone-only{
      position: unset;
    }

    @include for-phone-only-landscape{
      position: unset;
    }
    
    }
  }

.right{
   width: 55%;
   position: relative;

   @include for-phone-only{
      width: 100%;
    }

    @include for-phone-only-landscape{
      width: 100%;
    }

  .slider-text
  h2{
    font-weight: 200; 
    font-size: 45px;  
    line-height: 59px;  
    text-align: right;  
    color: #6c6c6c;  
    margin-bottom: 48px;
    
    @include for-phone-only{
      font-size: 30px;
      line-height: 40px;
      text-align: left;
      margin-bottom: 20px;
    }

    @include for-phone-only-landscape{
      font-size: 30px;
      line-height: 40px;
      margin-bottom: 20px;
   }
  
  @include for-tablet-landscape-up{
    font-size: 40px;
  }
     
    }

  h2 b{
    font-weight: normal; 
    color: black;
    }

  p{
    margin-bottom: 24px;  
    font-size: 16px;  
    text-align: right;
    margin-left: 237px;  
    color: #000000;  

    @include for-phone-only{
      margin-left: 0;
      text-align: left;
    }

     @include for-phone-only-landscape{
       margin-left: 0;
     }

     @include for-tablet-landscape-up{
       margin-left: 0;
     }
    }

  h5{
    margin-bottom: 24px; 
    font-size: 16px; 
    text-align: right; 
    color: #000000; 
    font-weight: 600;
    margin-left: 410px;

    @include for-phone-only{
      margin-left: 0;
      text-align: left;
    }
     @include for-phone-only-landscape{
       margin-left: 95px;;
     }

     @include for-tablet-landscape-up{
       margin-left: 0;
     }
    }

 
  .download-btn{
    background: #ffde55;
    color: black;
    display: inline-flex;
    align-items: center;
    float: right;
    padding: 12px 30px;
    border-radius: 32px;
    margin-top: 32px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease all;

    &:hover{
          transform: scale(1.02);
    }

    @include for-phone-only{
      margin-top: 20px;
      float: unset;
      text-align: center;
    }
  }

      .request-btn{
            background: #0091ea;
    color: white;
    display: inline-flex;
    align-items: center;
    border: none;
    float: right;
    padding: 12px 30px;
    border-radius: 32px;
    margin-top: 32px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease all;

     &:hover{
          transform: scale(1.02);
    }

    @include for-phone-only{
      margin-top: 20px;
      float: unset;
      text-align: center;
    }
      }
   

  a img{
    margin-right: 16px;
    }
  }
}
 
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
   @include for-phone-only{
      transition: unset;
    }
     @include for-phone-only-landscape{
       transition: unset;
     }
}
.slide-enter /* .slide-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(50%) scale(0.7);

   @include for-phone-only{
      transform: unset;
    }  
    
     @include for-phone-only-landscape{
       transform: unset;
     }
  
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-50%) scale(0.7);

   @include for-phone-only{
      transform: unset;
    }

    @include for-phone-only-landscape{
       transform: unset;
     }
}

  } 
</style>