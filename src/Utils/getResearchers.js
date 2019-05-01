import $ from "jquery";

export function getAllResearchers() {
  return $.ajax({
    url: "https://plantgrowthsystembackend.azurewebsites.net/Researcher/",
    dataType: "json", // type of data we're expecting from server
    async: false // make true to avoid waiting for the request to be complete
  });
}

export function getResearcherById(id) {
  return $.ajax({
    url: "https://plantgrowthsystembackend.azurewebsites.net/Researcher/GetResearcherById?id=" + id,
    dataType: "json", // type of data we're expecting from server
    async: false // make true to avoid waiting for the request to be complete
  });
}


export function getResearcherByEmail(email) {
  return $.ajax({
    url: "https://plantgrowthsystembackend.azurewebsites.net/Researcher/GetResearcherByEmail?email=" + email,
    dataType: "json", // type of data we're expecting from server
    async: false // make true to avoid waiting for the request to be complete
  });
}