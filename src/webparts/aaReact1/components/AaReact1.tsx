import * as React from 'react';
import styles from './AaReact1.module.scss';
import { IAaReact1Props } from './IAaReact1Props';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { IlistContactosItems } from './IlistContactosItems';


export class MisContactos extends React.Component<any, any>{

  
  public render() {
    var listContactosItems: IlistContactosItems[];

    listContactosItems = JSON.parse(JSON.stringify(this.props.items))


    return (
      <div className={styles.aaReact1} >
        <h2>Mis contactos</h2>
        <table> {
          listContactosItems.map (element => {
            var toElement= `https://juanfran.sharepoint.com/sites/yo/Lists/misContactos/DispForm.aspx?ID=${element.ID}`
            return (             
              <tr>
                <td>{element.ID}</td>
                <td><a href={toElement}>{element.Title}</a></td>
                <td>{element.Nachname}</td>
                <td>{element.Telefonnum}</td>
                <td>{element.Frei}</td>
                <td>{element.Foto}</td>
              </tr>
            )
          })
        }
        </table>
         </div>
    )
  }

}

export default class AaReact1 extends React.Component<IAaReact1Props, any> {

  constructor(props: IAaReact1Props, any) {
    super(props);  
    this.state = {
      links: []
    };
  }
  public componentDidMount() {
    this.getContactosListData();
  }

  public render(): React.ReactElement<IAaReact1Props> {
    return (
      <div className={styles.aaReact1}>
        <MisContactos header={this.props.description} items={this.state.links} />
      </div>
    );
  }
  private getContactosListData(): Promise<any> {
    return this.props.spClientContext.get("https://juanfran.sharepoint.com/sites/yo/_api/web/lists/getbytitle('misContactos')/items?Odata=minimal",
      SPHttpClient.configurations.v1).then((response: SPHttpClientResponse) => {
        return response.json();
      }).then(data => {
        this.setState({ links: data.value });
      })

  }

}

