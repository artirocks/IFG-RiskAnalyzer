import React, { Component } from 'react';

class RecommendationResult extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    componentDidMount() {

    }

    goToInputs() {
        this.props.history.push('/recommend-products');
    }

    render() {
        return (
            <div>

                <h2 className="text-center">Recommendations</h2>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" id = "efficiency">
                            <h3 className="text-center">Your desired product will have these ratings</h3>
                            <div className="card-body">

                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th> Location </th>
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
                                            <td>{this.props.location.state.locationScore}</td>
                                            <td>{this.props.location.state.internalAudit}</td>
                                            <td>{this.props.location.state.externalAudit}</td>
                                            <td>{this.props.location.state.finScore}</td>
                                            <td>{this.props.location.state.lossScore}</td>
                                            <td>{this.props.location.state.pastScore}</td>
                                            <td>{this.props.location.state.isUnderRisk}</td>


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

export default RecommendationResult;