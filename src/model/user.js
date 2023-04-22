import { randomUUID } from 'crypto';
// user: {
//     id,
//     userName,
//     email,
//     dob (ngày tháng năm sinh),
//     avatar,
//     picture,
//     address,
//     story (tiểu sử),
//     phoneNumber,
//     accountId
// }
const listUser = [];

class User {
    id;
    userName;
    email;
    dob;
    avatar;
    picture;
    address;
    story;
    phoneNumber;
    accountId;
    constructor(userName, email, dob, avatar, picture, address, story, phoneNumber, accountId) {
        this.id = randomUUID();
        this.accountId = accountId;
        this.address = address;
        this.avatar = avatar;
        this.dob = dob;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.picture = picture;
        this.userName = userName;
        this.story = story;
    }
    createInforUser = (userName, email, dob, avatar, picture, address, story, phoneNumber, accountId) => {
        const newInforUser = new User(userName, email, dob, avatar, picture, address, story, phoneNumber, accountId);
        listUser.push(newInforUser);
        return newInforUser;
    }
    getAll = () => {
        return listUser;
    }
}

export default User;