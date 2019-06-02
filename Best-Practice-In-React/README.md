# Best Practice in React

## Design philosophy of React

Three basic rules in React:

- Data drives UI

UI = f(data). Data includes `props` and `state`.

- Everything is Component in React

  - UI is `component`
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

## Practice in building React Component

### How to build a React Component with clear APIs

**High cohesion, low coupling** is a principle for design a software system, so is component design in React. In detail, for designing a React component, the principles are:

- Keep `props` small(Keep API small)
- Make full usage of composition and Divide component by data boundaries
- Extract state to upper components, implement lower component as a pure function.

