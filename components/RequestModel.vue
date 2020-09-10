<template>
    <div class="req-model">  
        <h5>Registration Request</h5> 
        <form action="#" @submit.prevent="">
        <label for="name">Your Name</label>
        <input type="text" placeholder="eg.Elon Musk" v-model="name">
        <span class="err" v-show="error.input == 'name'">{{ error.message }}</span>
         <label for="name">Phone Number(+91)</label>
        <input type="number" placeholder="Enter 10 digital mob no" v-model="phoneNumber">
        <span class="err" v-show="this.error.input == 'phoneNumber'">{{ error.message }}</span>
        <button class="submit" @click="validation()" type="submit">Submit</button>
        <button @click="$store.commit('TOGGLE_SALON_MODAL')" class="cancel" type="clear">Cancel</button>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name: '',
            phoneNumber: '',
       error: {
           message: '',
           input: ''
       }
    }
    },

    methods:{
        validation(){
            this.error ={
                message: '',
                input: ''
            }

            const nameCheck = /^[A-Za-z ]{3,20}$/
            const phoneCheck = /^[789][0-9]{9}$/ 

        if(!nameCheck.test(this.name) ){
            
            this.error.message = 'Invalid name you entered'
            this.error.input = 'name'
          this.$noty.error(this.error.message, {
                  timeout: 2000,
                 progressBar: true,
                layout: 'topCenter'
             })
            return false
             
        }

        if(!phoneCheck.test(this.phoneNumber)){
            this.error.message = 'Invalid phone you entered'
            this.error.input = 'phoneNumber'
             this.$noty.error( this.error.message, {
                  timeout: 4000,
                 progressBar: true,
                layout: 'topCenter'
             })
            return false
        }
    }
}
}
</script>
<style lang="scss" scoped>
.req-model{
        width: 30%;
    height: auto;
    background: #fff;
    border-radius: 22px;
    margin: 0 auto;
    box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.082);
    padding: 32px;
    box-sizing: border-box;
    position: fixed;
    top: 35%;
    z-index: 999;
    left: 35%;
    
    @include for-phone-only{
        width: 90%;
        top: 20%;
        left: 5%;
        padding: 10px;
    }

    @include for-phone-only-landscape{
         width: 70%;
        top: 5%;
        left: 15%;
    }

    @include for-tablet-landscape-up{
        width: 50%;
        top: 15%;
        left: 25%;
    }

    h5{
        font-size: 22px;
      text-align: center;
      font-weight: 600;
      margin-bottom: 16px;
    }

    label{
         text-align: center;
        display: block;
        width: 100%;
        font-size: 12px;
        margin-top: 16px;
        margin-bottom: 4px;
    }

     input {
        width: 100%;
         
        padding: 8px;
        border-radius: 22px;
        border: 1px solid rgb(209, 209, 209);
        background: #fafafa;
        text-align: center;
     }
     .err{
         color: rgb(231, 109, 109);
         font-size: 14px; 
         margin-top: 12px;
     }

     .submit{
        background: #0091ea;
        color: white;
        width: 100%;
        text-align: center;
        border: none;
        padding: 12px 30px;
        border-radius: 32px;
        margin-top: 24px;
        text-decoration: none;
        cursor: pointer;
        transition: 0.2s ease all;

         &:hover{
          transform: scale(1.02);
    }
     }

     .cancel{
          background: rgb(240, 240, 240);
        color: black;
        width: 100%;
        text-align: center;
        border: none;
        padding: 12px 30px;
        border-radius: 32px;
        margin-top: 24px;
        text-decoration: none;
        cursor: pointer;
        transition: 0.2s ease all;

         &:hover{
          transform: scale(1.02);
    }
     }
}
</style>