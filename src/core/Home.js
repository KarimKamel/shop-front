import React, { useContext } from "react";
import Layout from "./Layout";
import { useAuth } from "../todo/context/ProvideAuth";

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      {console.log(auth.auth)}
      <Layout title="Home Page" description="React e-commerce app" />
    </div>
  );
}
