import React, {useContext, useState, useEffect} from "react";
import {Redirect} from "react-router-dom";

import API from "../../utils/API";

import {KitContext} from "../../context/KitContext";
import {KitQuantityContext} from "../../context/KitQuantityContext";
import {UsernameContext} from "../../context/UsernameContext";
import { UserIdContext } from "../../context/UserIdContext";

import Table from "../../Components/Table";

const Items = () => {
    // const [redirect, setRedirect] = useState(null);

    // const [formData, setFormData] = useState({
    //     title: "",
    //     quantity:"",
    // });

    // const {kits, setKits} = useContext()

    return(
        <Table />
    );
};

export default Items;