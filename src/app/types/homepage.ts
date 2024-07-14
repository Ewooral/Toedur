export type HomePageProps = {
    id: string
    ref?: any
  }
  

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "button" | "text" | "reset" | undefined; 
  style?: {};
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ImageCardProps = {
  image: string
  name: string
  nationality: string
  alt?: string 
  width?: number
  height?: number 
}

