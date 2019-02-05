import React, { Component } from 'react';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex:  0
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const activeIndex = nextProps.activeTabIndex
    return activeIndex
  }

  handleTabBtnClick = (index) => {
    this.setState({
      activeIndex: index
    })
    this.props.handleClick(index)
  }

  render() {
    const newChildren = React.Children.map(this.props.children, (child, index) => {
      if (child.type) {
        return React.cloneElement(child, {
          active: this.state.activeIndex === index,
          onClick: () => this.handleTabBtnClick(index)
        });
      } else {
        return child;
      }
    })

    const { cssClass = '' } = this.props
    const className =  'tabs ' + cssClass

    return (
      <div className={className}>
        <ul>
          {newChildren}
        </ul>
      </div>
    );
  }
}