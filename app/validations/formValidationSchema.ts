import * as Yup from 'yup';

//Add Product
 export const AddProductValidationSchema = Yup.object({
    productName: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    bannerUrl: Yup.string()
        .url('Must be a valid URL')
        .required('Required'),
    description: Yup.string()
        .min(15, "You've gotta write something!")
        .required('Description is required'),
    price: Yup.number()
        .typeError("Price must be a number")
        .positive("Price must be > 0")
        .required("Price is required")
 })

 //User authentication
 export const SignupSchema = Yup.object({
    fullName: Yup.string()
        .min(1, 'Is your name really just 1 letter?')
        .required('Your name is Required!'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required!'),
    phone: Yup.string()
        .matches(/^[0-9]{10, 15}$/, "Phone must be 10-15 digits")
        .required("Phone number is required!"),
    password: Yup.string()
        .min(8, "Password must be not less than 8")
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Check it, Password did not match.")
        .required('Confirm you password is required!')
 })

 export const LoginSchema = Yup.object({
         email: Yup.string()
            .email('Invalid email')
            .required('Email is required!'),
         password: Yup.string()
            .required('Password is required'),
       });