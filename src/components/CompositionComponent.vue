<template>
  <div>
    <p>Clicks on todos: {{ clickCount }}</p>
    <Tsx></Tsx>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  ref,
  toRef,
  Ref,
} from 'vue';
import {Todo, Meta} from './models';

import {Tsx} from "./Tsx";
console.log("{Tsx}", {Tsx})

function useClickCount() {
  const clickCount = ref(0);

  function increment() {
    clickCount.value += 1
    return clickCount.value;
  }

  return {clickCount, increment};
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length);
  return {todoCount};
}

export default defineComponent({
  name: 'CompositionComponent',
  components: {Tsx},
  props: {
    title: {
      type: String,
      required: true
    },
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => []
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(props) {
    return {...useClickCount(), ...useDisplayTodo(toRef(props, 'todos'))};
  },
});
</script>
