import Account from "../model/account.js";
import User from "../model/user.js";

const userController = {
    createInfor: (req, res) => {
        try {
            const { userName, email, dob, avatar, picture, address, story, phoneNumber, accountId } = req.body;
            const userModel = new User();
            const createUserInfor = userModel.createInforUser(userName, email, dob, avatar, picture, address, story, phoneNumber, accountId);
            const accountModel = new Account();
            const updateAccount = accountModel.findOneAndUpdate({
                id: accountId
            }, {
                userId: createUserInfor.id,
                status: true
            })
            if (!updateAccount) throw new Error('Không tìm thấy tài khoản!');
            res.status(201).send({
                message: 'Thêm thông tin thành công!',
                createUserInfor,
                updateAccount
            })
        } catch (error) {
            res.status(403).send({
                message: error.message
            })
        }
    },
    getAll: (req, res) => {
        try {
            const userModel = new User();
            const listUser = userModel.getAll();
            res.status(200).send({
                message: 'Thành công!',
                listUser
            })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }
};
export default userController;