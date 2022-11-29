import React, { useState, useEffect } from 'react'
import { getAllCats } from '../Managers/CategoryManager'
import Category from './Category'
import { Table } from 'reactstrap';


const CategoryList = () => {
 // initial state of state?
  const [category, setCategory] = useState([])

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
            <Table striped>
          {category.map((cat) => (
              
                
                  <Category key={cat.id} cat={cat} />
               
              ))}
              </Table>
              </div>
        </div>
      </div>
    </>
  );
};

//exporting CategoryList to be used elsewhere
export default CategoryList;