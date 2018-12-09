import PropTypes from 'prop-types'
import Html from 'components/Html'

import './BoxContent.styl'

const BoxContent = ({ background, content, className='' }) => (
  <div className='box-content' style={{ background: background }}>
    <div className={`wrapper-box-content ${className}`}>
      <Html>
        {content}
      </Html>
    </div>
  </div>
)

BoxContent.propTypes = {
  background: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string
}

export default BoxContent