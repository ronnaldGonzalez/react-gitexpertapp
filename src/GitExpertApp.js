import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';

function GitExpertApp(props) {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories([...categories,'Casador X']);
    //     console.log(categories);
    // }
    return (
        <>
            <h2>Git Expert App</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => (
                        <GitGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

GitExpertApp.propTypes = {

}

export default GitExpertApp

