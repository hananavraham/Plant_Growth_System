import $ from "jquery";

export function CheckUser(user) {
    return $.ajax({
      url: `https://plantgrowthsystembackend.azurewebsites.net/User/CheckUserCredentials`,
      dataType: 'json',
      type: 'POST',
      data: user,
      async: true,
      success: function(data) {
        console.log('success');
      },
      error: function(xhr, status, err) {
        console.log('error');
      }
    });
  }