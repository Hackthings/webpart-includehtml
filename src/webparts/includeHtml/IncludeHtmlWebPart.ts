import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import * as strings from "IncludeHtmlWebPartStrings";
import { IncludeHtml, IIncludeHtmlProps } from "./components/IncludeHtml";

export default class IncludeHtmlWebPart extends BaseClientSideWebPart<IIncludeHtmlProps> {

  public render(): void {
    const element: React.ReactElement<IIncludeHtmlProps> = React.createElement(
      IncludeHtml,
      {
        htmlFileToInclude: this.properties.htmlFileToInclude
      }
    );
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "This web part allows you to include/embed an HTML file on to this page."
          },
          groups: [
            {
              groupName: "Settings",
              groupFields: [
                PropertyPaneTextField("htmlFileToInclude", {
                  label: "HTML File Path",
                  description: "Enter the fully qualified file path - absolute URL - to the HTML file to include."
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
