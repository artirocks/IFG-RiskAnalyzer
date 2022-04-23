import React, { Component } from 'react';
import ProductService from '../services/ProductsService.js';

class RecommendationComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            location: '',
            hygiene: '',
            micro: '',
            work: '',
            salary: '',
            age: '',
            infra: '',
            food: '',
            incentives: '',
            family: '',
            exp: '',
            share:'',
            attrition:'',
            contract:'',
            locationScore:'',
            internalAudit:'',
            externalAudit:'',
            finScore:'',
            lossScore:'',
            pastScore:'',
            isUnderRisk:''
        }

        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.changeHygieneHandler = this.changeHygieneHandler.bind(this);
        this.changeMicroHandler = this.changeMicroHandler.bind(this);
        this.changeWorkHandler = this.changeWorkHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeInfraHandler = this.changeInfraHandler.bind(this);
        this.changeFoodHandler = this.changeFoodHandler.bind(this);
        this.changeIncentivesHandler = this.changeIncentivesHandler.bind(this);
        this.changeFamilyHandler = this.changeFamilyHandler.bind(this);
        this.changeExpHandler = this.changeExpHandler.bind(this);
        this.changeShareHandler = this.changeShareHandler.bind(this);
        this.changeAttritionHandler = this.changeAttritionHandler.bind(this);
        this.changeContractHandler = this.changeContractHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeLocationHandler = (event) => {
        this.setState({ location: event.target.value });
    }

    changeHygieneHandler = (event) => {
        this.setState({ hygiene: event.target.value });
    }

    changeMicroHandler = (event) => {
        this.setState({ micro: event.target.value });
    }

    changeWorkHandler = (event) => {
        this.setState({ work: event.target.value });
    }

    changeSalaryHandler = (event) => {
        this.setState({ salary: event.target.value });
    }

    changeAgeHandler = (event) => {
        this.setState({ age: event.target.value });
    }

    changeInfraHandler = (event) => {
        this.setState({ infra: event.target.value });
    }

    changeFoodHandler = (event) => {
        this.setState({ food: event.target.value });
    }

    changeIncentivesHandler = (event) => {
        this.setState({ incentives: event.target.value });
    }

    changeFamilyHandler = (event) => {
        this.setState({ family: event.target.value });
    }

    changeExpHandler = (event) => {
        this.setState({ exp: event.target.value });
    }

    changeShareHandler = (event) => {
        this.setState({ share: event.target.value });
    }

    changeAttritionHandler = (event) => {
        this.setState({ attrition: event.target.value });
    }

    changeContractHandler = (event) => {
        this.setState({ contract: event.target.value });
    }


    onSubmit = (e) => {

        e.preventDefault();

        let location = this.state.location
        let hygiene = parseFloat(this.state.hygiene);
        let micro = parseFloat(this.state.micro);
        let work = parseFloat(this.state.work);
        let salary = parseFloat(this.state.salary);
        let age = parseFloat(this.state.age);
        let infra = parseFloat(this.state.infra);
        let food = parseFloat(this.state.food);
        let incentives = parseFloat(this.state.incentives);
        let family = parseFloat(this.state.family);
        let exp = parseFloat(this.state.exp);
        let share = parseFloat(this.state.share);
        let attrition = parseFloat(this.state.attrition);
        let contract = parseFloat(this.state.contract);


        
        if(isNaN(hygiene) || isNaN(micro) || isNaN(work) || isNaN(salary) || isNaN(age) || isNaN(infra) || isNaN(food) || isNaN(incentives) || isNaN(family) || isNaN(exp) || isNaN(share) || isNaN(attrition) || isNaN(contract)) {

            alert("Please Enter a valid input")
        }

        else
        {

        var features = location + '-' + hygiene + '-' +  micro + '-' +  work + '-' +  salary + '-' +  age + '-' +  infra + '-' +  food + '-' +  incentives + '-' +  family + '-' +  exp + '-' + share + '-' + attrition + '-' + contract;

        console.log(features)

        let jsonData = ProductService.getPredictions(features)
            
        console.log(jsonData);

        this.props.history.push({pathname: '/recommend-results',
        state: { locationScore: jsonData['locationScore'], internalAudit: jsonData['internalAudit'], externalAudit: jsonData['externalAudit'], finScore: jsonData['finScore'], lossScore: jsonData['lossScore'], pastScore: jsonData['pastScore'], isUnderRisk:jsonData['isUnderRisk'] }
        });


        }
        
    }

    goBack() {
        this.props.history.push('/menu');
    }


    render() {
        return (
            <div id = "efficiency">

                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Fill up the following parameters as per your requirements</h3>
                            <div className="card-body">

                                <form>

                                    <div className="form-group">
                                        <label for="typeOfService">Choose Type of Service:</label>
                                        <select id="tos" name="tos" value={this.state.typeOfService} onChange={this.changeLocationHandler}>
                                        <option value="NA">Select</option>
                                        <option value="Asia Pacific">Asia Pacific</option>
                                        <option value="Developed Economies and EU">Developed Economies and EU</option>
                                        <option value="Central and South Eastern Europe and CIS">Central and South Eastern Europe and CIS</option>
                                        <option value="Africa">Africa</option>
                                        <option value="Latin America and Caribbean">Latin America and Caribbean</option>
                                        <option value="Middle East">Middle East</option>
                                        </select>
                                    
                                    <br/>
                                    <br/>

                                    </div>

                                    <div className="form-group">
                                        <label> Hygiene: </label>
                                        <input placeholder="Hygiene Rating ( 1-5 )" name="hygiene" className="form-control"
                                         value={this.state.mtm} onChange={this.changeHygieneHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Micromanagement: </label>
                                        <input placeholder="Micromanagement rating (1-10)" name="micromanagement" className="form-control"
                                         value={this.state.ap} onChange={this.changeMicroHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Working Hours: </label>
                                        <input placeholder="Working Hours (1-24)" name="workingHrs" className="form-control"
                                         value={this.state.sso} onChange={this.changeWorkHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Salary: </label>
                                        <input placeholder="Salary (100-50000)" name="salary" className="form-control"
                                         value={this.state.sbb} onChange={this.changeSalaryHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Age: </label>
                                        <input placeholder="Age (10-70)" name="age" className="form-control"
                                         value={this.state.ha} onChange={this.changeAgeHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Infrastructure: </label>
                                        <input placeholder="Infrastructure (1-10)" name="infra" className="form-control"
                                         value={this.state.ei} onChange={this.changeInfraHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Food Quality: </label>
                                        <input placeholder="Food Quality (1-5)" name="food" className="form-control"
                                         value={this.state.ds} onChange={this.changeFoodHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Incentives: </label>
                                        <input placeholder="Incentives (12-10000)" name="incentives" className="form-control"
                                         value={this.state.as} onChange={this.changeIncentivesHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Family Size: </label>
                                        <input placeholder="Family Size (1-10)" name="family" className="form-control"
                                         value={this.state.qos} onChange={this.changeFamilyHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Experience: </label>
                                        <input placeholder="Experience (1-60)" name="experience" className="form-control"
                                         value={this.state.audit} onChange={this.changeExpHandler}/>
                                    </div>
                            
                                    <div className="form-group">
                                        <label> Share Price: </label>
                                        <input placeholder="Share Price (2-1500)" name="share" className="form-control"
                                         value={this.state.audit} onChange={this.changeShareHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Attrition: </label>
                                        <input placeholder="Attrition Rate (1-40 in percentages)" name="attrition" className="form-control"
                                         value={this.state.audit} onChange={this.changeAttritionHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Contract Workers: </label>
                                        <input placeholder="Contract Workers (10-10000)" name="contract" className="form-control"
                                         value={this.state.audit} onChange={this.changeContractHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.onSubmit}> Submit </button>
                                    <button className="btn btn-danger" style={{margin:"10px"}} onClick={this.goBack.bind(this)}> Main Menu </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default RecommendationComponent;