Intro to React
==============

## Outline

First half:

* Task Lister in React!
* Task Lister: Yay or Nay?
* Brief History/Context of React
* Understanding React (The Why)
* Thinking in React (Overview)

5 Minute Break!

* Project Set Up (minimal)
* JSX in Depth (What is JSX really?)
* JSX Syntax

## In Lecture Notes

- Start With A Mock
  - If we're lucky, we already have mock data.

Assignment From Task to List
Task Descriptions
  [{ Thinking in React, High }]
  [{ Buy Groceries, low }]
TODO List
[
  Learn React,
  TODO
]

- **Step 1:** Break The UI Into A Component Hierarchy
  - Take our mock and break it out into components.
  - Follow the idea of _single responsibility principle_ as a guideline.
  - No hard rules.

```
App
  Forms
    ListForm
    TaskForm
  Lists
    ListContainer
      Task
```

- **Step 2:** Build A Static Version in React
  - Start writing code.
  - Basic JSX.
  - NO STATE!
  - Make mock data if needed to help drive coding this.

**Starter Code:**

```html
<html>
<head>
  <meta charset="UTF-8">
  <title>React!!!</title>
<body>
  <div id='root'></div>
</body>
<script>
  // Our React code will go here.
</script>
</html>
```

## Lecture Notes (1.5 hrs)

### [Task Lister][1] in React! (5 min)

- Ooooooh!! Ahhhhhh!
- Impressions? Any _React_-ions?
  - Does the code look more concise?
  - Is the code easier to read?
  - Can you immediately tell how the code is organized?
- What do you see?
  - Let's add all of the new stuff to our Task Lister as terms to eventually define and learn.
  - JSX, Components, etc.
  - Anything we learn in this lecture will be priority _high_.


### Task Lister: Yay or Nay? (5 min)

**Discuss Vanilla JS**

- So what was difficult about Task Lister?
- What were some "gotchas" that took time or caused bugs?
- Are there any patterns you started to use to make writing Task Lister easier?


### Brief History/Context of React (5 min)

- Well you're in luck!
- The answer to many of your troubles is React!
- In fact, it's possible that some of the patterns you used are the same ones used in React.
- So what is React?
  - https://reactjs.org/

    > **React**
    >
    > A JavaScript library for building user interfaces

  - The React documentation is _fantastic_ and will answer anything you will ever want to know about React. However, it's a lot of reading. My goal is to use your experiences and connect the dots to the relevant bits in React.
  - There are two libraries `react`, `react-dom`
  - [This is to divide up the functionality and enables `react-native`, `react-vr`, etc.][2]
    - For the curious students, explaining the difference won't make any sense to them until we learn more about React. So save the question for later.


### Understanding React (The Why) (10 min)

This is one of our two main goals.

- Before even learning React, we should understand the thinking behind React as this is why it's so useful for building user interfaces.
- Much like how Rails has an opinionated approach to building web-applications, React has an opinionated approach on how to build user interfaces.
  - Also note that React has excellent error messages like Rails. Not as good but good.
- First, let's take a look at how React describes itself:
  - We already saw that it say, "_A JavaScript library for building user interfaces_"
  - But it's also:
    - _Declarative_
    - _Component Based_
    - _Learn Once, Write Anywhere_
  - And I'd like to point out one more important distinction that will make more sense after this afternoon's lecture (on state & props):
    - [Composition over Inheritance][5]
- How does all of this fit together? [How do you use those ideas to _think in React_?][4]
  - Start With A Mock
  - **Step 1:** Break The UI Into A Component Hierarchy
  - **Step 2:** Build A Static Version in React
  - **Step 3:** Identify The Minimal (but complete) Representation Of UI State
  - **Step 4:** Identify Where Your State Should Live
  - **Step 5:** Add Inverse Data Flow
  - And That’s It
- Without any knowing any React, some of these words and ideas may seem completely foreign, so let's add them to **Task Lister**! We'll answer them as we learn.
  - Component Hierarchy
  - Static Version
  - UI State
  - Inverse Data Flow
- For this first lecture, we're only going to tackle **Mock + Steps 1 & 2**.


### Thinking in React (Overview) (20 min)

- We're going to take Task Lister and build out parts of it in order to learn React.
- Our **goal** is to end up with code that looks like this:

