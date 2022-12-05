import axios from 'axios';
export class ContactServices {
    static SERVER_URL = 'http://localhost:9000';
    static getAllContacts() {
        let dataUrl = `${this.SERVER_URL}/contacts`;
        return axios.get(dataUrl);
    }

    static getContactById(contactId) {
        return axios.get(`${this.SERVER_URL}/contacts/${contactId}`);
    }

    static getGroups() {
        return axios.get(`${this.SERVER_URL}/groups`);
    }

    static getGroup(contact) {
        let groupId = contact.groupId;
        return axios.get(`${this.SERVER_URL}/groups/${groupId}`)
    }
}