import React from 'react'
import HeroVanilla from '../../components/HeroVanilla/HeroVanilla';
import ItemForm from "../../components/ItemForm/ItemForm";
import "./EditInvItemPage.scss";

function EditInvItemPage(props) {
    return (
        <div>
            <HeroVanilla title={"Edit Inventory Item"}/>
            <ItemForm inventoryId={props.match.params.inventoryId}/>
        </div>
    )
}

export default EditInvItemPage
