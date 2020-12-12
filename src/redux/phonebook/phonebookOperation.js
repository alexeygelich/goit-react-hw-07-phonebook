import axios from "axios";
import phonebookActions from "./phonebookActions";

axios.defaults.baseURL = "http://localhost:2000";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(phonebookActions.addContactRequest());

  axios
    .post("/contacts", { name, number })
    .then(({ data }) => dispatch(phonebookActions.addContactSuccess(data)))
    .catch((error) => dispatch(phonebookActions.addContactError(error)));
};

const fetchContact = () => (dispatch) => {
  dispatch(phonebookActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(phonebookActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(phonebookActions.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(phonebookActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(phonebookActions.removeContactSuccess(id)))
    .catch((error) => dispatch(phonebookActions.removeContactError(error)));
};

export default {
  addContact,
  fetchContact,
  removeContact,
};
