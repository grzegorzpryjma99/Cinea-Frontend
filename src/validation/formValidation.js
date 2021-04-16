import * as Yup from 'yup';

export const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Nieprawidłowy email').required('Pole wymagane'),
    password: Yup.string()
        .min(6, 'Hasło jest za krótkie')
        .max(20, 'Hasło jest zbyt długie')
        .required('Pole wymagane'),
});

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Imię jest za krótkie')
        .max(15, 'Imię jest zbyt długie')
        .required('Pole wymagane'),
    surname: Yup.string()
        .min(2, 'Nazwisko jest za krótkie')
        .max(15, 'Nazwisko jest zbyt długie')
        .required('Pole wymagane'),
    email: Yup.string().email('Nieprawidłowy email').required('Pole wymagane'),
    password: Yup.string()
        .min(6, 'Hasło jest za krótkie')
        .max(20, 'Hasło jest zbyt długie')
        .required('Pole wymagane'),
});