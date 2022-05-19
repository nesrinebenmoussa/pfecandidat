import axios from "axios";
const qes = async(data) => {
    const response = await axios.post(
        "http://localhost:5000/api/postulations/questionaire"
    );
    console.log(response.data);
    return response.data;
};

const getqes = async(data) => {
    const response = await axios.get(
        "http://localhost:5000/api/postulations/questionaire/" + data
    );
    return response.data;
};
const qesService = {
    getqes,
    qes,
};
export default qesService;