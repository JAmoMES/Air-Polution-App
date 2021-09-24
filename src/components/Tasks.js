import Task from './Task'
import Footer from './Footer'
//{auto: true, fan: 0, pm1: 27, pm10: 48, pm25: 40}


const Tasks = ({ data }) => {
  return (
    <>
      <h2>Mode : {data.auto? 'auto' : 'manual'}</h2>
      <div className='james'>
        <Task task={'PM 1'} info={data.pm1}/>
        <Task task={'PM 2.5'} info={data.pm25}/>
        <Task task={'PM 10'} info={data.pm10}/>
      </div>
    </>
  )
}

export default Tasks
