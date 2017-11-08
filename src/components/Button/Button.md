Basic button:

```ts
<Button>Push Me</Button>
```

Big pink button:

```ts
<Button size="large" color="deeppink">Lick Me</Button>
```

And you *can* **use** `any` [Markdown](http://daringfireball.net/projects/markdown/) here.

Fenced code blocks with `ts`, `js` or `javascript` languages are rendered as a interactive playgrounds:

```ts
<Button>Push Me</Button>
```

You can add a custom props to an example wrapper (```` ```js { "props": { "className": "checks" } }````):

```ts { "props": { "className": "checks" } }
<Button>I’m transparent!</Button>
```

Or disable an editor by passing a `noeditor` modifier (```` ```js noeditor````):

```ts noeditor
<Button>Push Me</Button>
```

To render an example as highlighted source code add a `static` modifier: (```` ```js static````):

```js static
import React from 'react';
```

Fenced blocks with other languages are rendered as highlighted code:

```html
<h1>Hello world</h1>
```

Each example has its own state that you can access at the `state` variable and change with the `setState` function. Default state is `{}`:

```ts
<div>
  <Button size="small" onClick={() => setState({isOpen: true})} disabled={state.isOpen}>Show Me</Button>
  {state.isOpen && <Button size="small" onClick={() => setState({isOpen: false})}>Hide Me</Button>}
</div>
```

You can change the default state:

```ts
initialState = {count: 42};
<Button onClick={() => setState({count: state.count+1})}>{state.count}</Button>
```