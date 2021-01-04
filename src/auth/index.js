import { API } from "../config";

export async function signUp(data = {}) {
  const url = `${API}/signup`;
  console.log("signup data ", JSON.stringify(data));
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    const resJson = await response.json();
    return resJson;
  } catch (err) {
    console.log(err);
  }
}
export async function signIn(data = {}) {
  const url = `${API}/signin`;
  console.log("sign in data ", JSON.stringify(data));
  try {
    const response = await fetch(url, {
      method: "POST",

      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    const resJson = await response.json();
    return resJson;
  } catch (err) {
    console.log(err);
  }
}

export const authenticate = (data, callback) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    callback();
  }
};
const serverSignOut = async () => {
  const url = `${API}/signout`;
  try {
    const response = await fetch(url, {
      method: "get",
    });
    console.log("signout", response);
  } catch (err) {
    console.log(err);
  }
};
export const signOut = callback => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    callback();
    serverSignOut();
  }

  console.log("window is undefined");
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  }
  return false;
};
