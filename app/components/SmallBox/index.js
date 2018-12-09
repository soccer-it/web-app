import PropTypes from 'prop-types'
import Icon from 'components/Icon'
import { truncateString } from 'utils/helpers'

import './SmallBox.styl' 

const SmallBox = ({ layout='row', imageName='', imageType='', title='', description=''}) => (
  <div className={`small-box ${layout}`}>
    <div className={`wrapper-image -${layout}-config`}>
      {imageType === 'svg' ||
      imageType === 'icon' 
      ? <Icon iconId={imageName} />
      : <img 
          className={`${imageName}`}
          src={`/images/${imageName}.${imageType}`} 
          alt={imageName} 
          title={imageName} 
        />
      }
    </div>
    
    <div className={`texts ${layout}-text-config`}>
      <h2 className='title'>{truncateString(title, 18)}</h2>
      <p className='description'>{truncateString(description, 85)}</p>
    </div>

    {layout === 'column' && <img className='graphic' src='/images/graphic.png' alt='' title='' />}
  </div>
)

SmallBox.propTypes = {
  layout: PropTypes.string,
  imageName: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default SmallBox