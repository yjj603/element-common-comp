import { defineComponent } from 'vue'
import { ElButton, ElInput, ElTag } from 'element-plus'

export default defineComponent({
  props: {
    type: {
      type: String,
      validator(value) {
        return ['input', 'button', 'tag'].includes(value)
      }
    }
  },
  setup(props, { slots }) {
    const map = {
      button: ElButton,
      input: ElInput,
      tag: ElTag
    }
    const el = Reflect.get(map, props.type)
    return () => <el v-slots={slots}></el>
  }
})
