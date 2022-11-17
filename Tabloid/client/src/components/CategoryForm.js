import React, { useState } from 'react'
import { addCat } from '../Managers/CategoryManager'
import { useNavigate } from 'react-router-dom'
import "../styles/CategoryForm.css"

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
      <section>
        <article className="CatFormArticle">
          <input
            type="text"
            className={'CatFormInput'}
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
          <button className={'CatFormButton'} onClick={saveNewCat}>
            Save
          </button>
        </article>
      </section>
    </>
  )
}

export default CategoryForm
