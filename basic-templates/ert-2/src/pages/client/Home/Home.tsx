import React, { useState } from 'react'

const Home: React.FC = (): JSX.Element => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  return (
    <>
      <br />
      <br />
      <div className="container">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Number 1"
          value={num1}
          onChange={(e: any) => {
            setNum1(e.target.value)
          }}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Enter Number 2"
          value={num2}
          onChange={(e: any) => {
            setNum2(e.target.value)
          }}
        />
        <br />
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault()
            setResult(+num1 + +num2)
          }}
        >
          Add
        </button>
        <br />
        <br />
        <div className="well">
          <h1>Result: {result}</h1>
        </div>
      </div>
    </>
  )
}

export default Home
