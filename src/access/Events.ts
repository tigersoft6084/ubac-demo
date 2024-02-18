import { Access, FieldAccess } from "payload/types";
import { User } from "../payload-types";

export const canReadEvents: Access<any, User> = ({ req: { user } }) => {
    // Return true or false based on if the user has an admin role
    return Boolean(user?.permissions?.readEvents);
}

export const canWriteEvents: Access<any, User> = ({ req: { user } }) => {
    // Return true or false based on if the user has an admin role
    return Boolean(user?.permissions?.writeEvents);
}

export const canDeleteEvents: Access<any, User> = ({ req: { user } }) => {
    // Return true or false based on if the user has an admin role
    return Boolean(user?.permissions?.deleteEvents);
}
