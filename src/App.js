import React, { useState } from 'react'
import * as math from 'mathjs'
import ReactFCCtest from 'react-fcctest'
import { ETIME } from 'constants'

const App = () => {
  const [currentNum, setCurrentNum] = useState('')
  const [formula, setFormula] = useState('0')
  const handleNumbers = e => {
    if (formula === '0' && e.target.value === '0') {
      return null
    } else if ((formula === '0') & (parseInt(e.target.value) > 0)) {
      setCurrentNum(e.target.value)
      setFormula(e.target.value)
    } else {
      setCurrentNum(currentNum + e.target.value)
      setFormula(formula + e.target.value)
    }
  }
  const handleOperators = e => {
    setCurrentNum('')
    const operator = e.target.value
    let holderFormula = formula
    let lastValue = holderFormula[holderFormula.length - 1]
    if (
      lastValue === '/' ||
      lastValue === '+' ||
      lastValue === '-' ||
      lastValue === '*' ||
      lastValue === '.'
    ) {
      const newFormula =
        holderFormula.substr(0, holderFormula.length - 1) + e.target.value
      setFormula(newFormula)
    } else {
      holderFormula = holderFormula + operator
      setFormula(holderFormula)
    }
  }
  const handleClear = () => {
    setCurrentNum('')
    setFormula('0')
  }
  const handleCalc = () => {
    const total = math.eval(formula)
    setCurrentNum(total)
    setFormula(total)
  }
  const handleDecimal = e => {
    const test = /\./.test(currentNum)
    if (test) {
      return null
    } else {
      setCurrentNum(formula + e.target.value)
      setFormula(formula + e.target.value)
    }
  }
  // console.log(formula)
  console.log('currentNum:' + currentNum)
  return (
    <div className="container">
      <header>
        <h1>JS Calculator</h1>
      </header>
      <main>
        <section className="display" id="display">
          {formula}
        </section>
        <section className="button-wrapper">
          <button
            className="clear-button"
            id="clear"
            value="clear"
            onClick={handleClear}
          >
            Clear
          </button>
          <div />
          <button id="divide" value={'/'} onClick={handleOperators}>
            /
          </button>
          <button id="seven" value="7" onClick={handleNumbers}>
            7
          </button>
          <button id="eight" value="8" onClick={handleNumbers}>
            8
          </button>
          <button id="nine" value="9" onClick={handleNumbers}>
            9
          </button>
          <button id="multiply" value="*" onClick={handleOperators}>
            *
          </button>
          <button id="four" value="4" onClick={handleNumbers}>
            4
          </button>
          <button id="five" value="5" onClick={handleNumbers}>
            5
          </button>
          <button id="six" value="6" onClick={handleNumbers}>
            6
          </button>
          <button id="subtract" value="-" onClick={handleOperators}>
            -
          </button>
          <button id="one" value="1" onClick={handleNumbers}>
            1
          </button>
          <button id="two" value="2" onClick={handleNumbers}>
            2
          </button>
          <button id="three" value="3" onClick={handleNumbers}>
            3
          </button>
          <button id="add" value="+" onClick={handleOperators}>
            +
          </button>
          <button
            id="zero"
            className="double-button"
            value="0"
            onClick={handleNumbers}
          >
            0
          </button>
          <button id="decimal" value="." onClick={handleDecimal}>
            .
          </button>
          <button id="equals" onClick={handleCalc}>
            =
          </button>
        </section>
      </main>
      <ReactFCCtest />
    </div>
  )
}

export default App
