import { Avatar, Box, Button, TextInput } from "@joaogomesdev-studies/react";
import { colors } from "@joaogomesdev-studies/tokens";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className={styles.containerOuter} style={{ backgroundColor: colors.gray400}}>
        <Avatar src="https://github.com/JoaoGomes5.png" alt="Joao Gomes"/>
        <TextInput placeholder="Email Address"/>
        <Button>Press me</Button>
      </Box>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardDescription}>{description}</p>
      <a
        className={styles.cardDocumentation}
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};