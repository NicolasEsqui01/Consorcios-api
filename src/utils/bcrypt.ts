import { genSaltSync, hashSync, compareSync } from "bcrypt";

export default {
    encryptPassword(password: string){
        // const { SALT_ROUND } = development;
        const salt = genSaltSync(10);
        return hashSync(password, salt);
    },
    comparePassword(password: string, hash: string): boolean{
        return compareSync(password, hash);
    }
};