import { randomUUID } from 'crypto';
import role from '../global/role.js';
// account: {
//     id,
//     email,
//     password,
//     role,
//     userId
// }

const listAccount = [];
class Account {
    id
    email
    password
    role
    userId
    status
    // hàm khởi tạo
    constructor(email, password) {
        // kế thừa tất cả các thuộc tính, phương thức của những thằng cha mà class này kế thừa
        // super();
        this.email = email;
        this.password = password;
        this.id = randomUUID();
        this.role = role['USER'];
        // người dùng chưa có thông tin cá nhân
        this.status = false
    }
    register = ({ email, password }) => {
        try {
            const checkExistedEmail = this.findByEmail(email);
            if (checkExistedEmail) throw new Error('Email đã tồn tại!');

            const newAccount = new Account(email, password);
            listAccount.push(newAccount);
            return { email, password, createdId: newAccount.id };

        } catch (error) {
            throw new Error(error.message);
        }
    }
    getAll = () => {
        return listAccount;
    }
    findByEmail = (email) => {
        const findExistedEmail = listAccount.find(item => item.email === email);
        return findExistedEmail;
    }
    /* {
        field: id
        value: 1232
    }*/
    findOneAndUpdate = (filter, fields) => {
        const idx = listAccount.findIndex((item) => {
            let check = false;
            for (const key in filter) {
                if (item[key] !== filter[key]) {
                    check = false;
                    break;
                } else {
                    check = true;
                }
            }
            return check;
        })
        if (idx < 0) {
            return null
        }
        console.log(idx);
        listAccount[idx] = {
            ...listAccount[idx],
            ...fields,
        }
        return listAccount[idx];
    }
}
export default Account;