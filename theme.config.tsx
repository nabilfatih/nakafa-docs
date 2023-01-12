import React from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – Nakafa Documentation",
      };
    }
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta name="robots" content="follow, index" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="public/favicon.ico" />
        <meta property="og:url" content={`https://docs.nakafa.com${asPath}`} />
        <meta
          property="og:title"
          content={frontMatter.title || "Nakafa Documentation"}
        />
        <meta
          property="og:description"
          content={frontMatter.description || "Nakafa Documentation"}
        />
      </>
    );
  },
  project: {
    link: "https://github.com/nabilfatih/nakafa-docs",
  },
  chat: {
    link: "https://discord.gg/gE983WmM",
  },
  docsRepositoryBase: "https://github.com/nabilfatih/nakafa-docs",
  footer: {
    text: "Nakafa Documentation",
  },
  i18n: [],
};

export default config;
