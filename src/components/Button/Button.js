import "./Button.css";

export default function Button({
    children = "Button",
    type = "button",
    className,
    kind,
    onClick = () => {},
}) {
    return (
        <button
            type={type}
            className={`button${kind ? `--${kind}` : ""}${className ? ` ${className}` : ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
