import React, { useState } from 'react'
import { addCat } from '../Managers/CategoryManager'
import { useNavigate } from 'react-router-dom'
import "../styles/CategoryForm.css"
import Button from 'reactstrap/lib/Button'

const CategoryForm = () => {
  const [name, setName] = useState({
    name: '',
  })
  const navigate = useNavigate()
  const saveNewCat = () => {
    const newCat = {
      name: name,
    }

    addCat(newCat).then((p) => {
      navigate('/category')
    })
  }

  return (
    <>
        <article className="CatFormArticle">
        <h3 style={{justifyContent: 'center', marginLeft: '1.3vw'}}>Create Category</h3>
          <input
            type="text"
            className={'CatFormInput'}
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
            />
          <Button className={'CatFormButton'} onClick={saveNewCat}>
            Save
          </Button>
        </article>
    </>
  )
}

export default CategoryForm
