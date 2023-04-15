# vue-stacked-ui-demo

This is demo page of [vue-stacked-ui](https://github.com/iridgeinc/vue-stacked-ui)

## Description
`vue-stacked-ui` provides "Stacked UI" in top of vue-router(v4).
It is possible to realize a UI that allows users to drill down through data, sometimes seen in dashboards.

It has the following features

* Allows infinite number of pages to be stacked.
* Multiple properties can be passed to a page by using vue-router.
* URL-first design. (URLs representing stack state)
* Provides callback functions to block when "pop" Stack.


## Requirement
* Vue 3
* vue-router 4


## Install

```
npm install vue-stacked-ui
```

## Usage

### (Preparation) Load plugin in `main.ts`

```typescript
import router from './router'
import { stackedUI } from 'vue-stacked-ui'
import 'vue-stacked-ui/dist/vue-stacked-ui.css'
...
app.use(stackedUI, {router: router});
```

### (Preparation) Allow `slug` parameter in `router/index.ts`

```typescript
    {
      path: '/about/:v1?/:v2?/:v3?/\/:slug(.*)?',  // add "/\/:slug(.*)?"
      props: true,
      meta: { stackable: true }  // Mark page can use stack.
    }
```

### (Use) Control stack

```html
<StackPush to="/about">stack push component</StackPush>
<StackPop>stack push component</StackPop>
```

### (Use) Programatically control stack

```typescript
import { useStack } from "vue-stacked-ui"
const stack = useStack(); 
stack.push("/about/hoge")
stack.pop()
```

### (Use) Register onBeforePop callback if you need.

```typescript
props.currentStack?.onBeforePop(() => {
  return confirm("Realy close stack?")
});
```

## Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## Author

[iridge-mu](https://github.com/mu-iridge)
