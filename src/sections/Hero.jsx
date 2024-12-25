import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

function Hero() {
  return (
    <section className="relative pb-40 pt-60 max-lg:pb-36 max-lg:pt-52 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Edicion de video
            </div>
            <h1 className="mb-6 uppercase text-p4 max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12 max-lg:h2 h1">
              Muy simple
            </h1>
            <p className="mb-14 max-w-440 max-md:mb-10">
              Diseñamos es Editor de Video XORA IA para ser facil de usar,
              rapido de aprender, y asombrosamente poderoso.
            </p>
            <LinkScroll
              to="features"
              spy
              smooth
            >
              <Button icon="/images/zap.svg">Comenzar</Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img src="/images/hero.png" className="size-1230 max-lg:h-auto" alt="hero" />
          </div>
        </div>
      </Element>
    </section>
  );
}

export default Hero;
