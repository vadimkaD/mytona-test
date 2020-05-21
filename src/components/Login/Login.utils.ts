import { LoginAnswer, LoginFormValues } from "./Login.types";
import { VALID_LOGIN, VALID_PASSWORD } from "./Login.constants";

export function auth(loginFormValues: LoginFormValues): Promise<LoginAnswer> {
  //такой утилиты не должно быть, надо делать запрос к серверу,
  //так что все, что я здесь эмулирую, это асинхронный запрос
  const result: LoginAnswer = {
    isAuthenticated:
      VALID_LOGIN === loginFormValues.username &&
      VALID_PASSWORD === loginFormValues.password,
    errors: []
  };

  if (!result.isAuthenticated) {
    result.errors.push("Invalid login/password.");
    result.errors.push(`Valid is: ${VALID_LOGIN}/${VALID_PASSWORD}`);
  }

  return new Promise(resolve => {
    setTimeout(() => resolve(result), 1000);
  });
}
