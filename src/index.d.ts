import { Store } from 'vuex'
import { AxiosInstance } from 'axios'
import { $HandleApiError } from '@ywchang2404/shared/plugins/handleApiError'
import { $Message } from '@ywchang2404/ui/src/components/Message/$message'
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $api: AxiosInstance
    $message: $Message
    $store: Store<any>
    $handleApiError: $HandleApiError
  }
}
