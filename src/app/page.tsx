import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />     
      <Hero /> 
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About Us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sit. Non in rem ipsa 
            voluptate exercitationem incidunt unde iure voluptatum placeat quo, autem, nulla laborum 
            perspiciatis, obcaecati suscipit facere? Cum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sit. Non in rem ipsa 
            voluptate exercitationem incidunt unde iure voluptatum placeat quo, autem, nulla laborum 
            perspiciatis, obcaecati suscipit facere? Cum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sit. Non in rem ipsa 
            voluptate exercitationem incidunt unde iure voluptatum placeat quo.
          </p>
        </div>
      </section>
      <section className="text-center">
        <SectionHeaders 
          subHeader={"Get in touch"} 
          mainHeader={"Contact"} 
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500" 
            href="tel:+551899999999"
          >
            +55 18 99999-9999
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2025 all rights reserved
      </footer>
    </>
  );
}
