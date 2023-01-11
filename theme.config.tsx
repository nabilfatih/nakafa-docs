import React from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Logo />
      <strong>Nakafa</strong>
    </>
  ),
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:url" content={`https://docs.nakafa.com${asPath}`} />
        <meta property="og:title" content={frontMatter.title || "Nakafa"} />
        <meta
          property="og:description"
          content={frontMatter.description || "Nkafa Documentation"}
        />
      </>
    );
  },
  project: {
    link: "https://github.com/nabilfatih/nakafa-docs",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/nabilfatih/nakafa-docs",
  footer: {
    text: "Nakafa Documentation",
  },
  i18n: [],
};

export default config;
