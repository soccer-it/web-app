export default function Icon({ id }) {
  return (
    <span className="icon">
      <svg role="img">
        <use xlinkHref={`#${id}`} />
      </svg>
    </span>
  );
}
