# Best Practice in React

## Part One: Design philosophy of React

Three basic rules in React:

- Data drives UI

UI = f(data). Data includes `props` and `state`.

- Everything is Component in React

  - UI is `component.`
  - Build complicated function by nesting and composing components
  - Implement side effects by component

Netherless UI equals to `component`, but a component in React can also implement some side effect as well.

```javascript
class Beacon extends React.Component {
  render () {
    return null
  }

  componentDidMount() {
    const bean = new Image();
    beacon.src = 'https://domain.name/beacon.gif';
  }
}
```

- `props` is the basic way of component communication

We pass `props` from Parent Component to Child Component to share data among Child component and Parent component. For data shared globally, we use *Redux*.

**Summary**:

![React Design philosophy](./imgs/01.React-Design-Philosophy.png).

## Part Two: Best Practices in building React Component

### (1) How to build a React Component with clear APIs

**High cohesion, low coupling** is a principle for designing software systems, so is component design in React. In detail, for developing a React component, the laws are:

- Keep `props` small (Keep API small)
- Make full usage of composition and divide component by data boundaries
- Extract state to upper components and implement lower component as a pure function.

### (2) Implement a component

The perfect code should be lean, can work, and high performance.

Some tips for writing React components.

- **DON'T USE inline function in JSX**

```javascript
class ControlButtons extends React. Component {
  render() {
    <div className="ControlButtons">
      <button className="btn btn-reset" onClick={() => {/* TO DO SOMETHING */}}>Lap</button>
      <button className="btn btn-start" onClick={() => {/* TO DO SOMETHING */}}>Start</button>
    </div>
  }
}
```

There are three reasons for *DON'T USE inline function in JSX*:

- Every time a render function called, a new function created, which wastes performance;
- Can't avoid duplicated render via `shouldComponentUpdate`;

- Bind `this` to instance automatically by Array Function

```javascript
class ControlButtons extends React.Component {
  render() {
    <div className="ControlButtons">
      <button className="btn btn-reset" onClick={this.onLap}>Lap</button>
      <button className="btn btn-start" onClick={this.onStart}>Start</button>
    </div>
  }
  
  onLap = () => {
    // do something
  }
  onStart = () => {
    // do something
  }
}
```

### (3): style in React

- Bind style property to dom element in JSX
- Import style file in React definition file
- Add styled-jsx support

Don't Repeat yourself: **DRY**.

## Readings

1. Some principles for software design: [https://coolshell.cn/articles/4535.html](https://coolshell.cn/articles/4535.html)
2. React In Practice: [https://juejin.im/book/5ba42844f265da0a8a6aa5e9](https://juejin.im/book/5ba42844f265da0a8a6aa5e9)
