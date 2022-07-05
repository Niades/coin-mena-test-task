import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Input } from "../components/Input";

interface AuthDialogProps {
  isOpen?: boolean;
  errorMessage?: string;
  onCloseRequest: () => void;
  onLoginRequest: (email: string, password: string) => void;
}

function validateFormValues(values: string[]) {
  return values.some((str) => str === "");
}

function AuthDialog({
  isOpen = false,
  onCloseRequest,
  onLoginRequest,
  errorMessage,
}: AuthDialogProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const valuesIncorrect = validateFormValues([email, password]);
  useEffect(() => {
    const field = document.querySelector(
      "auth-email-field"
    ) as HTMLInputElement;
    if (field !== null) {
      field.focus();
    }
  }, [isOpen]);
  useEffect(() => {}, []);
  return (
    <Dialog
      as="div"
      className="relative z-10"
      onClose={() => onCloseRequest()}
      open={isOpen}
    >
      <div className="fixed inset-0 bg-black bg-opacity-25" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Login
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Enter your email and password to start trading.
              </p>
            </div>
            <div>
              <form>
                <Input
                  id="auth-email-field"
                  placeholder="Email"
                  text={email}
                  onChange={(value: string) => setEmail(value)}
                />
                <Input
                  placeholder="Password"
                  password={true}
                  text={password}
                  onChange={(value: string) => setPassword(value)}
                />
                {!valuesIncorrect && (
                  <div className="invisible m-4">Error text placeholder</div>
                )}
                {valuesIncorrect && (
                  <div className="visible m-4">Fields should not be empty</div>
                )}
                {errorMessage !== "Error message placeholder" && (
                  <div className="visible m-4">{errorMessage}</div>
                )}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!valuesIncorrect) {
                      onLoginRequest(email, password);
                    }
                  }}
                  className="bg-slate-200 p-4 w-full rounded font-semibold"
                >
                  Log In
                </button>
              </form>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

const dialog = AuthDialog;
export { dialog as AuthDialog };
