const app = new Vue ({

    el: '#app',
    data:{

        emails: [],

    },

    created(){

    },

    mounted(){
        for(let i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( risp => {
              this.emails.push(risp.data.response);
              console.log(this.emails);
            })
        }
    },
    methods:{
        
    }
})
