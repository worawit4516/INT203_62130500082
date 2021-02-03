    const app = new Vue({
        el: '#app',
        data() {
            return {
                firstname: 'Worawit',
                lastname: 'Makkasan',
                role: 'Database Administrator',
                article: 50,
                follower: 1524,
                rating: '9.8',
                image: "./images/2.jpg",
            }
        },
        mounted: function() {
            this.$nextTick(function() {
                setInterval(() => {
                    mountedApp.follower += 1
                }, 1000)
            })
        }

    });
    // mountedApp = Vue.createApp(app).mount('#app')