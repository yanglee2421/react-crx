// MUI Imports
import { IconButton, IconButtonProps } from "@mui/material";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";

// Redux Imports
import { useThemeStore } from "@/hooks/store";
import { useShallow } from "zustand/react/shallow";

// React Imports
import React from "react";

export function ThemeToggle(props: ThemeToggleProps) {
  // ** Props
  const { ...restProps } = props;

  const [mode, setMode] = useThemeStore(
    useShallow((s) => {
      return [s.mode, s.setMode];
    })
  );
  const isDark = mode === "dark";

  // Icon Element
  const iconEl = React.useMemo(() => {
    if (isDark) return <LightModeOutlined />;
    return <DarkModeOutlined />;
  }, [isDark]);

  // Handle Toogle
  const handleClick = () => {
    setMode(isDark ? "light" : "dark");
  };

  return (
    <IconButton onClick={handleClick} {...restProps}>
      {iconEl}
    </IconButton>
  );
}

export interface ThemeToggleProps extends IconButtonProps {}
