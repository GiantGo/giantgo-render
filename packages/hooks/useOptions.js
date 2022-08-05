import { ref, watch, onMounted } from 'vue'
import { createRequest, hasOwn } from '@giantgo-render/utils'

export default function useOptions(props, formDesign) {
  const items = ref([])

  const requestItems = (options) => {
    items.value = []

    if (options.type === 'static') {
      items.value = options.items
    } else if (options.type === 'remote') {
      if (options.remote && hasOwn(formDesign.options.remotes, options.remote)) {
        createRequest(formDesign.options.remotes[options.remote]).then((data) => {
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
      requestItems(val, formDesign)
    }
  )

  requestItems(props.options.options, formDesign)

  return {
    items,
    requestItems
  }
}
