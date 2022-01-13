import axios from "axios";
const URL = "";

const handleEditInvSubmit = (event) => {
    event.preventDefault();

    axios.put((`${url}/inventory/${inventoryID}/edit`));
    alert("You successfully edited this inventory item!")
}