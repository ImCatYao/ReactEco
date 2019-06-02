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
