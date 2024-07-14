import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { RiErrorWarningLine } from "react-icons/ri";

interface TextareaComponentProps {
  register: Function;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  error?: string;
  textareaId: string;
  label?: string;
  formState?: {
    touchedFields: Record<string, boolean>;
    dirtyFields: Record<string, boolean>;
  };
  watch: Function;
  onChange?: (value: string) => void;
  maxLength?: number;
  bgColorWhenDisabled?: string;
  // Add any other props you might need, similar to the `...rest` in the input component
}

const ToedurTextareaComponent: React.FC<TextareaComponentProps> = ({
  register,
  name,

  placeholder,
  disabled = false,
  icon,
  error,
  textareaId,
  label,
  watch,
  formState,
  onChange,
  maxLength = 400,
  bgColorWhenDisabled,

  ...rest
}) => {
  const [text, setText] = useState("");
  const isTouched = formState?.touchedFields[name];
  const isDirty = formState?.dirtyFields[name];
  const watchValue: string = watch(name);
  const isEmpty = watchValue?.length === 0;

  useEffect(() => {
    setText(watchValue);
  }, [watchValue]);

  // const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const newValue = event.target.value.slice(0, maxLength);
  //   setText(newValue);
  //   if (onChange) {
  //     onChange(newValue);
  //   }
  // };

  return (
    <section className="flex flex-col gap-2 my-2">
      <label htmlFor={textareaId}>{label}</label>{" "}
      <div
       style={{ backgroundColor: disabled ? bgColorWhenDisabled : "transparent" }}
        className={clsx(
          "flex items-center border-2 border-[gray] rounded-3xl p-5",
          error && "border-red-300 text-area-state",
          isTouched && isDirty && !error && !isEmpty && "border-green-300",
          isTouched && isDirty && isEmpty && "border-red-300"
        )}
      >
        <textarea
          {...register(name, { required: true })} // Custom validation rules
          id={textareaId}
          maxLength={maxLength}
          // onChange={handleTextChange}
          className={clsx(
            "p-1 outline-none bg-transparent text-white w-full input-focused h-[10rem]",
            disabled && "bg-[#d6d6d6]",
            error && "input-error-state"
          )}
          placeholder={placeholder}
          disabled={disabled}
          {...rest} // Pass the rest of the props to the textarea
        />
        {icon && <div className="input-icon">{icon}</div>}{" "}
        {/* Conditional Rendering for Icon */}
      </div>
      <div className="text-right text-xs">
        {text?.length}/{maxLength}
      </div>
      {error && (
        <div className="flex gap-2 justify-start items-center">
          <RiErrorWarningLine className="text-red-300 size-4" />
          <span className="text-red-300 ">{error}</span>
        </div>
      )}{" "}
      {/* Improved Error Handling */}
    </section>
  );
};

export default ToedurTextareaComponent;
