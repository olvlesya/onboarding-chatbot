import React from "react";
import classnames from "classnames";
import { useFullScreenHandle, FullScreen } from "react-full-screen";
import { messageType } from "../../data";

export const Message: React.FC<messageType> = ({ type, me = false, jsx }) => {
  const fullScreen = useFullScreenHandle();

  return (
    <li className={classnames("message", { me })}>
      <div className={classnames("text", { me })}>
        {type === "iframe" ? (
          <div>
            <FullScreen handle={fullScreen}>
              <div>{jsx()}</div>
            </FullScreen>
            <button onClick={fullScreen.enter}>Во весь экран</button>
          </div>
        ) : (
          jsx()
        )}
      </div>
    </li>
  );
};
