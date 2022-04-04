import { User } from "firebase/auth";

export function createUserObject(user: User, currentGameId: string | null) {
  return {
    currentGameId: currentGameId || null,
    displayName: user.displayName,
    email: user.email,
    uid: user.uid,
  };
};