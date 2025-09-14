import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Link } from "next/link";
import "nextra-theme-docs/style.css";
import Image from "next/image";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  title: "Chris Buczek Blog",
  description: "Chris buczek blog about web development and programming. ",
};

const navbar = (
  <Navbar
    logo={
      <div>
        <b>Chris Buczek Blog</b>
      </div>
    }
    logoLink={"/"}
  >
    <a href="https://www.chrisbuczek.com">Portfolio</a>
    <a href="https://github.com/chrisbuczek">Github</a>
    <a href="https://www.linkedin.com/in/krzysztof-buczek/">Linked In</a>
  </Navbar>
);

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          feedback={{ content: null }}
          editLink={null}
          // footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
