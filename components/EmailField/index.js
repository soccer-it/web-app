import useEmailValidation from './useEmailValidation';

export default function EmailField({
  fieldName = 'email',
  label = 'E-mail',
  className,
  placeholder = '',
  onFieldChange,
  inputProps
}) {
  const { handleEmailChange, emailError } = useEmailValidation({
    onFieldChange
  });

  return (
    <div className={className}>
      <label htmlFor={fieldName}>{label}</label>
      <input
        id={`id_${fieldName}`}
        name={fieldName}
        autoComplete="off"
        type="email"
        placeholder={placeholder}
        maxLength={320}
        onChange={handleEmailChange}
        onBlur={handleEmailChange}
        type="email"
        {...inputProps}
      />
      {emailError && <div className="errorWrapper">Insira um e-mail válido</div>}
    </div>
  );
}
