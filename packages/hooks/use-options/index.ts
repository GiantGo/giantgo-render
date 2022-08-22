import { ref, watch } from 'vue'
import { createRequest, hasOwn } from '@giantgo-render/utils'

import type { FormDesign, Options, Option } from '@giantgo-render/tokens'

export function useOptions(props: any, formDesign: FormDesign) {
  const items = ref<Array<Option>>([])

  const requestItems = (options: Options) => {
    items.value = []

    if (options.type === 'static') {
      items.value = options.items
    } else if (options.type === 'remote') {
      if (options.remote && hasOwn(formDesign.options.remotes as object, options.remote)) {
        createRequest(formDesign.options.remotes![options.remote]).then((data: any) => {
          items.value = data
        })
      } else {
        items.value = []
      }
    }
  }

  watch(
    () => props.options.options,
    (val) => {
      requestItems(val)
    }
  )

  requestItems(props.options.options)

  return {
    items,
    requestItems
  }
}
