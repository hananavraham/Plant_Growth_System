import $ from "jquery";
import {axios} from 'axios';

export function CheckUser(user) {
    return $.ajax({
      url: `https://plantgrowthsystembackend.azurewebsites.net/User/CheckUserCredentials`,
      dataType: 'json',
      type: 'POST',
      data: user,
      success: function(data) {
      },
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  }