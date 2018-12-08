import PropTypes from 'prop-types'

const Icon = ({ iconId, ...props }) => (
  <svg className={`icon ${iconId}`} {...props}>
    <use xlinkHref={`#${iconId}`} />
  </svg>
)

Icon.propTypes = {
  iconId: PropTypes.string.isRequired
}

export default Icon