import React, { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const collector = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(collector);
        };
    }, [value]);

    return debounceValue;
}
//1111
useEffect(() => {
    const collector = setTimeout(() => {
        setValue(event.target.value);
        validate = (event) => {
            const name = event.target.id;

            schema.fields[name].validate(event.target.value, { abortEarly: false })
                .then(() => {
                    setErrors({ ...errors, [name]: [] });
                })
                .catch((err) => {
                    setErrors({ ...errors, [name]: err.errors });
                });
        };
    }, 100);

    return () => {
        clearTimeout(collector);
    };
}, [value]);

//2222
function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);


    function handleChange(event) {
        useEffect(() => {
            const collector = setTimeout(() => {
                setValue(event.target.value);
                validate(event);
            }, 100);

            return () => {
                clearTimeout(collector);
            };
        }, [value]);
    };

    function validate(event) {
        const name = event.target.id;

        schema.fields[name].validate(event.target.value, { abortEarly: false })
            .then(() => {
                setErrors({ ...errors, [name]: [] });
            })
            .catch((err) => {
                setErrors({ ...errors, [name]: err.errors });
            });
    };

    return { value, onChange: handleChange };
};