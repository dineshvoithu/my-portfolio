import React from "react";
import Layout from "./layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-size-lg">
      <Layout className="py-5 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With <span className="px-1 text-primary text-2xl">&#9825;</span>
          By&nbsp;
          <Link
            href="/"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            Dinesh Voithu
          </Link>
        </div>
        <Link
          href="/"
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
