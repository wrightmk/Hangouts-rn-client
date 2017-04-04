import axios from 'axios';
import {Platform} from 'react-native';

let url;

if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:3000/api';
} else {
  url = 'http://localhost:3000/api'
}

axios.defaults.baseURL = url;

const fakeGroupId = "58e1c9d34dc197929a3c1125";

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }
  async fetchGroupMeetup() {
    try {
      const {data} = await axios.get(this.path);
      return data.meetups;

    } catch (e) {
      console.log(e);
    }
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
