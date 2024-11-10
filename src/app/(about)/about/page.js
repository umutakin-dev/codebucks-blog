import AboutCoverSection from "@/components/About/AboutCoverSection";
import Skills from "@/components/About/Skills";
import siteMetadata from "@/utils/siteMetaData";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: "About Me",
  description: "Here are some details about myself.",
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />

      <h2
        className="
          mt-8  mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 
          font-semibold dark:font-normal
          text-lg md:text-2xl 
          text-dark dark:text-light 
          self-start">
        Have a project in mind? Reach out to me 📞 from{" "}
        <Link
          className="!underline underline-offset-2"
          href="/contact">
          here
        </Link>{" "}
        and let's make it happen.
      </h2>
    </>
  );
}
