import {ref} from "vue";

const r = ref(1)

setInterval(()=>{
  r.value = r.value + 1
},100)
export const Tsx = {
  render() {
    return <div>Vue 3.0 {r.value}</div>;
  },
};
export default Tsx
