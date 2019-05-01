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
    success: function(data) {
    },
    error: function(xhr, status, err) {
      console.error(status, err.toString());
    }.bind(this)
  });
}





