import React, { useContext, createContext, useState } from "react";
import { API } from "../../config";

export default function useProvideAuth() {
  const [auth, setAuth] = useState({ user: "", token: "" });

  async function signIn(data = {}) {
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
      setAuth({ ...resJson });
      return resJson;
    } catch (err) {
      console.log(err);
    }
  }

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
  const signOut = callback => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      callback();
      serverSignOut();
      setAuth({ user: "", token: "" });
    }

    console.log("window is undefined");
  };
  return { auth, signIn, signOut };
}
