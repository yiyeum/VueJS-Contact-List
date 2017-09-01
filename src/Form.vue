<template>
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
                <button type="button" class="btn btn-info" v-on:click="addContact">Add</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default{
        data:function(){
            return{
                name:"",
                phone:"",
                email:""
            }
        }
    }
</script>

<style>
    .contactForm{
        margin: 3% auto;
    }
</style>