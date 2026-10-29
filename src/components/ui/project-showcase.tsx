import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  link?: string;
  github?: string;
};

type ProjectShowcaseProps = {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: { name?: string; position?: string; testimony?: string };
  fontSizes?: { name?: string; position?: string; testimony?: string };
  spacing?: {
    top?: string;
    bottom?: string;
    lineHeight?: string;
    nameTop?: string;
    nameBottom?: string;
    positionTop?: string;
    positionBottom?: string;
    testimonyTop?: string;
    testimonyBottom?: string;
  };
  desktopVersionBottomThreshold?: number;
  imageAspectRatio?: number;
  isRTL?: boolean;
  outerRounding?: string;
  innerRounding?: string;
  outlineColor?: string;
  hoverOutlineColor?: string;
};

export const ProjectShowcase = ({
  testimonials,
  autoplay = false,
  colors = { name: "#fff", position: "#9ca3af", testimony: "#9ca3af" },
  fontSizes = { name: "1.5rem", position: "0.8rem", testimony: "1rem" },
  spacing = {
    top: "1.25rem",
    bottom: "1.25rem",
    lineHeight: "1.5",
    nameTop: "0",
    nameBottom: "0.5em",
    positionTop: "0",
    positionBottom: "0.25em",
    testimonyTop: "1em",
    testimonyBottom: "1em",
  },
  desktopVersionBottomThreshold = 1024,
  imageAspectRatio = 1.6,
  isRTL = false,
  outerRounding = "18.2px",
  innerRounding = "18px",
  outlineColor = "#33313d",
  hoverOutlineColor = "#403d4d",
}: ProjectShowcaseProps) => {
  const [active, setActive] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [componentWidth, setComponentWidth] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  const current: Testimonial | undefined = testimonials[active];

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [autoplay]);

  const handleResize = useCallback(() => {
    if (componentRef.current) {
      setComponentWidth(componentRef.current.offsetWidth);
      setIsMobileView(
        componentRef.current.offsetWidth < desktopVersionBottomThreshold,
      );
    }
  }, [desktopVersionBottomThreshold]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);
    if (componentRef.current) {
      resizeObserver.observe(componentRef.current);
    }
    handleResize(); // Initial check
    return () => {
      if (componentRef.current) {
        resizeObserver.unobserve(componentRef.current);
      }
    };
  }, [handleResize]);

  // One stable rotation per card, fixed for the component's lifetime so
  // re-renders (e.g. hover) never snap the stacked cards to new angles.
  const cardRotations = useRef<number[]>(
    testimonials.map(() => {
      const angle = 10.5 + Math.random() * 0.5; // ~10.5-11 degrees
      return Math.random() < 0.5 ? -angle : angle;
    }),
  );
  const rotationFor = (index: number) => cardRotations.current[index] ?? 0;

  const calculateGap = (width: number) => {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth)
      return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
    return (
      minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
    );
  };

  return (
    <div
      ref={componentRef}
      className="w-full mx-auto antialiased font-sans"
      style={{
        paddingTop: spacing.top,
        paddingBottom: spacing.bottom,
        lineHeight: spacing.lineHeight,
        backgroundColor: "transparent",
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      <div
        className="relative"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: `${calculateGap(componentWidth)}px`,
          ...(isMobileView ? { gridTemplateColumns: "1fr" } : {}),
        }}
      >
        <div className="w-full">
          <div
            className="relative"
            style={{ paddingTop: `${(1 / imageAspectRatio) * 100}%` }}
          >
            <AnimatePresence mode="popLayout">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotationFor(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.93,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotationFor(index),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotationFor(index),
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <ImageContainer
                    src={testimonial.src}
                    alt={testimonial.name}
                    outerRounding={outerRounding}
                    innerRounding={innerRounding}
                    outlineColor={outlineColor}
                    hoverOutlineColor={hoverOutlineColor}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4 w-full">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3
              className="font-bold"
              style={{
                fontSize: fontSizes.name,
                color: colors.name,
                marginTop: spacing.nameTop,
                marginBottom: spacing.nameBottom,
                textAlign: isRTL ? "right" : "left",
              }}
            >
              {current?.name}
            </h3>
            <p
              style={{
                fontSize: fontSizes.position,
                color: colors.position,
                marginTop: spacing.positionTop,
                marginBottom: spacing.positionBottom,
                textAlign: isRTL ? "right" : "left",
              }}
            >
              {current?.designation}
            </p>
            <motion.p
              style={{
                fontSize: fontSizes.testimony,
                color: colors.testimony,
                marginTop: spacing.testimonyTop,
                marginBottom: spacing.testimonyBottom,
                textAlign: isRTL ? "right" : "left",
              }}
            >
              {(current?.quote ?? "").split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div
            className={`flex flex-wrap items-center gap-x-6 gap-y-4 ${
              isMobileView ? "pt-12" : "md:pt-0"
            } w-full`}
          >
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-white/80 bg-white/5 border border-white/15 rounded-lg hover:text-white hover:border-cosmic-red/60 transition-colors cursor-pointer"
              >
                <ChevronLeft size={15} /> Prev
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-white/80 bg-white/5 border border-white/15 rounded-lg hover:text-white hover:border-cosmic-red/60 transition-colors cursor-pointer"
              >
                Next <ChevronRight size={15} />
              </button>
            </div>
            <div className="flex gap-5">
              {current?.github && (
                <a
                  href={current.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={16} /> Code
                </a>
              )}
              {current?.link && (
                <a
                  href={current.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type ImageContainerProps = {
  src: string;
  alt: string;
  outerRounding: string;
  innerRounding: string;
  outlineColor: string;
  hoverOutlineColor: string;
};

const ImageContainer = ({
  src,
  alt,
  outerRounding,
  innerRounding,
  outlineColor,
  hoverOutlineColor,
}: ImageContainerProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-full w-full project-showcase-image-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: outerRounding,
        padding: "1px",
        backgroundColor: hovered ? hoverOutlineColor : outlineColor,
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div
        className="relative h-full w-full overflow-hidden"
        style={{
          borderRadius: innerRounding,
          backgroundColor: "rgba(255,255,255,0.04)",
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="h-full w-full object-cover object-center will-change-transform"
          style={{
            transform: hovered ? "scale(1.03)" : "scale(1)",
            transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>
    </div>
  );
};

export default ProjectShowcase;
