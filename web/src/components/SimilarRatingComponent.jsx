import React, { Component } from 'react';

class SimilarRatingComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    componentDidMount() {

    }

    goToInputs() {
        this.props.history.push('/efficiency-products');
    }

    render() {
        return (
            <div>

                <h2 className="text-center">Risk Analytics of Forced Labour</h2>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" id = "efficiency">
                            <h3 className="text-center">Forced Labour Risk Analytics Profile Rating</h3>
                            <div className="card-body">

                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th> ID</th>
                                            <th> Location Score</th>
                                            <th> Internal Audit</th>
                                            <th> External Audit</th>
                                            <th> Fin Score</th>
                                            <th> Loss Score</th>
                                            <th> Past Score</th>
                                            <th> Is Under Risk</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>0</td>
                                            <td>{this.props.location.state.json[0]['locationScore']}</td>
                                            <td>{this.props.location.state.json[0]['internalAudit']}</td>
                                            <td>{this.props.location.state.json[0]['externalAudit']}</td>
                                            <td>{this.props.location.state.json[0]['finScore']}</td>
                                            <td>{this.props.location.state.json[0]['lossScore']}</td>
                                            <td>{this.props.location.state.json[0]['pastScore']}</td>
                                            <td>{this.props.location.state.json[0]['isUnderRisk']}</td>


                                        </tr>

                                        <tr>
                                            <td>1</td>
                                            <td>{this.props.location.state.json[1]['locationScore']}</td>
                                            <td>{this.props.location.state.json[1]['internalAudit']}</td>
                                            <td>{this.props.location.state.json[1]['externalAudit']}</td>
                                            <td>{this.props.location.state.json[1]['finScore']}</td>
                                            <td>{this.props.location.state.json[1]['lossScore']}</td>
                                            <td>{this.props.location.state.json[1]['pastScore']}</td>
                                            <td>{this.props.location.state.json[1]['isUnderRisk']}</td>


                                        </tr>

                                        <tr>
                                            <td>2</td>
                                            <td>{this.props.location.state.json[2]['locationScore']}</td>
                                            <td>{this.props.location.state.json[2]['internalAudit']}</td>
                                            <td>{this.props.location.state.json[2]['externalAudit']}</td>
                                            <td>{this.props.location.state.json[2]['finScore']}</td>
                                            <td>{this.props.location.state.json[2]['lossScore']}</td>
                                            <td>{this.props.location.state.json[2]['pastScore']}</td>
                                            <td>{this.props.location.state.json[2]['isUnderRisk']}</td>


                                        </tr>

                                        <tr>
                                            <td>3</td>
                                            <td>{this.props.location.state.json[3]['locationScore']}</td>
                                            <td>{this.props.location.state.json[3]['internalAudit']}</td>
                                            <td>{this.props.location.state.json[3]['externalAudit']}</td>
                                            <td>{this.props.location.state.json[3]['finScore']}</td>
                                            <td>{this.props.location.state.json[3]['lossScore']}</td>
                                            <td>{this.props.location.state.json[3]['pastScore']}</td>
                                            <td>{this.props.location.state.json[3]['isUnderRisk']}</td>


                                        </tr>
                                    </tbody>

                                </table>
                                  

                            </div>
                            
                            

                            <button className="btn btn-warning" style={{margin:"20px"}} onClick={() => this.goToInputs()}> Try Next Inputs </button>
                        </div>
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default SimilarRatingComponent;