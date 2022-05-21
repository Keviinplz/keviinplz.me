import Head from "next/head";

type CustomHeadProps = {
  title: string;
  description?: string;
};

const CustomHead: React.FC<CustomHeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description && ""} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;