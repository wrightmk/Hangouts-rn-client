import axios from 'axios';
import {Platform} from 'react-native';

let url;
//
// if (Platform.OS !== 'ios') {
  // url = 'http://192.168.1.23:3000/api'; //codecore
  // url = 'http://192.168.1.23:19000/api'; //exp default
//   // url = 'http://10.0.0.22/api'; //codecore netgear
  url = 'http://192.168.0.13:3000/api'; //home

// } else {
  // url = 'http://localhost:3000/api'
// }
// sdasds
// url = 'https://hangouts15.herokuapp.com/api';
//
axios.defaults.baseURL = url;
//
// const fakeGroupId = "58f036cb99cf980011feafa1"; // heroku one<--- use this one until user auth endpoints set up on front end
const fakeGroupId = '59124f0e67c8de1134646232' //localhost id
class HangoutApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }//

  async fetchGroupHangout() {
  try {
    const {data} = await axios.get(this.path);
    return data.meetups;

  } catch (e) {
    console.log(e);
  }
}

  async createGroupHangouts(args) {
    console.log('createGroupHangouts inside function', args);
    try {
      const res = await axios.post(`${this.path}/new`, {...args})
      console.log(res);
      return res;
    } catch(e) {
      console.log(e);;
    }
  }
}

export {HangoutApi};
