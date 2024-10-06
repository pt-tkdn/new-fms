import { Account } from "#/modules/user/domain/entities/account";
import { User } from "#/modules/user/domain/entities/user";

export interface UserRepository {
  login(email: string, password: string): Promise<User>;
  getAccounts(): Promise<Account[]>;
}
