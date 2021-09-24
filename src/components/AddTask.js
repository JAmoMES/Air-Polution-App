import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [minute, setText] = useState('')
  const [second, setDay] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (minute &&second) {
      console.log(minute)
      onAdd({ minute, second})
      setText('')
      setDay('')
      return
    }
    alert('Please set times')
    setText('')
    setDay('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='left'>
        <h2>Set Fan Time</h2>
        <div className='form-control'>
          <label>minutes</label>
          <input
            type='number'
            placeholder='set minutes'
            value={minute}
            onChange={(e) => setText(e.target.value)}
            min={0}
            defaultValue={0}
          />
        </div>
        <div className='form-control'>
          <label>seconds</label>
          <input
            type='number'
            placeholder='set seconds'
            value={second}
            onChange={(e) => setDay(e.target.value)}
            min={0}
            defaultValue={0}
          />
        </div>
      </div>
      <input type='submit' value="Turn on fan"className='btn btn-block' />
    </form>
  )
}

export default AddTask
