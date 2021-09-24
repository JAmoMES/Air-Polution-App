import { FaTimes } from 'react-icons/fa'


const Task = ({ task , info}) => {
  return (
    <div
      className={`task ${Number(info)<50 ? 'normal' : 'danger'}`}
    >
      <h3 style={{textAlign:'center',textShadow:'-moz-initial'}}>
        {task}
      </h3>
      <p className='mid'>{info}</p>
    </div>
  )
}

export default Task
