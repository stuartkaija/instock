import React from 'react'
import HeroVanilla from '../../components/HeroVanilla/HeroVanilla';
import EditInvItem from "../../components/EditInvItem/EditInvItem";
import "./EditInvItemPage.scss";

function EditInvItemPage() {
    return (
        <div>
            <HeroVanilla title={"Edit Inventory Item"}/>
            <EditInvItem />
        </div>
    )
}

export default EditInvItemPage
