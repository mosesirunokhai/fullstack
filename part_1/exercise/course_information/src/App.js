import React from 'react'

//=============================================================================
// Create the header component.
const Header = (props) => {
    return (
        <div><p> {props.courses} </p></div>
    )
}

//=============================================================================
// Create the Part component.
const Part = (props) => {
    return (
        <div><p>
            {props.part} {props.exercises}
        </p></div>
    )
}

//=============================================================================
// Create the content component.
const Content = (props) => {
    const part1 = 'Fundamental of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    return (
        <div>
            <Part part={part1} exercises={exercises1} />
            <Part part={part2} exercises={exercises2} />
            <Part part={part3} exercises={exercises3} />
        </div>
    )
}

//=============================================================================
// Create Total.
const Total = (props) => {
    return (
        <div><p>
            Number of exercises {props.sum} 
        </p></div>
    )
}
//=============================================================================
//The main App.
const App = () => {
    const course = 'Half stack application development'
    const exercises1 = 10
    const exercises2 = 7
    const exercises3 = 14

    return (
        <div>
            <Header courses={course} />
            <Content />
            <Total sum={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

export default App;
