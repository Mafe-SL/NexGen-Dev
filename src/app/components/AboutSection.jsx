"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Misión",
    id: "mision",
    content: (
      <ul className="list-disc pl-2">
        <p>Desarrollar soluciones de software de alta calidad que impulsen la transformación digital de las empresas, optimizando sus procesos y potenciando su competitividad en el mercado global.</p>
        
      </ul>
    ),
  },
  {
    title: "Visión",
    id: "vision",
    content: (
      <ul className="list-disc pl-2">
        <p>Ser reconocidos como líderes en la creación de software a nivel global, ofreciendo productos que no solo resuelvan problemas tecnológicos, sino que también generen valor y contribuyan al éxito a largo plazo de nuestros clientes.</p>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Nosotros</h2>
          <p className="text-base lg:text-lg">
          Somos una empresa especializada en el desarrollo de soluciones de software innovadoras y a medida para empresas de todos los sectores. Nuestro equipo de profesionales combina creatividad, tecnología y experiencia para transformar ideas en productos digitales eficientes, escalables y robustos. Nos enfocamos en la mejora continua, la satisfacción del cliente y el uso de tecnologías de vanguardia para resolver los desafíos más complejos del mundo digital.
          </p>
          <div className="flex flex-row justify-start mt-5">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("mision")}
              active={tab === "mision"}
            >
              {" "}
              Misión{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("vision")}
              active={tab === "vision"}
            >
              {" "}
              Visión{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
