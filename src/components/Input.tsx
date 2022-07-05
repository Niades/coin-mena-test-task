interface InputProps {
  id?: string;
  placeholder: string;
  password?: boolean;
  text: string;
  onChange: (value: string) => void;
}

function Input({
  id,
  placeholder,
  password = false,
  text,
  onChange,
}: InputProps) {
  return (
    <input
      id={id}
      className="block mt-2 p-3 w-full "
      placeholder={placeholder}
      type={password ? "password" : "input"}
      value={text}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export { Input };
