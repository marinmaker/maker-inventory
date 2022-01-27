import axios from "axios";

export default {
    //API calls to db kits
    //get all kits
    getKits: function(){
        return axios.get("/api/kits");
    },
    //get kit with given id
    getKit: function(id){
        return axios.get("/api/kits/" +id);
    },
    //delete kits
    deleteKits: function(id)  {
        return axios.delete("/api/kits/" +id);
    },
    //save new kit
    saveKit: function(kitData){
        return axios.post("/api/kits", kitData);
    },
    //update a kit
    updateKit: function(id, kitData){
        return axios.put("/api/kits/" +id, kitData);
    }
};