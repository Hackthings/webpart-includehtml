import * as React from "react";
import styles from "./IncludeHtml.module.scss";

export enum ENUMDataStatus {
  LOADING = 0,
  DONE,
  EMPTY,
  ERROR
}

export interface IIncludeHtmlProps {
  htmlFileToInclude: string;
}

export interface IIncludeHtmlState {
  dataStatus: ENUMDataStatus;
}

export class IncludeHtml extends React.Component<IIncludeHtmlProps, IIncludeHtmlState> {

  private _HTMLText: string = "";

  public constructor(props: IIncludeHtmlProps) {
    // initialize
    super(props);
    // set state
    this.state = { dataStatus: ENUMDataStatus.LOADING };
  }

  public componentDidMount() {
    // reload html file
    this._loadHTMLFile();
  }

  public componentDidUpdate(prevProps: IIncludeHtmlProps, prevState: IIncludeHtmlState) {
    if (prevProps.htmlFileToInclude !== this.props.htmlFileToInclude) {
      // reload html file
      this._loadHTMLFile();
    }
  }

  private _loadHTMLFile = (): void => {
    fetch(this.props.htmlFileToInclude)
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
      })
      .then((responseText: string) => {
        if (responseText) {
          // save HTML
          this._HTMLText = responseText;
          // set state to render HTML
          this.setState({ dataStatus: ENUMDataStatus.DONE });
        } else {
          // response text empty or other error
          this.setState({ dataStatus: ENUMDataStatus.EMPTY });
        }
      })
      .catch((err) => {
        // there was an error, handled in render method
        this.setState({ dataStatus: ENUMDataStatus.ERROR });
      });
  }

  public render(): React.ReactElement<IIncludeHtmlProps> {
    switch (this.state.dataStatus) {
      case ENUMDataStatus.LOADING:
        // loading the HTML
        return (
          <div>Loading</div>
        );
      case ENUMDataStatus.EMPTY:
        // the file is empty
        return (
          <div>HTML file not found or empty, check the web part properties!</div>
        );
      case ENUMDataStatus.ERROR:
        // something went wrong
        return (
          <div>Error</div>
        );
      default: // ENUMDataStatus.DONE
        return (
          <div className={styles.includeHtml}>
            <div className={styles.container}>
              <div dangerouslySetInnerHTML={{ __html: this._HTMLText }}></div>
            </div>
          </div>
        );
    }
  } // end: render()

}
