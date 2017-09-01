<template>
    <div class="contactForm">
        <div class="alert alert-warning text-center" role="alert" v-show="!showAlert">
            <strong>Hey!</strong> {{alertMessage}}
        </div>
        <div v-for="list in contacts">
            <ul>
                <li>{{list}}</li>
            </ul>
        </div>
        <div class="row">
            <form class="col-md-3 contactForm" >
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Name" v-model="name">
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="tel" class="form-control" id="phone" placeholder="Enter Phone number" v-model="phone">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter Email" v-model="email">
                </div>
                 <div class="text-center">
                    <button type="button" class="btn btn-info" v-on:click.prevent="addContact">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    export default{

        data:function(){
            return{
                name:"",
                phone:"",
                email:"",
                contacts:[],
                showAlert:true,
                alertMessage:""
            }
        },

        methods:{

            addContact:function(){

                //check if the values are null.

                if(this.name != '' && this.phone != '' && this.email!= '') {
                    this.contacts.push("Name : " + this.name + " | Phone : " + this.phone + " | Email : " + this.email);

                    //reset the data in input boxes.

                    this.name ='';
                    this.phone ='';
                    this.email = '';
                    this.showAlert = true;
                } // if

                else if(this.name == '' && this.phone =='' && this.email ==''){

                    this.alertMessage = "Please fill the inputs."
                    this.showAlert = false;

                } // else if - three inputs are empty

                else if(this.name == ''){

                    this.alertMessage = "Please fill the name."
                    this.showAlert = false;

                } // else if - name is empty

                else if(this.phone == ''){

                    this.alertMessage = "Please fill the phone number."
                    this.showAlert = false;

                } // else if - phone is empty

                else if(this.email == ''){

                    this.alertMessage = "Please fill the email."
                    this.showAlert = false;

                } // else if - email is empty

            } // addContact()

        }
    }
</script>

<style>
    .contactForm{
        margin: 3% auto;
    }
</style>