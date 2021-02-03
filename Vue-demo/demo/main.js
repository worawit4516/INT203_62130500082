    const app = {
        data() {
            return {
                message: 'Hello',
                name: 'Vue'
            }
        }
    }
    mountedApp = Vue.createApp(app).mount('#app')