```javascript
// See: Task Lister React Code
```

- **Start With A Mock**
  - Let's draw out Task Lister.
  - What does it look like (we already have this)?
  - What does the data driving it look like?
    - _Write out our JavaScript object here._
- **Step 1: Break The UI Into A Component Hierarchy**
  - Start drawing boxes on our app.
  - Follow the [Single Responsibility Principle][6].
    - A component should ideally only do one thing.
    - If it ends up growing, it should be decomposed into smaller subcomponents.
  - Now you hear me say component, but what is a **Component**?
    - [Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.][7]
  - Finally, we can arrange our components into a hierarchy (answering our question about what is a component hierarchy).
- **Step 2: Build A Static Version in React**
  - _This is where we finally start coding._ And even now, our coding is dead simple. But first, explanation.
  - A static version is one that has **no interactivity**.
  - We only display data.
  - Why?
    - Interactivity requires a lot of thinking and very little actual coding.
    - Just displaying data, especially now that we've compartmentalized our components into simpler building blocks, is a lot of typing without a lot of thinking.
  - No **state**!!
    - State is reserved only for interactivity, that is, data that changes over time.
  - Top-down vs bottom-up doesn't matter much. Especially for small apps. Bigger apps, maybe bottom-up is better.
  - _React’s one-way data flow (also called one-way binding) keeps everything modular and fast._


### 5 Minute Break (10:15)

- Take some time to internalize the process we just went through and come back ready to code!
- Maybe even try to replicate Mock => Step 1 => Step 2 ourselves.


### Project Set Up (minimal) (10 min)

- React is magic, right? Let's get those JavaScript libraries and start using it right away without any sort of extra files.
  - We don't want to have to think about where to place files, how to break things up, etc. yet.
- So, we'll use the [React CDN links][8] to start.
  - **Note:** This is not how you'll work in production or even in your labs. I'm doing this to avoid diving into a discussion about all the tooling surrounding React.

```html
<html>
<head>
  <meta charset="UTF-8">
  <title>React</title>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<body>
  <div id='root'></div>
</body>
<script>
  // React Magic Goes Here
</script>
</html>
```

- Now we can follow the React docs and do the [Hello World][9] example:

```javascript
// ReactDOM.render(whatToAddToDOM, whereToPutIt);
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

- But it doesn't. It says that `<` is a syntax error. Why?
  - It's not actually valid JavaScript.
  - What does it look like? HTML? XML?
  - This is [JSX][11].
    - It is a syntax extension to JavaScript that stands for [JavaScript XML][10].
    - React embraces the fact that rendering logic is inherently coupled with other UI logic.
    - This is syntactic sugar that _transpiles_ into JavaScript.
    - React separates concerns with loosely coupled units called _“components”_ that contain both.
- If it's not valid JavaScript, how did Dick and Garry get it to work?
  - [Babel][12] is the first piece of magic.
    - This is a **transpiler** that, among many other useful things, allows us to convert JSX into plain JavaScript.
    - This is not to be confused with a _compiler_ though they are similar (and sometimes interchanged).
    - _Note:_ Babel developer completely quit job to build this!
  - We can tell [standalone Babel][14] to transpile our `script` by adding `type='text/babel'` to it.
  - Second is that `React` must be in scope for JSX to work.
    - For now, this won't make any sense because we've included `React` in the global scope using our `script` tag.
    - However, in later lectures and in your labs where you will be using things like Webpack and `create-react-app`, you will need to import this like so:
      - `import React from 'react';`

  ```html
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <script type='text/babel'></script>
  ```

- With all of that added, it now works! Awesome!!
- But just getting this to work doesn't help us understand what it's doing and how we're supposed to properly build a _static version in React_.
- There's a lot more to project setup, but learning that now will not help us understand how to _think in React_ and that's our goal for this lecture.


### JSX in Depth (What is JSX really?) (30 min)

- Let's examine this piece of code.

```javascript
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

