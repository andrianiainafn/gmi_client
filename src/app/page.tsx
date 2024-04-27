import Hero from "@/app/_common/components/hero";
import {WobbleCardContainer} from "@/app/_common/components/why/card-wobble-container";
import {StickyScrollReveal} from "@/app/_common/components/feature/sticky_scroll_reaveal";
import SectionContainer from "@/app/_common/components/section_container";
import FooterSection from "@/app/_common/components/footer/footer_section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col scroll-smooth ">
        <Hero/>
        <div className="flex flex-col space-y-7 px-6">
            <SectionContainer title={"Why Gmi ?"} section={<WobbleCardContainer/>}/>
            <SectionContainer title={"Feature"} section={<StickyScrollReveal/>}/>
            <FooterSection/>
        </div>
    </main>
  );
}
