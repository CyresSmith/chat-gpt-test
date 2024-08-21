import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    loading?: boolean;
    children?: ReactNode;
    className?: string;
}

const Button = ({ children, onClick, disabled, loading, className = '' }: ButtonProps) => {
    return (
        <button
            className={clsx(
                'py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded',
                {
                    ['hover:bg-gray-800 active:bg-gray-950']: !disabled,
                    ['text-zinc-100 opacity-50']: disabled,
                    [className]: className,
                }
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {loading ? <span>Loading...</span> : <>{children ? children : 'Button'}</>}
        </button>
    );
};

export default Button;
