// Inside button.js
export default function Button({ type, children, className, onClick }) {
    return <button type={type} className={className} onClick={onClick}>{children}</button>;
}
