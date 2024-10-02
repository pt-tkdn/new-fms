"use server";

import userRepository from "#/modules/user/data/userRepositoryImpl";

export async function login(prevState: unknown, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const user = await userRepository.login(email, password);
    return {};
  } catch (error) {
    console.log(error);
  }
}
