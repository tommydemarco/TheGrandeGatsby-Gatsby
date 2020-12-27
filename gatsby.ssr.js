import React from "react"
export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setHeadComponents([
    <script type="text/javascript">
      console.log('Happy Coding and Stay Safe!!');
    </script>,
  ])
}
