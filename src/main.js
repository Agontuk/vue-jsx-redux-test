import Vue from 'vue';
import { reduxStorePlugin } from 'redux-vue';
import store from './store';
import Hello from './Hello';

Vue.use(reduxStorePlugin);

new Vue({
    el: '#app',
    data: {
        show: true
    },
    store: store,
    render(h) {
        return (
            <div>
                <h1>Hola</h1>
                <Hello />
            </div>
        );
    }
});
