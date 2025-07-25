export const fakeLogin = async ({ email, password }) => {

  await new Promise((res) => setTimeout(res, 800));

  if (email === "test@test.com" && password === "123456") {
  
    return {
      user: { id: 1, email, name: "Test User" },
      token: "fake_jwt_token_123",
    };
  }

 
  throw new Error("Неверный email или пароль");
};
