import $ from "jquery";

export function getAllResearches() {
  return $.ajax({
    url: "https://plantgrowthsystembackend.azurewebsites.net/Research/",
    dataType: "json", // type of data we're expecting from server
    async: false // make true to avoid waiting for the request to be complete
  });
}

export function getResearchByID(id) {
  return $.ajax({
    url: "https://plantgrowthsystembackend.azurewebsites.net/Research/GetResearchById?id=" + id,
    dataType: "json", // type of data we're expecting from server
    async: false // make true to avoid waiting for the request to be complete
  });
}

export function GetResearchesByOwner(ownerId) {
  return $.ajax({
    url: "https://plantgrowthsystembackend.azurewebsites.net/Research/GetResearchesByOwner?ownerId=" + ownerId,
    dataType: "json", // type of data we're expecting from server
    async: false // make true to avoid waiting for the request to be complete
  });
}

export function CreateNewResearch(research) {
  return $.ajax({
    url: "https://plantgrowthsystembackend.azurewebsites.net/Research/Create",
    dataType: 'json',
    type: 'POST',
    data: research,
    async: false,
    success: function(data) {
    },
    error: function(xhr, status, err) {
      console.error(status, err.toString());
    }.bind(this)
  });
}

export function GetResearchPlants(researchId) {
  return $.ajax({
    url: `https://plantgrowthsystembackend.azurewebsites.net/Research/GetResearchPlants?researchId=${researchId}`,
    dataType: "json", // type of data we're expecting from server
    async: false // make true to avoid waiting for the request to be complete
  });
}


export function AddPlantToResearch(researchId,plantId) {
  return $.ajax({
    url: `https://plantgrowthsystembackend.azurewebsites.net/Research/AddPlantToResearch?researchId=${researchId}&plantId=${plantId}`,
    dataType: "json", // type of data we're expecting from server
    async: false // make true to avoid waiting for the request to be complete
  });
}







