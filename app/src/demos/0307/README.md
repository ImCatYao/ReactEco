# About 0307

0307 is an example of loading Component based on *reach-router* path change.

## How it works

### Set reach router map

```javascript
import { asyncComponent } from './asyncComponent'

const AsyncDashboard = asyncComponent(() => {
  return import('./Dashboard')
})

const AsyncLogin = asyncComponent(() => {
  return import('./Login')
})

const AsyncHome = asyncComponent(() => {
  return import('./Home')
})

export default class ReachRouterAuthDemo extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AsyncHome path="/" />
          <AsyncDashboard path="dashboard" />
          <AsyncLogin path="login" />
        </Router>
      </Provider>
    )
  }
}
```

### The philosophy behind it

As we all know, modern javascript web apps use Webpack as bundle handling tool; and Webpack 4.x supports asynchronous loading Component(js file) by **import** statement, like the following:

```javascript
const AsyncDashboard = asyncComponent(() => {
  return import('./Dashboard')
}, <div>Loading...</div>)
```

So how it works? Here is the solution.

```javascript
import React from 'react';

export const asyncComponent = (loadComponent, Loading = null) => (
  class AsyncComponent extends React.Component {
    constructor(...args){
        super(...args);
        this.state = {
            Component: null,
        };
        this.hasLoadedComponent = this.hasLoadedComponent.bind(this);
    }
    componentWillMount() {
      // When path is matched and componentWillMount called, *import* statemenent will load the Component we want

      // After Component is loaded, set the loaded Component as the state of AsyncComponent
      // After state changed, render function gets called and will render the loaded Component.
      if(this.hasLoadedComponent()){
          return;
      }

      loadComponent()
        .then(module => module.default ? module.default : module)
        .then(Component => {
            this.setState({
                Component
            })
        })
        .catch(error => {
          console.error('cannot load Component in <AsyncComponent>');
          throw error;
        })
    }
    hasLoadedComponent() {
        return this.state.Component !== null;
    }
    render(){
        const {
            Component
        } = this.state;

        return (Component) ? <Component {...this.props} /> : Loading;
    }
  }
)

```