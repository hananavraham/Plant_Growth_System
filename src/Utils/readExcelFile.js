import {getJsDateFromExcel} from 'excel-date-to-js';
import {CreatePlantsToResearch} from '../Utils/getPlants';


export function readExcelFile(researchId,cols,rows){

    var Env_control_address,Growth_control_address,Frequency_of_measurement,Frequency_of_upload = null;

    let intervals = [];
    rows.forEach((element,index)=> {
        switch(index){
            case 0:
                Env_control_address = element[1];
                break;
            case 1:
                Growth_control_address = element[1];
                break;
            case 2:
                Frequency_of_measurement = element[1];
                break;
            case 3:
                Frequency_of_upload = element[1];
                break;
            case 4:
                break;
            default:
                let date = new Date(getJsDateFromExcel(element[0])).toLocaleDateString();
                element[0] = date;
                intervals.push({
                    'date':element[0],
                    'min_Humidity': element[1],
                    'max_Humidity': element[2],
                    'min_Temperature': element[3],
                    'max_Temperature': element[4],
                    'light_Per_Day': element[5]
                });
                break;
        }   
        // element[0] = (new Date(getJsDateFromExcel(element[0]))).toLocaleDateString();
        

    });
    // dates.forEach(date=>{
    //     date = new Date(date).toLocaleDateString();
    // })
    //console.log('dates:', dates);
    //console.log(intervals);

    var plant = {
        Env_control_address : Env_control_address,
        Growth_control_address : Growth_control_address,
        Frequency_of_measurement : Frequency_of_measurement,
        Frequency_of_upload : Frequency_of_upload,
        Intervals : intervals
    }
    console.log(plant);
    CreatePlantsToResearch(researchId,plant);
}