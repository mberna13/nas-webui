import { cn } from '../../lib/utils'

export default function Button({ type = "button", children, className, onClick }) {
    return (
        <button
            type={type}
            className={cn(
                "px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-300 transition-colors font-ibm-plex-mono",
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}