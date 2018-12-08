import PropTypes from 'prop-types'
import Icon from 'components/Icon'

const Logo = ({ logo='', type='', alt='', title='', className='' }) => (
  type.toLowerCase() === 'icon' ||
  type.toLowerCase() === 'svg'
  
  ? <Icon iconId={logo} />
  : <img 
      className={`logo ${className}`} 
      src={`/images/${logo}.${type}`} 
      alt={alt} 
      title={title} 
    />
)

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
}

export default Logo