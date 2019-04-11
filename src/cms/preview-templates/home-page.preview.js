import React from "react"
import { HomePageTemplate } from "../../templates/home-page.template"
import { CatchError } from "../../core"

export const HomePagePreview = ({ entry }) => (
  <CatchError>
    <HomePageTemplate {...entry.getIn(["data"]).toJS()} isPreview={true} />
  </CatchError>
)
