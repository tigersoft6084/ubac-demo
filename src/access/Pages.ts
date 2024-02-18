import { Access, FieldAccess } from "payload/types";
import { User } from "../payload-types";

export const canReadPages: Access<any, User> = ({ req: { user } }) => {
    // Return true or false based on if the user has an admin role
    return Boolean(user?.permissions?.readPages);
}

export const canWritePages: Access<any, User> = ({ req: { user } }) => {
    // Return true or false based on if the user has an admin role
    return Boolean(user?.permissions?.writePages);
}

export const canDeletePages: Access<any, User> = ({ req: { user } }) => {
    // Return true or false based on if the user has an admin role
    return Boolean(user?.permissions?.deletePages);
}
