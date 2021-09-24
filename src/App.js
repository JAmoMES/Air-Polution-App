import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import useInterval from 'react-useinterval';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [run, setrun] = useState(false)
  const [tasks, setTasks] = useState({})
  const [count, setcount] = useState(0)

  useInterval(() =>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, 1000)

  useInterval(() =>{
    console.log("useInterval", showAddTask ,count)
    setcount(count-1);
    if (count === 0 ){
      setrun(false)
      stop()
      setcount(0)
    }
  },run? 1000:null)

  // Fetch Tasks
  const fetchTasks = async () => {
    try {
      const res = await (fetch(process.env.REACT_APP_API_DOMAIN+'readdata'))
      const data = await res.json()
      // setData(data.result)
      return data.result
    } catch(e) {
        console.log('fail')
        return {pm25:51,pm10:50,pm1:30,auto:true,fan:0}
    }
  }

  const stop = async () => {
    const res = await fetch(process.env.REACT_APP_API_DOMAIN+'stopfan')
    const data = await res.json()
    // setData(data.result)
    return data
  }

  // Add Task
  const addTask = async (task) => {
    try{
    const res = await fetch(process.env.REACT_APP_API_DOMAIN+'setfan', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })}
    catch{ }

    // const data = await res.json()
    // console.log(task.minute)
    // console.log(task.minute,task.second,task.minute*60,task.minute*60+task.second)
    setcount(Number(task.minute*60)+Number(task.second))
    // console.log(count)
    setrun(true)
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              <Tasks data={tasks} time={count}/>
            </>
          )}
        />
        <div className='ice'>
          <div className='new'>
            {
              
              <p>Status : {tasks.pm25<50?'Good air quality':'Bad air quality'}</p> 
            }
            {tasks.pm25>=50||count?
                <p>Purifying...</p>:<p>Now resting</p>
              }
          </div>
            {count? <Footer time={count}/> :<></>}
        </div>
        {
                showAddTask? 
                <AddTask onAdd={addTask} />: <></>
              }
          <p className='yo'>mayoyes &copy;</p>
      </div>
    </Router>
  )
}

export default App
