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

export default Logo