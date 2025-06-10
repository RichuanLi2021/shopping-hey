import * as Yup from 'yup';

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