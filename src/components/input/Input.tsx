import clsx from 'clsx';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

export type InputProps = {
  label: string;
  id: string;
  message?: string;
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  helperText?: string;
  placeholder?: string;
  validation?: RegisterOptions;
  readOnly?: boolean;
  checkId?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  id,
  label,
  className,
  type = 'text',
  helperText,
  placeholder = '',
  validation,
  message,
  readOnly = false,
  checkId,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div
      className={clsx({
        'justify-end flex flex-row-reverse items-center flex-grow-0':
          type === 'checkbox',
      })}
    >
      <label
        htmlFor={type === 'checkbox' ? `${id}${checkId}` : id}
        className={clsx('block text-sm font-medium text-gray-700', {
          'ml-2 font-normal': type === 'checkbox',
        })}
      >
        {label}
      </label>

      <input
        {...register(id, validation)}
        {...rest}
        className={clsx(
          ' file:bg-primary-100 file:border-0 file:hover:bg-primary-200 file:mr-2 file:rounded-full mt-1 ',
          'block px-3 py-2 w-full placeholder-gray-400 rounded-md border border-gray-300 shadow-sm appearance-none sm:text-sm focus:border-primary-500 focus:ring-primary-500 focus:outline-none',
          {
            'cursor-not-allowed bg-primary-200/30': readOnly,
          },
          {
            'mt-0 border-gray-300 h-4 rounded text-primary-600 w-4  focus:ring-primary-500 px-0 py-0':
              type === 'checkbox',
          },

          className
        )}
        type={type}
        id={type === 'checkbox' ? `${id}${checkId}` : id}
        name={id}
        aria-describedby={id}
        placeholder={placeholder}
      />
      <div className='mb-1'>
        {helperText && <p className='text-xs text-gray-400'>{helperText}</p>}
        {errors[id] && (
          <p className={clsx('text-xs text-red-400')}>
            {errors[id]?.type === 'pattern' &&
              (message ? `${message}` : `Harap mengisi ${label} yang valid`)}
            {errors[id]?.type === 'required' && `${label} wajib diisi`}
          </p>
        )}
      </div>
    </div>
  );
}
