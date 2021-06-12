const app = Vue.createApp({
    data() {
        return {
            first_text:'',
            second_text:''
        };
    },
    methods: {
        showMessage() {
            alert('Hello, This is Event Assignment!');
        },
        onEnter: function(event) {
            this.second_text = event.target.value;
         }
    }
});
app.mount('#assignment');