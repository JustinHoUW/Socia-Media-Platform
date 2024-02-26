import React from 'react';

const TextInput = React.forwardRef((
    { type, placeholder, styles, label, labelStyles, register, name, error },
    ref
) => {
    return (
        <div className='top-editor'>
            {label && (
                <p className={`text-styles ${labelStyles}`}>{label}</p>
            )}
            <div>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    ref={ref}
                    {...register}
                    aria-invalid={error ? true : false}
                    style={styles} 
                />
            </div>
            {error && (
                <span>{error}</span>
            )}
        </div>
    );
});

export default TextInput;