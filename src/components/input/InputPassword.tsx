import clsx from 'clsx';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export type InputProps = {
  label: string;
  id: string;
  placeholder?: string;
  helperText?: string;
  type?: string;
  readOnly?: boolean;
  messages?: string;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<'input'>;

export default function InputPassword({
  id,
  label,
  type,
  helperText,
  validation,
  messages,
  placeholder = '',
  ...rest
}: InputProps) {
  const [show, setShow] = React.useState<boolean>(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>

      {show ? (
        <div className='relative'>
          <input
            {...register(id, validation)}
            {...rest}
            className='block px-3 py-2 w-full placeholder-gray-400 rounded-md border border-gray-300 shadow-sm appearance-none sm:text-sm focus:border-primary-500 focus:ring-primary-500 focus:outline-none'
            type='text'
            id={'password'}
            name={id}
            placeholder={placeholder}
            aria-describedby={id}
          />
          <AiOutlineEye
            size={25}
            className='absolute right-4 top-1/2 -translate-y-1/2'
            onClick={() => setShow(false)}
          />{' '}
        </div>
      ) : (
        <div className='relative'>
          <input
            {...register(id, validation)}
            {...rest}
            className='block px-3 py-2 w-full placeholder-gray-400 rounded-md border border-gray-300 shadow-sm appearance-none sm:text-sm focus:border-primary-500 focus:ring-primary-500 focus:outline-none'
            type={type}
            id='username'
            name={id}
            placeholder={placeholder}
            aria-describedby={id}
          />
          <AiOutlineEyeInvisible
            size={25}
            className='absolute right-4 top-1/2 -translate-y-1/2'
            onClick={() => setShow(true)}
          />{' '}
        </div>
      )}

      <div className='my-1'>
        {helperText && <p className='text-xs text-gray-400'>{helperText}</p>}
        {errors[id] && (
          <p className={clsx('text-xs text-red-400')}>
            {errors[id]?.type === 'pattern' && `${messages}`}
            {errors[id]?.type === 'required' && `${label} wajib diisi`}
          </p>
        )}
      </div>
    </div>
  );
}
