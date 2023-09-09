export const MyJsx = (props, { slots }) => {
  const map = {
    button: ElButton,
    input: ElInput,
    tag: ElTag
  }
  const el = Reflect.get(map, props.type)
  return <el v-slots={slots}></el>
}
MyJsx.props = {
  type: {
    type: String,
    validator(value) {
      return ['input', 'button', 'tag'].includes(value)
    }
  }
}
