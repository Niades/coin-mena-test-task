interface InputProps {
  placeholder: string;
  password?: boolean;
}

function Input({ placeholder, password = false }: InputProps) {
  return (
    <input
      className="block mt-2 p-3 w-full "
      placeholder={placeholder}
      type={password ? "password" : "input"}
    />
  );
}

export { Input };
