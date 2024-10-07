"use client";
import type { PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";

import type { Account } from "#/modules/user/domain/entities/account";

type AccountState = Account | null;

type AccountActions = (account: Account) => void;

const AccountStateCtx = createContext<AccountState | null>(null);
const AccountActionsCtx = createContext<AccountActions | null>(null);

const AccountProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [account, setAccount] = useState<Account | null>(null);

  return (
    <AccountStateCtx.Provider value={account}>
      <AccountActionsCtx.Provider value={setAccount}>
        {children}
      </AccountActionsCtx.Provider>
    </AccountStateCtx.Provider>
  );
};

export const useAccountState = () => {
  const ctx = useContext(AccountStateCtx);
  if (ctx === undefined) {
    throw new Error("useAccountState must be used within AccountProvider");
  }
  return ctx;
};

export const useAccountActions = () => {
  const ctx = useContext(AccountActionsCtx);
  if (!ctx) {
    throw new Error("useAccountActions must be used within AccountProvider");
  }
  return ctx;
};

export default AccountProvider;
