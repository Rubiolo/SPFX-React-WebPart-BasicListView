import * as React from 'react';
import styles from './AaReact1.module.scss';
import { IAaReact1Props } from './IAaReact1Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class AaReact1 extends React.Component<IAaReact1Props, {}> {
  public render(): React.ReactElement<IAaReact1Props> {
    return (
      <div className={ styles.aaReact1 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
