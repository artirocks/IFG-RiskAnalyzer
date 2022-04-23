import React, { Component } from 'react';
import ProductService from '../services/ProductsService.js';
import XLSX from 'xlsx';

//ui
import { Card } from '@uifabric/react-cards';

//Styles
import './styles.css'
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import HeaderComponent from './HeaderComponent.jsx';
const styles = {
    cardStyles: {
        root: {
          background: 'white',
          paddingTop: 30,
          paddingLeft: 50,
          paddingRight: 50,
          paddingBottom: 50,
          width: '100%',
          maxWidth: '100%',
          margin: 'auto',
          marginTop: 60,
        }
    }
}

const classNames = mergeStyleSets({
    pivot: {
        margin: 'auto',
    }
});

class EfficiencyComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            productName:'',
            typeOfService:''
        }

        this.changeProdHandler = this.changeProdHandler.bind(this);
        this.processRequest = this.processRequest.bind(this);
        this.changeTOSHandler = this.changeTOSHandler.bind(this);
    }

    changeTOSHandler = (event) => {
        this.setState({ typeOfService: event.target.value });
    }

    changeProdHandler = (event) => {
        this.setState({ productName: event.target.value });
    }

    readUploadFile = e => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = XLSX.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);
                console.log(json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    };

    processRequest = (e) => {

        e.preventDefault();

        let json = [{'locationScore':18.1,
                    'internalAudit':14.54,
                    'externalAudit':10.11,
                    'finScore':28.22,
                    'lossScore':32.522,
                    'pastScore':19.89,
                    'isUnderRisk':"Yes"},
                    {'locationScore':8.1,
                    'internalAudit':4.54,
                    'externalAudit':5.11,
                    'finScore':13.56,
                    'lossScore':15.67,
                    'pastScore':22.99,
                    'isUnderRisk':"No"},
                    {'locationScore':51.2,
                    'internalAudit':18.54,
                    'externalAudit':19.11,
                    'finScore':28.55,
                    'lossScore':2.522,
                    'pastScore':29.89,
                    'isUnderRisk':"Yes"},
                    {'locationScore':1,
                    'internalAudit':1,
                    'externalAudit':1,
                    'finScore':1,
                    'lossScore':1,
                    'pastScore':1,
                    'isUnderRisk':"No"},
                ]
        
                    console.log(json);
        
        this.props.history.push({pathname: '/similar-rating',
        state: { json:json}
        });
        

        
    }

    goBack() {
        this.props.history.push('/menu');
    }

    render() {
        return (

            <div>
            <div id = "efficiency">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Bulk Risk Score Generator</h3>
                            <div className="card-body">

                                <form>

                                    <div className="form-group">
                                        <div class="upload">
                                        <label for="typeOfService">Generate Risk Score     </label>
                                        
                                        <input 
          ref="fileInput"
          onChange={this.readUploadFile}
          type="file"
          style={{ display: "none" }}
          id="uploadfile"
          // multiple={false}
        />

        <button onClick={() => this.refs.fileInput.click()}>Upload File</button>
      </div>
                                        <div class="content">
        <input type="radio" value="JSON" name="gender" /> Json
        <input type="radio" value="Excel" name="gender" /> Excel
        <input type="radio" value="csv" name="gender" /> csv
        <input type="radio" value="pdf" name="gender" /> PDF
      </div>
                                    

                                    </div>

                        
                                    <div class="submit">
                                  <button className="btn btn-success" onClick={this.processRequest}> Submit </button>
                                    <button className="btn btn-danger" style={{margin:"10px"}} onClick={this.goBack.bind(this)}> Main Menu </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                

                </div>
            </div>
        );
    }
}

export default EfficiencyComponent