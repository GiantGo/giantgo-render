import { ref } from 'vue'
import { useStore } from 'vuex'

export default function useDrag() {
  const drag = ref(false)
  const store = useStore()

  const dragStart = (evt) => {
    drag.value = true
    console.log(evt)
  }

  const dragEnd = () => {
    drag.value = false
  }

  return {
    drag,
    dragStart,
    dragEnd
  }
}
