export interface UpdatePassword {
    password: string;
    newPassword: string;
    id: string;
};


export interface ForgetPassword {
    email: string;
};