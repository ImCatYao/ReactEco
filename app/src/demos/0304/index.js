import React from "react"
import Logo from "./Logo"
import { Router, Link, navigate } from "@reach/router"

const assignments = [
  { id: "abc", name: "Mid-Term Paper" },
  { id: "123", name: "Chapter 4 Quiz" }
]


const App = ({ children }) => (
  <div className="section is-small">
    <Logo />
    <nav className="navbar">
      <Link to="assignments">Assignments</Link>
    </nav>
    {children}
  </div>
)

const Assignments = props => (
  <div>
    <h2 className="title">Assignment List</h2>
    <ul role="navigation">
      {assignments.map(assignment => (
        <li key={assignment.id}>
          {/*
             ... allow for relative links in the
             route components. We can link to just
             the `id`, because the href is relative,
             the full href will be "/assignments/${id}"
          */}
          <Link to={assignment.id}>{assignment.name}</Link>
        </li>
      ))}
    </ul>
    {props.children}
  </div>
)

const Assignment = props => {
  const assignment = assignments.find(
    a => a.id === props.assignmentId
  )
  return (
    <div className="box">
      <h3 className="subtitle">{assignment.name}</h3>
    </div>
  )
}

class Root extends React.Component {

  componentDidMount() {
    navigate('/assignments')
  }

  render () {
    return (
      <Router>
        <App path="/">
          <Assignments path="assignments">
            {/* relative paths in the route config ... */}
            <Assignment path=":assignmentId" />
          </Assignments>
        </App>
      </Router>
    )
  }
}

export default Root
