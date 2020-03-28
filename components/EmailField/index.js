import useEmailValidation from './useEmailValidation';

export default function EmailField({
  fieldName = 'email',
  onType,
  label = 'E-mail',
  isRequired,
  className,
  inputProps
}) {
  const { handleEmailChange, emailError } = useEmailValidation({
    onType,
    inputProps,
    isRequired
  });

  return (
    <div className={className}>
      <label htmlFor={fieldName}>{label}</label>
      <input
        id={`id_${fieldName}`}
        name={fieldName}
        autoComplete="off"
        type="email"
        maxLength={320}
        onChange={handleEmailChange}
        onBlur={handleEmailChange}
        type="email"
      />
      {emailError && <div className="errorWrapper">Insira um e-mail válido</div>}
    </div>
  );
}
