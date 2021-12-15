import clsx from 'clsx';
import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

enum ButtonVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
}

type ButtonProps = {
  isLoading?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  children,
  className,
  disabled: buttonDisabled,
  isLoading,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  const disabled = isLoading || buttonDisabled;

  return (
    <button
      {...rest}
      disabled={disabled}
      type='submit'
      className={clsx(
        'flex justify-center px-4 py-2 w-full text-sm font-medium text-white bg-primary-600 rounded-md border border-transparent shadow-sm hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed',
        {
          'relative !text-transparent hover:!text-transparent !cursor-wait !transition-none':
            isLoading,
        },
        className
      )}
    >
      {isLoading && (
        <div
          className={clsx(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            {
              'text-white': variant === 'dark' || variant === 'primary',
              'text-black': variant === 'light',
              'text-primary-500': variant === 'outline' || variant === 'ghost',
            }
          )}
        >
          <ImSpinner2 className='animate-spin' />
        </div>
      )}
      {children}
    </button>
  );
}
