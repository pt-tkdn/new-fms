import type { Account } from "#/modules/user/domain/entities/account";
import type { User } from "#/modules/user/domain/entities/user";

export interface UserRepository {
  login(email: string, password: string): Promise<User>;
  getAccounts(): Promise<Account[]>;
}
