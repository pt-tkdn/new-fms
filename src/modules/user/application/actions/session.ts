"use server";

import userRepository from "#/modules/user/data/userRepositoryImpl";
import { User } from "#/modules/user/domain/entities/user";
import {
  actionFailure,
  ActionResult,
  actionSuccess,
} from "#/shared/core/application/actionResult";
import { HttpError } from "#/shared/utils/httpClient";
import dayjs from "dayjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { XiorError } from "xior";

export async function login(
  prevState: ActionResult<User, HttpError>,
  formData: FormData,
): Promise<ActionResult<User, HttpError>> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const rememberMe = formData.get("remember-me") as string;
    const isRememberMe = rememberMe === "on";

    const user = await userRepository.login(email, password);

    cookies().set("user-session", user.id.toString(), {
      expires: isRememberMe
        ? dayjs().add(7, "day").toDate()
        : dayjs().add(1, "day").toDate(),
    });
    return actionSuccess(user);
  } catch (err) {
    const error = err as XiorError<HttpError>;
    console.log("error", error);
    return actionFailure<HttpError>(
      error.response?.data ?? {
        case: "unknown",
        code: "unknown",
        message: "Terjadi kesalahan, silahkan coba lagi nanti",
      },
    );
  }
}

export async function logout() {
  cookies().set("user-session", "");
  redirect("/login");
}
