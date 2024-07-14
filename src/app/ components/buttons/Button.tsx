import { ButtonProps } from "@/app/types/homepage";

export const ToedurButton = ({ children, className, style, type, ...props }: ButtonProps) => (
    <button style={style} className={className} type={type} {...props}>
      {children}
    </button>
  );