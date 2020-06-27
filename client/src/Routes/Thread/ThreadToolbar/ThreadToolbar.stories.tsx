import React from "react"
import { RootContainer } from "../../../UI/Storybook"
import ThreadToolbarBottom from "./ThreadToolbarBottom"
import ThreadToolbarTop from "./ThreadToolbarTop"

export default {
  title: "Route/Thread/Toolbars",
}

const url = (page: number) => {
  if (page > 1) return `/thread/${page}/`
  return "/thread/"
}

export const Default = () => {
  const props = {
    pagination: {
      url,
      page: 1,
      pages: 1,
    },
  }

  return (
    <RootContainer padding>
      <ThreadToolbarTop {...props} />
      <hr />
      <ThreadToolbarBottom {...props} />
    </RootContainer>
  )
}
