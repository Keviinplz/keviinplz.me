import type { NextPage } from "next";
import Image from "next/image";

import CustomHead from "components/Head";
import { HeroBox, HeroImage, HeroTitle } from "components/Hero";

import img from "assets/images/200.png";

const Home: NextPage = () => {
  return (
    <>
      <CustomHead title="Home | Portfolio" />
      <HeroBox>
        <HeroTitle>
          <h1>
            Hello, World!
            <br /> I'm Kevin.
          </h1>
          <p>
            A computer science engineer interesting in Fullstack Development and
            Data Science.
          </p>
        </HeroTitle>
        <HeroImage>
          <Image src={img} width={400} height={400} alt="Kevin" />
        </HeroImage>
      </HeroBox>
    </>
  );
};

export default Home;
