import Head from "next/head";
import AddVeiculo from "../components/AddVeiculo";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gerentiamento de Veículo</title>
      </Head>
      <NavBar />
      <main>
        <AddVeiculo />
      </main>
    </>
  );
}
