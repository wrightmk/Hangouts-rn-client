import axios from 'axios';
import {Platform} from 'react-native';

let url;

// if (Platform.OS !== 'ios') {
//   url = 'http://192.168.1.12:3000/api'; //codecore
//   // url = 'http://10.0.0.22/api'; //codecore netgear
//   // url = 'http://192.168.0.11:3000/api'; //home
// } else {
//   url = 'http://localhost:3000/api'
// }

url = 'https://hangouts15.herokuapp.com/api';

axios.defaults.baseURL = url;

// const fakeGroupId = "58eush1c9d34dc197929a3c1125"; <-- wtf is this!!!
// const fakeGroupId = "58e1c9d34dc197929a3c1125";
const fakeGroupId = "58f036cb99cf980011feafa1"; // <--- use this one until user auth endpoints set up on front end

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }
  // fetchGroupMeetup() {
  //   return axios.get(this.path).then((data) => {
  //     return data.data.meetups;
  //   });
  // }
  //same as below

  async fetchGroupMeetup() {
  try {
    const {data} = await axios.get(this.path);
    return data.meetups;

  } catch (e) {
    console.log(e);
  }
}

  async createGroupMeetups(args) {
    console.log('createGroupMeetups inside function', args);
    try {
      const res = await axios.post(`${this.path}/new`, {...args})
      console.log(res);
      return res;
    } catch(e) {
      console.log(e);;
    }
  }
}

export {MeetupApi};
