const app = new Vue ({

    el: '#app',
    data:{

        emails: [],
        loading: true,

    },

    created(){

    },

    mounted(){
        for(let i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( risp => {
              this.emails.push(risp.data.response);
              this.loading = false
              
            })
        }
    },
    methods:{
        
    }
})
