import { ReactNode, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop, Container, Theme } from "@material-ui/core";
import Lottie from "lottie-web-react";

import HeaderNode from "./Navigation/HeaderNode/HeaderNode";
import Footer, { TFooterProps } from "./Footer/Footer";
import { IPage, IProject } from "../../interfaces";

export type TLayoutProps = {
  children: ReactNode;
  loading: boolean;
  footer?: IPage;
  projects: IProject[];
};

const useStyles = makeStyles<Theme, Pick<TLayoutProps, "loading">>((theme) => ({
  root: {
    height: "100%",
    backgroundColor: theme.palette.primary.light,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.secondary.main,
  },
  container: ({ loading }) => ({
    visibility: loading ? "hidden" : "initial",
  }),
  lottieContainer: {
    height: "300px",
    width: "300px",
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  path: "https://assets8.lottiefiles.com/packages/lf20_cHA3rG.json",
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Layout = ({ children, loading, footer, projects }: TLayoutProps) => {
  const classes = useStyles({ loading });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loading]);

  return (
    <div className={classes.root}>
      <Backdrop
        open={loading}
        transitionDuration={{
          appear: 0,
          enter: 500,
          exit: 500,
        }}
        className={classes.backdrop}
      >
        <div className={classes.lottieContainer}>
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
            isStopped={false}
            isPaused={false}
          />
        </div>
      </Backdrop>
      <div className={classes.container}>
        <HeaderNode projects={projects} />
        <Container fixed>
          {/* @ts-ignore */}
          {children}
        </Container>
        <Footer {...({ ...footer?.data } as TFooterProps)} />
      </div>
    </div>
  );
};

export default Layout;
