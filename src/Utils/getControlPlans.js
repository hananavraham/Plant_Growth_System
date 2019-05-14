import $ from "jquery";


export function getControlPlanByPlantId(id) {
    return $.ajax({
      url: "https://plantgrowthsystembackend.azurewebsites.net/ControlPlan/GetControlPlanByPlantId?plantId=" + id,
      dataType: "json", // type of data we're expecting from server
      async: false // make true to avoid waiting for the request to be complete
    });
  }
