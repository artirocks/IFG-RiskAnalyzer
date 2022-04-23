import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://8d99-35-185-16-76.ngrok.io";

class ProductService {

    getPredictions(modelInputs) {
        let x = modelInputs
        let json = {'locationScore':18.1,
                    'internalAudit':14.54,
                    'externalAudit':10.11,
                    'finScore':28.22,
                    'lossScore':32.522,
                    'pastScore':19.89,
                    'isUnderRisk':"Yes"}
        
        return json;

        //return axios.get(PRODUCT_API_BASE_URL + '/modelpredictions/' + modelInputs);
    }

}

export default new ProductService()