<!-- 属性顺序 -->

<template>
  <component
    v-if="true"
    ref="divRef"
    :is="tag"
    v-once
    v-model="value"
    v-lazy-show
    id="id"
    :xxx="123"
    title="moomfe"
    style="color: red"
    yyy
    @click="() => {}"
  />

  <component
    v-for="item in list" :key="item"
    :is="tag"
  />

  <div :class="{ active: value }" class="xxx" yyy="234" :xxx="123" />
  <div :xxx="123" yyy="234" class="xxx" :class="{ active: value }" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const divRef = ref();
  const list = [1, 2, 3];
  const value = ref(0);
  const tag = 'div';
</script>
