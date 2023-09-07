<template>
  <div>原始element</div>
  <div class="line">
    <el-button @click="onClick('a')">Default</el-button>
    <el-input v-model="input" placeholder="Please input" />
    <el-tag>Tag 1</el-tag>
  </div>
  <div>使用vue原生动态组件</div>
  <div class="line">
    <component :is="ElButton" @click="onClick('b')">Default</component>
    <component :is="ElInput" v-model="input" placeholder="Please input" />
    <component :is="ElTag">Tag 1</component>
  </div>
  <div>自定义动态组件</div>
  <div class="line">
    <ElementCommonComp type="button" @click="onClick('c')">Default</ElementCommonComp>
    <ElementCommonComp type="input" placeholder="Please input" v-model="input"></ElementCommonComp>
    <ElementCommonComp type="tag">Tag 1</ElementCommonComp>
  </div>
</template>

<script setup>
import ElementCommonComp from '@/components/ElementCommonComp.jsx'
import { ElButton, ElInput, ElTag } from 'element-plus'
import { ref } from 'vue'
const input = ref('')
const onClick = (val) => {
  console.log(val + '按钮点击')
}
</script>

<style scoped>
.line {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
