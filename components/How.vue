<template lang="pug" >
    .how
        h2.header how it works?
        .how-container
            .content
                .how-data(v-for="(item, i) in howdata")
                     p(:style="$route.name == 'saloon' ? { background: '#0091ea', color: '#fff' } : '' ") {{i+1}}
                     h4 {{item.title}}
                     img(:src="item.src")
                
</template>
<script>
export default {
    props:['howdata', 'slideImg']
     
}
</script>
<style lang="scss" scoped>
.how{
    .header{
        display: block;
        text-align: center;
        font-size: 48px;
        font-weight: normal;
        margin: 48px 0;

        @include for-phone-only{
            margin: 30px 0;
        }

        @include for-phone-only-landscape{
            margin: 30px 0;;
        }

        
        } 

        .how-container{
        background: #f2f2f2;
        width: 100%;

            .content{
                display: flex;
                justify-content: space-around;
                padding: 0 166px;

                @include for-phone-only{
                    padding: 0 30px;
                    flex-direction: column;
                }

                @include for-phone-only-landscape{
                    padding: 0 60px;
                    flex-direction: column;
                }

                @include for-tablet-landscape-up{
                        padding: 0 60px;
                }

                .how-data{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 71px 0;

                    @include for-phone-only{
                        padding: 20px 0;
                    }

                    @include for-phone-only-landscape{
                        padding: 20px 0;
                    }

                    p{
                        width: 37px;
                        height: 37px;
                        border-radius: 50%;
                        background: #ffde55;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 28px;
                    }

                    h4{
                        margin-bottom: 32px;
                        font-size: 18px;
                        color: #000000;
                        font-weight: normal;
                        text-align: center;
                    }

                    img{
                        max-width: 215px;
                        width: 100%;
                    }
                }
            }
        }

}

</style>