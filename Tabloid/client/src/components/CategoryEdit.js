import { Button } from 'reactstrap'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCatById, editCat } from '../Managers/CategoryManager'

const CategoryEdit = () => {
  //initial state
  const [cat, setCat] = useState({})
  const [tempCat, setTempCat] = useState({})

  // assigned useNav to a const variable
  const navigate = useNavigate()
  
  // getting the id param from the URL.
  const { id } = useParams()

  //useEffect for cat. Grabbing the id of the selected category and setting state. 
  useEffect(() => {
    getCatById(id).then((c) => {
      setCat(c)
    })
  }, [])

  //useEffect for tempCat. Won't break if removed so long as tempCat.name on line 54 is changed to cat.name. 
  useEffect(() => {
    getCatById(id).then((c) => {
      setTempCat(c)
    })
  }, [])

  // edit click/save handler
  const handleSaveEdit = () => {
    const updatedCat = {
      name: cat.name,
      id: cat.id,
    }
    editCat(updatedCat).then((e) => {
      navigate('/category')
    })
  }

  // cancel handler
  const handleCancel = () => {
    navigate('/category')
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card-column">
          <h5>Edit a Category</h5>
          <h6>Selected: {tempCat.name}</h6>
          <fieldset>
            <input
              style={{ width: '130px' }}
              type="text"
              placeholder="Enter a name..."
              onChange={(e) => {
                const copy = { ...cat }
                copy.name = e.target.value
                setCat(copy)
              }}
            />
          </fieldset>
          <Button
            style={{
              appearance: 'none',
              WebkitAppearance: 'none',
              width: '250',
              border: 'solid 1px',
              margin: '3px',
              padding: '6px',
              fontWeight: '600',
            }}
            onClick={(e) => {
              handleSaveEdit()
            }}
          >
            Save
          </Button>
          <Button
            style={{
              appearance: 'none',
              WebkitAppearance: 'none',
              width: '250',
              border: 'solid 1px',
              margin: '3px',
              padding: '6px',
              fontWeight: '600',
            }}
            onClick={(e) => {
              handleCancel()
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CategoryEdit
