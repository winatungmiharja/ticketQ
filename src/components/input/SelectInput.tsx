import clsx from 'clsx';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

export type InputProps = {
  label: string;
  id: string;
  children: React.ReactNode;
  placeholder?: string;
  helperText?: string;
  readOnly?: boolean;
  type?: string;
  className?: string;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<'select'>;

export default function SelectInput({
  id,
  label,
  className,
  helperText,
  placeholder = '',
  children,
  validation,
  readOnly = false,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const value = watch(id);

  // Add disabled and selected attribute to option, will be used if readonly
  const readOnlyChildren = React.Children.map<React.ReactNode, React.ReactNode>(
    children,
    (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          disabled: child.props.value !== rest?.defaultValue,
          // selected: child.props.value === rest?.defaultValue,
        });
      }
    }
  );

  return (
    <div>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <select
        defaultValue=''
        {...register(id, validation)}
        {...rest}
        name={id}
        id={id}
        className={clsx(
          { 'text-gray-500': value === '' },
          'block px-3 py-2 mt-1 w-full placeholder-gray-400 rounded-md border border-gray-300 shadow-sm appearance-none sm:text-sm focus:border-primary-500 focus:ring-primary-500 focus:outline-none',
          className
        )}
        aria-describedby={id}
      >
        {placeholder && (
          <option value='' disabled hidden>
            {placeholder}
          </option>
        )}
        {readOnly ? readOnlyChildren : children}
      </select>
      <div className='mt-1'>
        {helperText && <p className='text-xs text-primary-200'>{helperText}</p>}
        {errors[id] && (
          <span className={clsx('text-xs text-red-300')}>{errors[id]}</span>
        )}
      </div>
    </div>
  );
}
