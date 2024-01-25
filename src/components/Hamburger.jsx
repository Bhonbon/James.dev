import { FaTimes, FaHamburger } from 'react-icons/fa'

const Hamburger = ({onClick, onShow}) => {
  return (
    <div className='hamburger' onClick={onClick}>
       {!onShow ? <FaHamburger/> : <FaTimes/> }
    </div>
  )
}

export default Hamburger