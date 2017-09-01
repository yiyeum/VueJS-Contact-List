import Vue from 'vue'
import Header from './Header.vue'
import Form from './Form.vue'
import Footer from './Footer.vue'

new Vue({
    el: '#app',
    components:{
        'kt-header':Header,
        'kt-form':Form,
        'kt-footer':Footer
    }

});
