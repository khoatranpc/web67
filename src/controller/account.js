import Account from "../model/account.js";

const accountController = {
    register: (req, res) => {
        try {
            const accModel = new Account();
            const createAcc = accModel.register(req.body);
            
            res.status(201).send({
                data: createAcc,
                message: 'Thành công!',
            })
        } catch (error) {
            res.status(403).send({
                message: error.message
            })
        }
    }
};
export default accountController;