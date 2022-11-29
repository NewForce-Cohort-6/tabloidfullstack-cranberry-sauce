import React, { useState, useEffect } from 'react'
import { getAllCats } from '../Managers/CategoryManager'
import Category from './Category'
import { Button, Table } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const CategoryList = () => {
  // initial state of state?
  const [category, setCategory] = useState([])
  
const navigate = useNavigate();
const Reroute = () => {
  let path = '/category/add'
  navigate(path);
}
  // setting state
  const getCategories = () => {
    getAllCats().then((allCats) => setCategory(allCats))
  }

  // calling state
  useEffect(() => {
    getCategories()
  }, [])

  //mapping through and returning a list of category names
  //keys are pulling from the same place and set to the id of each category
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card-column">
          <Button style={{ marginBottom: '1.3vw'}} className={'CatFormButton'} onClick={Reroute}>
            New Category
          </Button>
          <br></br>
            <Table>
              <thead className="row justify-content-center">
               <h5>
                 Category Name
                </h5>
                </thead>
                {category.map((cat) => (
                  <Category key={cat.id} cat={cat} />
                  ))}
            </Table>

          </div>
        </div>
      </div>
    </>
  )
}

//exporting CategoryList to be used elsewhere
export default CategoryList
