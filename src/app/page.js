import { Curriculum } from "@/components/Curriculum";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Enrique Casanova - Lead Engineer - Full Stack Developer</title>
        <meta name="description" content="Enrique Casanova is a seasoned Lead Engineer and Full Stack Developer based in Medellín, Colombia, with over 16 years of experience in web and mobile development. Specializing in React, TypeScript, and database management with both SQL and NoSQL systems, Enrique delivers scalable and maintainable technical solutions tailored to business needs." />
      </Head>
      <Curriculum />
    </>
  );
}
