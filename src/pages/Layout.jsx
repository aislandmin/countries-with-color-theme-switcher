import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Loader } from "../components/Loader";
import { Outlet } from "react-router-dom";

export const Layout = (props) => {
  return (
    <>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Main>
        {props.loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "150px",
            }}
          >
            <Loader />
          </div>
        ) : (
          <Outlet />
        )}
      </Main>
    </>
  );
};
