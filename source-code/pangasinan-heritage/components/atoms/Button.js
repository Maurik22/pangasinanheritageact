export default function Button({ children, onClick, type = "button", ariaLabel }) {
  return (
    <button className="button" type={type} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
