import {
  Box,
  styled,
  CircularProgress,
  alpha as muiAlpha,
} from "@mui/material";
import React from "react";
import { useImmer } from "use-immer";
import fallbackBgImg from "@/assets/images/snow-village.jpg";
import { useForageFileQuery } from "@/hooks/api-localforage/useForageFileQuery";
import type { BoxProps } from "@mui/material";
import ReactDOM from "react-dom";
import { Customer } from "@/components/shared/Customer";

export function ImageBackground(props: Props) {
  const { alpha, blur } = props;

  const query = useForageFileQuery("bg-img");

  const containerRef = React.useRef<HTMLDivElement>(null);

  const [state, updateState] = useImmer({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const containerEl = containerRef.current;

    if (!(containerEl instanceof HTMLElement)) {
      return;
    }

    const observer = new ResizeObserver(([{ contentBoxSize }]) => {
      React.startTransition(() => {
        updateState((draft) => {
          const [size] = contentBoxSize;
          draft.width = size.inlineSize;
          draft.height = size.blockSize;
        });
      });
    });

    observer.observe(containerEl);

    return () => {
      observer.disconnect();
    };
  }, [updateState]);

  return ReactDOM.createPortal(
    <Box
      ref={containerRef}
      position={"fixed"}
      zIndex={1}
      sx={{
        inset: `calc(${20 * (blur / 100)}px * -2)`,
        transition(theme) {
          return theme.transitions.create(["filter", "inset"]);
        },
        filter: `blur(${20 * (blur / 100)}px)`,
      }}
    >
      {/* Image */}
      {(() => {
        if (query.isPending) {
          return (
            <StyledImg
              src={fallbackBgImg}
              alt="Background image"
              width={state.width}
              height={state.height}
            />
          );
        }

        if (query.isError) {
          return (
            <StyledImg
              src={fallbackBgImg}
              alt={query.error.message}
              width={state.width}
              height={state.height}
            />
          );
        }

        return (
          <StyledImg
            src={query.data.src}
            alt={query.data.filename}
            onError={() => {
              query.refetch();
            }}
            width={state.width}
            height={state.height}
          />
        );
      })()}

      {/* Mask */}
      <Box
        position={"absolute"}
        zIndex={2}
        bgcolor={muiAlpha("#000", alpha / 100)}
        sx={{
          inset: 0,
          transition(theme) {
            return theme.transitions.create(["background-color"]);
          },
        }}
      />

      {/* Spin Icon */}
      {query.isPending && (
        <CircularProgress
          size={24}
          sx={{
            position: "absolute",
            zIndex: 3,
            left: 24,
            bottom: 24,
          }}
        />
      )}

      <Customer />
    </Box>,
    document.body
  );
}

type Props = BoxProps & {
  alpha: number;
  blur: number;
};

const StyledImg = styled("img")({
  position: "absolute",
  inset: 0,
  zIndex: 1,
  objectFit: "cover",
});
