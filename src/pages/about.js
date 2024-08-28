import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/layout";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>Dinesh Voithu | About Page</title>
        <meta
          name="description"
          content="This Is Dinesh Voithu Portfolio"
        ></meta>
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div>
              <h2>Biography</h2>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
