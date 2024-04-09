<!-- 属性顺序 -->

<template>
  <component
    v-if="true"
    ref="divRef"
    :is="tag"
    v-once
    v-model="value"
    v-lazy-show
    :xxx="123"
    id="id"
    title="moomfe"
    style="color: red"
    yyy
    @click="() => {}"
  />

  <component
    v-for="item in list" :key="item"
    :is="tag"
  />
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const divRef = ref();
  const list = [1, 2, 3];
  const value = ref(0);
  const tag = 'div';
</script>
