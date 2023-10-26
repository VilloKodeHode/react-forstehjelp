import "./typography.css";

export const Responsiveparagraph = ({children, className }) => {
  return <p className={`responsive ${className} `}>{children}</p>;
};
