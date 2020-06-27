import React from "react"
import { Paginator, Toolbar, ToolbarItem } from "../../../UI"
import { IThreadToolbarProps } from "./ThreadToolbar.types"

const ThreadToolbarBottom: React.FC<IThreadToolbarProps> = ({
  pagination,
}) => (
  <Toolbar>
    <ToolbarItem>
      <Paginator {...pagination} />
    </ToolbarItem>
  </Toolbar>
)

export default ThreadToolbarBottom
