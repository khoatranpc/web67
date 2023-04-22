import * as yup from 'yup';
const createInforUserSchema = yup.object({
    body: yup.object({
        accountId: yup.string().required('Bạn cần phải cung cấp id tài khoản!')
    })
});

export {
    createInforUserSchema
}