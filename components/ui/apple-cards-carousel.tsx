"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/lib/use-outside-click";
import Image from "next/image";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content?: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0,
  autoPlay = true,
  autoPlayInterval = 2000
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length, isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleCardClose = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div
        className="relative w-full py-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex justify-center items-center relative h-[560px] md:h-[580px] lg:h-[650px]">
          {items.map((item, index) => {
            // Calculate offset with wrapping for infinite loop effect
            let offset = index - currentIndex;

            // Wrap around logic for infinite carousel
            if (offset > items.length / 2) {
              offset -= items.length;
            } else if (offset < -items.length / 2) {
              offset += items.length;
            }

            const absOffset = Math.abs(offset);

            // Only show current and adjacent cards
            if (absOffset > 1) return null;

            return (
              <div
                key={"card" + index}
                className={cn(
                  "absolute transition-all duration-700 ease-in-out",
                  offset === 0 && "z-30",
                  offset === -1 && "z-10",
                  offset === 1 && "z-10",
                )}
                style={{
                  transform: `
                    translateX(${offset * (isMobile ? 200 : 280)}px)
                    scale(${offset === 0 ? 1 : 0.8})
                    rotateY(${offset * 10}deg)
                  `,
                  opacity: offset === 0 ? 1 : 0.4,
                  filter: offset === 0 ? 'blur(0px)' : 'blur(2px)',
                }}
              >
                {item}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-900 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
            onClick={goToPrev}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-900 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
            onClick={goToNext}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "w-8 bg-[#7B68EE]"
                  : "w-2 bg-gray-300 dark:bg-neutral-700"
              )}
            />
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  const isActive = currentIndex === index;

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "mb-4 text-center max-w-[240px] transition-opacity duration-500",
            isActive ? "opacity-100" : "opacity-50"
          )}
        >
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {card.category}
          </p>
          <p className="text-base md:text-lg font-semibold">
            {card.title}
          </p>
        </div>
        <div
          className={cn(
            "rounded-3xl bg-gray-100 dark:bg-neutral-900 h-[400px] w-[200px] md:h-[480px] md:w-[240px] overflow-hidden flex flex-col items-center justify-center relative",
            "transition-all duration-500"
          )}
        >
          <Image
            src={card.src}
            alt={card.title}
            fill
            className="object-contain absolute inset-0"
          />
        </div>
      </div>
    </>
  );
};
