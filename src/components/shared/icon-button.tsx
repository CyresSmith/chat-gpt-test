import clsx from 'clsx';
import { ReactNode } from 'react';
import { ButtonProps } from './button';

interface Props extends Omit<ButtonProps, 'children'> {
    icon: ReactNode;
}

const IconButton = ({ onClick, disabled, icon }: Props) => {
    return (
        <button
            className={clsx(
                'py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded',
                {
                    ['hover:bg-gray-800 active:bg-gray-950']: !disabled,
                    ['text-zinc-100 opacity-50']: disabled,
                }
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {icon}
        </button>
    );
};

export default IconButton;
