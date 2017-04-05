import axios from 'axios';
import {Platform} from 'react-native';

let url;

if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:3000/api';
} else {
  url = 'http://localhost:3000/api'
}

axios.defaults.baseURL = url;

const fakeGroupId = "58e45bb95b5b7e0398a88bf8";

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }
  fetchGroupMeetup() {
    return axios.get(this.path).then((data) => {
      return data.meetups;
    });
  }

  async createGroupMeetups(args) {
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
