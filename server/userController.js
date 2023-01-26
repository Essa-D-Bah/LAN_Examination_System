const User = require('./User');

const createUser = async (name, matNo)=>{
     const newUser = new User({name, matNo});
     try {
        await newUser.save();
        return "User create";
     } catch (error) {
        return error;
     }
}

const updateUser=()=>{

}

const deleteUser = ()=>{

}

const getUser = ()=>{

}

module.exports = {createUser, updateUser, deleteUser, getUser};