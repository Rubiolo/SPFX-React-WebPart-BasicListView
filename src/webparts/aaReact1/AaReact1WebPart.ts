import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'AaReact1WebPartStrings';
import AaReact1 from './components/AaReact1';
import { IAaReact1Props } from './components/IAaReact1Props';

export interface IAaReact1WebPartProps {
  description: string;
  }

export default class AaReact1WebPart extends BaseClientSideWebPart<IAaReact1WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAaReact1Props > = React.createElement(
      AaReact1,
      {
        description: this.properties.description,
        spClientContext: this.context.spHttpClient
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
