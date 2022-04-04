import { useEffect } from "react";

import { setUser, updateTiles } from "../redux/userSlice";
import { useTypedDispatch } from "../redux/store";

import { firebaseAuth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

import { createUserObject } from "../utils/createUserObject";
import { currentGameRef } from "../utils/currentGameRef";
import { getCurrentGameId } from "../utils/getCurrentGameId";

export function useSetUser() {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        try {
          const currentGameId = await getCurrentGameId(user.uid);

          dispatch(setUser(createUserObject(user, currentGameId)));

          if (currentGameId) {
            const unsub = onSnapshot(currentGameRef(currentGameId), (doc) => {
              if (doc.exists()) {
                console.log('Listener firing');
                dispatch(updateTiles(doc.data().tiles));
              };
            });
          }
        } catch (error) {
          console.error(error);
        };
      };
    });
  }, [dispatch]);
};
