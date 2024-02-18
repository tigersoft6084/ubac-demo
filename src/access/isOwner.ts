import { Access, FieldAccess } from "payload/types";
import { User } from "../payload-types";

export const isOwner: Access<any, User> = ({ req: { user } }) => {
  // Return true or false based on if the user has an owner role
  return Boolean(user?.role === 'owner');
}

export const isOwnerFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({ req: { user } }) => {
  // Return true or false based on if the user has an owner role
  return Boolean(user?.role === 'owner');
}