import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'IncludeHtmlWebPartStrings';
import IncludeHtml from './components/IncludeHtml';
import { IIncludeHtmlProps } from './components/IIncludeHtmlProps';

export interface IIncludeHtmlWebPartProps {
  description: string;
}

export default class IncludeHtmlWebPart extends BaseClientSideWebPart<IIncludeHtmlWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IIncludeHtmlProps > = React.createElement(
      IncludeHtml,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
