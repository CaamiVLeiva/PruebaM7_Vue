import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

describe('Navegación del Router', () => {
    let router

    beforeEach(async () => {
        router = createRouter({
            history: createWebHistory(),
            routes: [
                { path: '/', component: HomeView },
                { path: '/about', component: AboutView },
            ]
        })
        
        await router.push('/')
        await router.isReady()
    })

    afterEach(() => {
        router && router.push('/')
    })

    it('Renderiza HomeView al navegar a "/"', async () => {
        const wrapper = mount(HomeView, {
            global: {
                plugins: [router]
            }
        })

        expect(wrapper.findComponent(HomeView).exists()).toBe(true)
    })

    it('Renderiza AboutView al navegar a "/about"', async () => {
        await router.push('/about')
        await router.isReady()

        const wrapper = mount(AboutView, {
            global: {
                plugins: [router]
            }
        })

        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })
})
