import React from 'react'
import HeroVanilla from '../HeroVanilla/HeroVanilla';
import ItemForm from '../ItemForm/ItemForm';

function EditInvItem() {
    return (
        <main className="EditInv__container">
            <HeroVanilla title={"Edit Inventory Item"}/>
            <ItemForm />
        </main>
    )
}

export default EditInvItem;
