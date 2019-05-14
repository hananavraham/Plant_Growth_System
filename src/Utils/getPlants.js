import $ from "jquery";

export function getAllPlants() {
  return $.ajax({
    url: "https://plantgrowthsystembackend.azurewebsites.net/Research/",
    dataType: "json", // type of data we're expecting from server
    async: false // make true to avoid waiting for the request to be complete
  });
}

export function GetPlantById(id) {
  return $.ajax({
    url: "https://plantgrowthsystembackend.azurewebsites.net/Plant/GetPlantById?id=" + id,
    dataType: "json", // type of data we're expecting from server
    async: false // make true to avoid waiting for the request to be complete
  });
}

export function CreateNewPlant(plant) {
  return $.ajax({
    url: "https://plantgrowthsystembackend.azurewebsites.net/Plant/Create",
    dataType: 'json',
    type: 'POST',
    data: plant,
    success: function(data) {
    },
    error: function(xhr, status, err) {
      console.error(status, err.toString());
    }.bind(this)
  });
}

export function CreatePlantsToResearch(researchId,plant) {
  return $.ajax({
    url: "https://plantgrowthsystembackend.azurewebsites.net/Plant/createPlantAndAddControlPlan",
    dataType: 'json',
    type: 'POST',
    data: {researchId, plant},
    success: function(data) {
    },
    error: function(xhr, status, err) {
      console.error(status, err.toString());
    }.bind(this)
  });
}
