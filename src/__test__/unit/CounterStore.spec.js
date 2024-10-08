import { mount } from '@vue/test-utils'
import CounterComponent from '@/components/CounterComponent.vue'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('CounterComponent.vue', () => {
    let store

    beforeEach(() => {
        setActivePinia(createPinia())
        store = useCounterStore()
    })

    it('Renderiza el contador', () => {
        const wrapper = mount(CounterComponent)
        expect(wrapper.find('h1').text()).toBe('Contador: 0')
    })

    it('El contador inicia en 0', () => {
        expect(store.count).toBe(0)
    })
    
    
    it('Decrementa el contador al hacer click en el botón "decrementar"', async () => {
        const wrapper = mount(CounterComponent)
        await wrapper.findAll('button')[1].trigger('click') 
        expect(wrapper.find('h1').text()).toBe('Contador: -1')
    })
    
    it('Incrementa el contador al hacer click en el botón "incrementar"', async () => {
        const wrapper = mount(CounterComponent)
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('h1').text()).toBe('Contador: 1')
    })

})
