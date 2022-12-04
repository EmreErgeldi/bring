interface TitleProps {
  children: string;
}
export default function Title({ children }: TitleProps) {
  return <h3 className="text-sm font-semibold mb-3 px-6 md:px-0">{children}</h3>;
}
