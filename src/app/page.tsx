'use client'
//import Image from "next/image";
import { Competence } from "@/composents/Comptence";
import { SectionContact } from "@/composents/Contact";
import { SectionPresentation } from "@/composents/Acceuil";
import { SectionProjets } from "@/composents/Projet";

export default function Home() {
  return (
    <div>
      <SectionPresentation/>
      <Competence/>
      <SectionProjets/>
      <SectionContact/>
    </div>
  );
}
