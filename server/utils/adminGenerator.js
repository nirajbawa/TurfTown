import Owner from "../models/owner.model.js";
import * as argon2 from "argon2";

const adminGenerator = async() => {
    const isOwnerExists = await Owner.countDocuments({role:"admin"});
    const hashedPassword = await argon2.hash( process.env.adminPass);
    if(isOwnerExists===0)
    {
        const admin = new Owner({
            name: process.env.adminUName,
            password: hashedPassword,
            email: process.env.adminEmail,
            phone: process.env.adminPhone,
            role:"admin"
        })
        await admin.save();
    }
    
}

export default adminGenerator;