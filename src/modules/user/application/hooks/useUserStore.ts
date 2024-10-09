import { create } from "zustand";
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

export const useUserStore = create<UserStore>()(
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

export const useUserSelector = <T>(selector?: (state: User | null) => T): T => {
  const data = useUserStore(
    useShallow(
      selector
        ? (state) => selector(state.data) as T
        : (state) => state.data! as T,
    ),
  );

  return data;
};

export const useUserActions = () => {
  return useUserStore((state) => state.actions);
};
