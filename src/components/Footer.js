
const Footer = ({time}) => {
  return (
    <footer>
      <h4>Cool down...</h4>
      <p className='time'>{Math.floor(time/60).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
            })} : {(time%60).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false})}</p>
    </footer>
  )
}

export default Footer
