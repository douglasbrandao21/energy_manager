import { FiMail } from 'react-icons/fi'
import { RiLockFill } from 'react-icons/ri'

function Icons({ icon, ...rest }) {
  const icons = {
    mail: <FiMail {...rest} />,
    lock: <RiLockFill {...rest} />
  }

  return icons[icon];
}

export default Icons;