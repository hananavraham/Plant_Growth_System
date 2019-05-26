import {getJsDateFromExcel} from 'excel-date-to-js';
import {CreatePlantsToResearch} from '../Utils/getPlants';
import Noty from 'noty';


export function readExcelFile(researchId,cols,rows){

    var Env_control_address,Growth_control_address,Frequency_of_measurement,Frequency_of_upload = null;

    let intervals = [];
    let fileIndex= null;
    try{
        rows.forEach((element,index)=> {
            fileIndex = index;
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
                        'light_Per_Day': element[3]
                    });
                    break;
            }             
        });
    }

    catch{ 
        new Noty({
            type: 'error',
            layout: 'topRight',
            text: 'There was an error with file ' + fileIndex + ',plant not created!',
            timeout: 3000
        }).show();

        return null;
    }

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
    CreatePlantsToResearch(researchId,plant);

    return true;
}