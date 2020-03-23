const classnames = require('classnames');

export default function Icon({ id, className }) {
  const customClasses = classnames('icon', className);
  return (
    <svg className={customClasses} role="img">
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}
