import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Game = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "src/components/game/Build/New folder.loader.js",
    dataUrl: "src/components/game/Build/New folder.data",
    frameworkUrl: "src/components/game/Build/New folder.framework.js",
    codeUrl: "src/components/game/Build/New folder.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}
export default Game;