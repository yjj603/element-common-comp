import { ElButton, ElInput } from 'element-plus'
import {ref} from "vue";

const count = ref(0)

const onClick = () => count.value++
export const  MyJsx = (attrs,{slots})=>{
    return <div>
        <ElButton onClick={onClick}>{slots.default()}</ElButton>
        <ElInput v-model={count.value}></ElInput>
    </div>
}
