import { useState, useEffect } from 'react';

const useForm = validate => {
    const [values, setValues] = useState({
        name: '',
        mail: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handlePress = e => {

        e.preventDefault();

        setErrors(validate(values));


        fetch(
            '../../../api/send-email',
            {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(function (res) {

                if (res.status == 202) {
                    setTimeout("location.href = 'https://venancio.vercel.app/';", 100);
                } else {
                    
                }

            }).catch(function (err) {
                console.log(err);
                setTimeout("location.href = 'https://venancio.vercel.app/falha';", 100);
            });
    };

    return { handleChange, values, handlePress, errors };

};

export default useForm;



 // if (state.name === null || state.name == '' || state.name === undefined) {
            //     setNameState(!nameActive);
            // }

    // const handlePress = () => {
    //     fetch(
    //         '../../../api/send-email',
    //         {
    //             method: 'POST',
    //             body: JSON.stringify(state),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function () {
    //             console.log("Email Sent");
    //             // setTimeout("location.href = 'https://bfactor.com.br/obrigado';", 100);
    //         }).catch(function () {
    //             console.log("Email Fail");
    //             // setTimeout("location.href = 'https://bfactor.com.br/falha';", 100);
    //         });
    // }