- Things to define:
  - `ReactDOM`
    - Imported by our second script.
    - Not to be confused with `React` that we mentioned above.
    - Why does React split their libraries into `React` and `ReactDOM`?
    - What is reconciliation? (if this gets mentioned)
  - `ReactDOM.render()`
    - What does it mean to `render`?
    - In a browser?
  - `document.getElementById('root')`
    - This is the entry point of your app.
    - This will work if you use another way to get an element. For example:
      - `document.body.getElementsByTagName("div")[0]`
    - **Note:** This will replace everything inside that target component. So if someone disables JavaScript, you could put a message like "Sorry, need to enable JavaScript" in there.
    - **Note:** We won't use jQuery because it'd be overkill to use it just to find the node we want to use as our app's entry point.
    - _Show them both of the above._
  - `<h1>Hello, world!</h1>` => JSX
    - Last.
    -
- So what does JSX transpile to?
  - [We can use the Babel website to find out!][13]

```javascript
'use strict';

ReactDOM.render(React.createElement(
  'h1',
  null,
  'Hello, world!'
), document.getElementById('root'));
```

- Now we've got more questions. What are:
  - `React.createElement`
  - The various arguments.
- Let's put a `debugger` in there to examine the code further.
  - You can resume in the **Sources** tab.

```javascript
'use strict';

debugger
ReactDOM.render(React.createElement(
  'h1',
  null,
  'Hello, world!'
), document.getElementById('root'));
```

- What does that get us?
  - An object!

```javascript
// Looks something like this:
{
  $$typeof: Symbol(react.element),
  type: "h1",
  key: null,
  ref: null,
  props: {
    children: "Hello, world!"
  }
}
```

- This is your React **element**.
  - It describes what you see. It's an (lightweight) object representation of a DOM node.
- What are some parts of it?
  - Ignore everything for now except `type`, `props`, and `children`.
  - Note where children comes from (text node).
- Why do we want this instead of say, `document.createElement('h1')`?
  - It's lightweight.
  - You can create and destroy them with little overhead compared to doing the same with DOM nodes.
  - React is able to diff these objects very quickly.
  - All of this and more figures into something you may have heard called the _Virtual DOM_.
- The **Virtual DOM** is, a plain JS object that builds up a picture of what the real DOM should look like.
  - React is able to quickly figure out when this representation changes, what changed, and how to efficiently update the DOM.
  - Remember, DOM changes require a rerender and that is expensive.
- Knowing that this is just an object, we can create our own `React.createElement`:

```javascript
const myCreateElement = (type, props = {}, children) => {
  return {
    // To get the result Symbol(react.element), we need Symbol.for():
    $$typeof: Symbol.for('react.element'), // <= You will never need to understand this unless you want to hack on React internals.
    type: type,
    key: null, // <= We can ignore this for now.
    ref: null, // <= We can ignore this for a long time.
    props: { children: children }
  };
};
```

- And this will work to build out our component hierarchy!
  - Use an array of `children` here.
  - It's very important to note that React expects all components to technically have only ever have 1 child.
  - Even with `Fragments`, this is true (look at the docs).

```javascript
ReactDOM.render(
  myCreateElement('div', {}, [
    myCreateElement('h1', {}, 'Hello World!'),
    myCreateElement('p', {}, 'React is fun!')
  ]),
  document.getElementById('root')
);
```

- How can we refactor this into something nicer looking?
  - What is that parent _component_?
  - What are the _properties (props)_ that it should be receiving?

```javascript
// Let's say that this is all part of our header, so we name it Header.
const Header = props => {
  return myCreateElement('div', {}, [
    myCreateElement('h1', {}, props.title),
    myCreateElement('p', {}, props.text)
  ]);
};

// Now to use this _function_, we can do this and pass in our **props**:
ReactDOM.render(
  Header({ title: 'Title', text: 'some text' }),
  document.getElementById('root')
);
```

- You will eventually recognize these types of functions to be [**functional components**][17] because they are components that are literally just functions.
  - You may also hear _stateless_ tossed around, but that won't make any sense until this afternoon's lecture.
- Lastly, what is we want some _attributes_ on our JSX / components? Like classes or href?

```javascript
const Article = props => {
  // show how we'll see this in the HTML
  // virtual dom = picture of what html should look like
  return myCreateElement('div', { className: 'header' }, [
    myCreateElement('h1', { className: 'header' }, props.title),
    myCreateElement('p', { className: 'body' }, props.text)
  ]);
};
```

- But wait! We didn't get the classes! Why not?
  - We need to merge props in.
  - We weren't doing anything with it before as we had no attributes / props on our elements.

