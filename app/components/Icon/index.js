const Icon = ({ iconId, ...props }) => (
  <svg className={`icon ${iconId}`} {...props}>
    <use xlinkHref={`#${iconId}`} />
  </svg>
)

export default Icon