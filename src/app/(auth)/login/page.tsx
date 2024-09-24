import LoginForm from "#/components/login/LoginForm";
import { iconPaths } from "#/shared/assets/icon_paths";
import Image from "next/image";

const LoginPage: React.FC = () => {
  return (
    <main className="flex flex-1 w-full min-h-screen">
      <div className="px-14 py-16 w-full justify-center flex flex-col bg-white sm:h-auto sm:w-auto sm:m-auto sm:rounded-lg sm:shadow-lg">
        <Image
          className="w-56 mx-auto"
          src={iconPaths.fmsLogo}
          alt="FMS Logo"
        />
        <h1 className="text-2xl font-semibold text-gray-800 text-center mt-8">
          Login to Account
        </h1>
        <span className="mt-5">
          Please enter your email and password to continue
        </span>

        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
