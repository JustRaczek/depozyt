import React from 'react'

const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
    <Part name={parts[0].name} exercises={parts[0].exercises} />
    <Part name={parts[1].name} exercises={parts[1].exercises} />
    <Part name={parts[2].name} exercises={parts[2].exercises} />
  </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p>Number of exercises {total}</p>
}
const Zadanie = () =>
  {
    return (
    <>
    <h2>Zadanie od nauczyciela</h2>
    <p>Dawid Raczkowski</p>
    </>  
    )
  }
const App = () => {
  const course = 'Half Stack application development'
  const nowy = 'Zadanie nauczyciela'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Zadanie/>
    </div >
  )
}

export default App
