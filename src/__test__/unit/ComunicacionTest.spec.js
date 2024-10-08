import { mount } from '@vue/test-utils'
import ParentComponent from '@/components/ParentComponent.vue'

describe('ChildComponent.vue', () => {
    it('Emite el texto ingresado al hacer clic en el botón', async () => {
        const wrapper = mount(ParentComponent);
        const input = wrapper.find('input');
        const button = wrapper.find('button');

        await input.setValue('Texto de prueba');
        
        await button.trigger('click');

        expect(wrapper.vm.receivedText).toBe('Texto de prueba');
    });
});
