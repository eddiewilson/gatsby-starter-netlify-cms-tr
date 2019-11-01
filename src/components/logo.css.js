import styled from "styled-components"
import MEDIA from "../utils/mediaTemplates"

export const ImageWrapper = styled.span`
  .gatsby-image-wrapper {
    width: 200px;
    height: 84px;
    ${MEDIA.PHONE` 
    width: 127px;
    height: 53px;`}
  }
`
