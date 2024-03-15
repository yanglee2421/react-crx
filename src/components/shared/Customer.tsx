import {
  CloseOutlined,
  DownloadOutlined,
  SettingsOutlined,
  AddOutlined,
  RemoveOutlined,
  LightModeOutlined,
  DarkModeOutlined,
  DesktopWindowsOutlined,
  LoopOutlined,
} from "@mui/icons-material";
import {
  IconButton,
  SwipeableDrawer,
  Box,
  useMediaQuery,
  Divider,
  Card,
  CardHeader,
  CardContent,
  Typography,
  styled,
  CardActionArea,
  Stack,
  CardActions,
  Button,
  Slider,
  Collapse,
  FormLabel,
  FormControl,
  Grid,
  RadioGroup,
  Radio,
  alpha,
} from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { useImmer } from "use-immer";
import snowVillage from "@/assets/images/snow-village.jpg";
import { ScrollView } from "@/components/ui/ScrollView";
import { useForageFileMutation } from "@/hooks/api-localforage/useForageFileMutation";
import { useForageFileQuery } from "@/hooks/api-localforage/useForageFileQuery";
import { useThemeStore } from "@/hooks/store/useThemeStore";
import type { Theme } from "@mui/material";

export function Customer() {
  const imgBoxRef = React.useRef<HTMLLabelElement>(null);

  const smallScreen = useMediaQuery<Theme>((theme) => {
    return theme.breakpoints.up("sm");
  });

  const fileKey = smallScreen ? "bg-img" : "mobile-bgimg";

  const query = useForageFileQuery(fileKey);
  const mutation = useForageFileMutation();

  const [setting, updateSetting] = useImmer({
    showDrawer: false,
    imageWidth: 0,
    imageHeight: 0,
    wallpaperCollapsed: false,
    modeCollapsed: false,
  });

  const bgAlpha = useThemeStore((store) => store.bgAlpha);
  const setBgAlpha = useThemeStore((store) => store.setBgAlpha);
  const bgBlur = useThemeStore((store) => store.bgBlur);
  const setBgBlur = useThemeStore((store) => store.setBgBlur);
  const mode = useThemeStore((store) => store.mode);
  const setMode = useThemeStore((store) => store.setMode);

  const handleDrawerClose = () => {
    updateSetting((prev) => {
      prev.showDrawer = false;
    });
  };

  const handleDrawerOpen = () => {
    updateSetting((prev) => {
      prev.showDrawer = true;
    });
  };

  React.useEffect(() => {
    const el = imgBoxRef.current;

    if (!(el instanceof HTMLElement)) {
      return;
    }

    const observer = new ResizeObserver(([{ contentBoxSize }]) => {
      React.startTransition(() => {
        updateSetting((prev) => {
          const [size] = contentBoxSize;
          prev.imageWidth = size.inlineSize;
          prev.imageHeight = size.blockSize;
        });
      });
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [updateSetting]);

  return (
    <>
      <IconButton onClick={handleDrawerOpen}>
        <SettingsOutlined />
      </IconButton>
      {ReactDOM.createPortal(
        <SwipeableDrawer
          open={setting.showDrawer}
          onOpen={handleDrawerOpen}
          onClose={handleDrawerClose}
          anchor={smallScreen ? "right" : "top"}
          hideBackdrop
          variant="persistent"
          sx={{
            "& > .MuiPaper-root": {
              height: "100%",
            },
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={{ sm: 400 }}
            height={"100%"}
          >
            <Stack
              direction={"row"}
              spacing={1}
              sx={{
                p: 2,
              }}
            >
              <IconButton onClick={handleDrawerClose}>
                <CloseOutlined />
              </IconButton>
              <IconButton>
                <LoopOutlined />
              </IconButton>
            </Stack>
            <Divider />
            <ScrollView>
              <Box
                p={3}
                bgcolor={(theme) => {
                  return theme.palette.background.default;
                }}
              >
                <Stack spacing={3}>
                  <Card>
                    <CardHeader
                      title="Wallpaper"
                      titleTypographyProps={{ variant: "h6" }}
                      subheader="These settings are saved locally on your"
                      action={
                        <IconButton
                          onClick={() => {
                            updateSetting((prev) => {
                              prev.wallpaperCollapsed =
                                !prev.wallpaperCollapsed;
                            });
                          }}
                        >
                          {setting.wallpaperCollapsed ? (
                            <AddOutlined />
                          ) : (
                            <RemoveOutlined />
                          )}
                        </IconButton>
                      }
                    />
                    <Collapse in={!setting.wallpaperCollapsed}>
                      <CardContent>
                        <CardActionArea
                          ref={imgBoxRef}
                          component="label"
                          title="click to change image"
                          sx={{
                            aspectRatio: { xs: "9/16", sm: "16/9" },
                            overflow: "hidden",
                          }}
                        >
                          {(() => {
                            if (query.isPending) {
                              return (
                                <StyledImg
                                  src={snowVillage}
                                  alt="Background image preview"
                                  width={setting.imageWidth}
                                  height={setting.imageHeight}
                                />
                              );
                            }

                            if (query.isError) {
                              return (
                                <StyledImg
                                  src={snowVillage}
                                  alt={query.error.message}
                                  width={setting.imageWidth}
                                  height={setting.imageHeight}
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
                                width={setting.imageWidth}
                                height={setting.imageHeight}
                              />
                            );
                          })()}
                          <input
                            value={""}
                            onChange={async (evt) => {
                              const file = evt.target.files?.item(0);

                              if (file) {
                                mutation.mutate({ file, fileKey });
                              }
                            }}
                            type="file"
                            accept="image/*"
                            hidden
                          />
                        </CardActionArea>
                      </CardContent>
                      <CardContent>
                        <FormControl fullWidth>
                          <FormLabel>
                            <Typography variant="overline">
                              Background alpha
                            </Typography>
                          </FormLabel>
                          <Slider
                            value={bgAlpha}
                            onChange={(evt, v) => {
                              void evt;

                              if (typeof v === "number") {
                                setBgAlpha(v);
                              }
                            }}
                            valueLabelDisplay="auto"
                          />
                        </FormControl>
                        <FormControl fullWidth>
                          <FormLabel>
                            <Typography variant="overline">
                              Background blur
                            </Typography>
                          </FormLabel>
                          <Slider
                            value={bgBlur}
                            onChange={(evt, v) => {
                              void evt;

                              if (typeof v === "number") {
                                setBgBlur(v);
                              }
                            }}
                            valueLabelDisplay="auto"
                          />
                        </FormControl>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          LinkComponent={"a"}
                          href={query.data?.src || snowVillage}
                          download={query.data?.filename}
                          title="download image"
                          startIcon={
                            <DownloadOutlined fontSize="small"></DownloadOutlined>
                          }
                        >
                          download
                        </Button>
                      </CardActions>
                    </Collapse>
                  </Card>
                  <Card>
                    <CardHeader
                      title="Mode"
                      titleTypographyProps={{ variant: "h6" }}
                      subheader="Dark? Light? System?"
                      action={
                        <IconButton
                          onClick={() => {
                            updateSetting((prev) => {
                              prev.modeCollapsed = !prev.modeCollapsed;
                            });
                          }}
                        >
                          {setting.modeCollapsed ? (
                            <AddOutlined />
                          ) : (
                            <RemoveOutlined />
                          )}
                        </IconButton>
                      }
                    />
                    <Collapse in={!setting.modeCollapsed}>
                      <CardContent>
                        <RadioGroup
                          value={mode}
                          onChange={(evt, value) => {
                            void evt;
                            switch (value) {
                              case "system":
                              case "light":
                              case "dark":
                                React.startTransition(() => {
                                  setMode(value);
                                });
                                break;
                              default:
                            }
                          }}
                        >
                          <Grid container spacing={3}>
                            <Grid item xs={4}>
                              <StyledLabel>
                                <LightModeOutlined fontSize="inherit" />
                                <Radio
                                  value="light"
                                  hidden
                                  sx={{ display: "none" }}
                                />
                              </StyledLabel>
                              <Typography variant="body2">Light</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <StyledLabel>
                                <DarkModeOutlined fontSize="inherit" />
                                <Radio
                                  value="dark"
                                  hidden
                                  sx={{ display: "none" }}
                                />
                              </StyledLabel>
                              <Typography variant="body2">Dark</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <StyledLabel>
                                <DesktopWindowsOutlined fontSize="inherit" />
                                <Radio
                                  value="system"
                                  hidden
                                  sx={{ display: "none" }}
                                />
                              </StyledLabel>
                              <Typography variant="body2">System</Typography>
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </CardContent>
                    </Collapse>
                  </Card>
                </Stack>
                <Box height={1000}>465464161</Box>
              </Box>
            </ScrollView>
          </Box>
        </SwipeableDrawer>,
        document.body,
      )}
    </>
  );
}

const StyledImg = styled("img")(({ theme }) => {
  return {
    objectFit: "cover",
    verticalAlign: "bottom",
    borderRadius: theme.shape.borderRadius,
  };
});

const StyledLabel = styled("label")(({ theme }) => {
  const primaryColor = theme.palette.primary.main;
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: theme.shape.borderRadius + "px",
    borderColor: theme.palette.divider,
    fontSize: 32,
    paddingBlock: theme.spacing(3),
    cursor: "pointer",
    transition: theme.transitions.create([
      "color",
      "border-color",
      "background-color",
    ]),
    "&:has( input:checked)": {
      color: primaryColor,
      borderColor: primaryColor,
      backgroundColor: alpha(primaryColor, 0.08),
    },
  };
});
