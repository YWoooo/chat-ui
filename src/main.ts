import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'virtual:windi.css'

import api from '@ywchang2404/shared/api/index'
import message, {
  messageStore,
} from '@ywchang2404/ui/src/components/Message/$message'
import handleApiError from '@ywchang2404/shared/plugins/handleApiError'

createApp(App)
  .use(router)
  .use(api)
  .use(messageStore)
  .use(message)
  .use(handleApiError)
  .mount('#app')
