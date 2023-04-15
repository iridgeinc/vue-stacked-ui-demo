```typescript
<script setup lang="ts">
 import { ref } from 'vue'
 import CodeMySelf from '../../SampleView.md'
 import type { Page }  from "vue-stacked-ui"

 const props = defineProps<{
   v1?: string,
   v2?: string,
   v3?: string,
   currentStack?: Page,
 }>();

 let blockPop = ref(false)
 
 props.currentStack?.onBeforePop(() => {
   if (blockPop.value) {
     return confirm("Realy close stack?")
   } else {
     return true
   }
 });

</script>

<template>
  <section class="content">
    <h1>This is an sample page</h1>

    <h2> `props` from URL</h2>
    <ul>
      <li>v1:{{ props.v1 }}</li>
      <li>v2:{{ props.v2 }}</li>
      <li>v3:{{ props.v3 }}</li>
    </ul>

    <h2>PUSH pages</h2>
    These links PUSH a stack then load page.
    <ul>
      <li><StackPush to="/sample">PUSH /sample</StackPush></li>
      <li><StackPush to="/sample/This-is-value1">PUSH /sample/This-is-value1</StackPush></li>
      <li><StackPush to="/sample/This-is-value1/value2">PUSH /sample/This-is-value1/value2</StackPush></li>
    </ul>

    <h2>Move pages</h2>
    These links POP all then route to page.
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/sample">Sample</RouterLink></li>
    </ul>

    <template v-if="props.currentStack != undefined">
      <h2>Block stack pop</h2>
      <label>
        <input type="checkbox" v-model="blockPop" />
        If checked, a confirm dialog box will be displayed when pop stack.
      </label>
    </template>

    <hr />
    
    <CodeMySelf />
    
  </section>
</template>
```