```javascript
const myCreateElement = (type, props = {}, children) => {
  return {
    $$typeof: Symbol.for('react.element'),
    type: type,
    props: { ...props, children: children },
    ref: null
  };
};
```

- **Summary:** Why was all of this important?
  - To see React’s **one-way data flow** (aka: _one-way binding_).
  - We see that **props go down** (we will also eventually see that _state_ is what goes up).


### JSX is Syntactic Sugar (10 min)

- [Expressions][16] - An expression is any valid unit of code that resolves to a value.
  - `if` statements are NOT expressions.
  - We can look to the React docs for examples of everything.

[**Intro to JSX**][11] - All of the examples.

```javascript
// Simple JSX
const element = <h1>Hello, world!</h1>;

// Using expressions in JSX
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

// Functions are expressions
function yell(word) {
  return word.toUpperCase(word);
}
const element = <h1>{yell("wait!")}</h1>;

// JSX is an expression too since it's just a function with a return value so you can use it in returns from ifs and fors.
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

// JSX attributes (camelCase) use quotes
const element = <div tabIndex="0"></div>;

// Or they use expressions in {}
const element = <img src={user.avatarUrl}></img>;

// Empty tag means no children
const element = <img src={user.avatarUrl} />;

// Everything between the tags are the children
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

// JSX auto-escapes
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

[**JSX in Depth**][18] - Pulling out the essential examples.

```javascript
// Lower case is assumed to be an HTML element:
const element = <h1>Hello World!</h1>;
// Equivalent to (note how it's a string):
const element = React.createElement(
  'h1',
  null,
  'Hello World!'
)

// User-Defined Components Must Be Capitalized:
let Title = (props) => {
  return <h1>{props.children}</h1>;
}
const element = <Title>Hello World!</Title>;
// Equivalent to:
const element = React.createElement(
  Title,
  null,
  'Hello World!'
)

// String literals can be used directly:
<MyComponent message="hello world" />
// Equal to:
<MyComponent message={'hello world'} />

// String values are HTML-unescaped:
<MyComponent message="&lt;3" />
// Equal to:
<MyComponent message={'<3'} />

// Props without a value default to true:
<MyTextBox autocomplete />
// Equal to:
<MyTextBox autocomplete={true} />

// Whitespace is ignored similar to HTML as these are all equal:
<div>Hello World</div>

<div>
  Hello World
</div>

<div>
  Hello
  World
</div>

<div>

  Hello World
</div>

// JSX can have children:
<MyContainer>
  <MyFirstComponent />
  <MySecondComponent />
</MyContainer>
// Where you can mix it with text as well:
<div>
  Here is a list:
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
// Components can return arrays:
render() {
  // No need to wrap list items in an extra element!
  return [
    // Don't forget the keys :)
    <li key="A">First item</li>,
    <li key="B">Second item</li>,
    <li key="C">Third item</li>,
  ];
}

// JSX children can be expressions if you use {} syntax:
function Item(props) {
  return <li>{props.message}</li>;
}
function TodoList() {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message} />)}
    </ul>
  );
}

// These all render nothing inside the <div>:
<div />
<div></div>
<div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
<div>{true}</div>
```


[1]: https://learn-co-curriculum.github.io/js-task-lister-project/
[2]:  https://stackoverflow.com/questions/34114350/react-vs-reactdom
[3]: https://stackoverflow.com/questions/43931538/how-to-load-es6-react-babel-code-in-html-with-cdn
[4]: https://reactjs.org/docs/thinking-in-react.html
[5]: https://reactjs.org/docs/composition-vs-inheritance.html
[6]: https://en.wikipedia.org/wiki/Single_responsibility_principle
[7]: https://reactjs.org/docs/components-and-props.html
[8]: https://reactjs.org/docs/cdn-links.html
[9]: https://reactjs.org/docs/hello-world.html
[10]: https://stackoverflow.com/questions/39461805/what-does-jsx-stand-for
[11]: https://reactjs.org/docs/introducing-jsx.html
[12]: https://babeljs.io/
[13]: https://babeljs.io/repl/
[14]: https://github.com/babel/babel/tree/master/packages/babel-standalone
[15]: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
[16]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions
[17]: https://reactjs.org/docs/components-and-props.html
[18]: https://reactjs.org/docs/jsx-in-depth.html
