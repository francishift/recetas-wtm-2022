import { createApp } from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

UIkit.use(Icons);

createApp(App).use(router).mount('#app');
