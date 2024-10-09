"use client";

import type { PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useRef } from "react";
import { createStore, useStore } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { useShallow } from "zustand/react/shallow";

import type { User } from "#/modules/user/domain/entities/user";

interface UserStore {
  data: User | null;
  actions: {
    setUser: (user: User) => void;
    clearUser: () => void;
  };
}
const createUserStore = () => {
  return createStore<UserStore>()(
    immer(
      persist(
        (set) => {
          return {
            data: null,
            actions: {
              setUser: (user) => {
                set((state) => {
                  state.data = user;
                });
              },
              clearUser: () => {
                set({ data: null });
              },
            },
          };
        },
        {
          name: "user",
          partialize: (state) => state.data,
          merge: (persisted, current) => {
            return {
              actions: current.actions,
              data: {
                ...current.data,
                ...(persisted as User),
              },
            };
          },
          onRehydrateStorage: () => {
            console.log("hydration starts");
            // optional
            return (state, error) => {
              if (error) {
                console.log("an error happened during hydration", error);
              } else {
                console.log("hydration finished");
              }
            };
          },
        },
      ),
    ),
  );
};

type UserStoreType = ReturnType<typeof createUserStore>;

const UserStoreCtx = createContext<UserStoreType | null>(null);

export const UserStoreProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const storeRef = useRef<UserStoreType | null>(null);

  useEffect(() => {
    if (!storeRef.current) {
      storeRef.current = createUserStore();
    }
  }, []);

  return (
    <UserStoreCtx.Provider value={storeRef.current}>
      {children}
    </UserStoreCtx.Provider>
  );
};

export const useUserSelector = <T,>(selector?: (state: User) => T): T => {
  const ctx = useContext(UserStoreCtx)!;
  const data = useStore(
    ctx,
    useShallow(
      selector
        ? (state) => selector(state.data!) as T
        : (state) => state.data! as T,
    ),
  );

  return data;
};

export const useUserActions = () => {
  const ctx = useContext(UserStoreCtx)!;
  return useStore(ctx, (state) => state.actions);
};
