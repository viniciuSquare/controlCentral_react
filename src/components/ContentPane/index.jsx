import { ContentPaneStyled } from './styled'
import classNames from "classnames";

export function ContentPane( { 
  title,
  children,
  primary = false,
  singleContainer = false,
  small = false,
  medium = false,
  headless = false,
  main = false
   } ) {

  return (
    <ContentPaneStyled className={ 
      classNames( primary ? `primary-pane` : "secondary-pane", 
      singleContainer ? "single-container" : '',
      small && "small-container",
      medium && "medium-container",
      headless && "headless-container")
    }
    >
      <div className="container-head">
        {
          main 
            ? title 
            : <h2>{title}</h2>
        }
      </div>
      <div className="pane-content">
        {children}
      </div>
      


    </ContentPaneStyled>
  )
}