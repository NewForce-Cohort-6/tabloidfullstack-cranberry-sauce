import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllCats, getCatById } from '../Managers/CategoryManager'
import Category from './Category'
import Button from 'reactstrap/lib/Button';

const CategoryList = () => {
 // initial state
  const [category, setCategory] = useState([])

  // setting state
  const getCategories = () => {
    getAllCats().then((allCats) => setCategory(allCats))
  }
  // assigned useNav to a const variable
  const navigate = useNavigate();

  // calling state 
  useEffect(() => {
    getCategories()
  }, [])

  // edit handler. gets the id from the database and then navigates to that url.
  const handleEdit = (id) => {
    getCatById(id).then((e) => {navigate(`/category/edit/${id}`)})
}
  //mapping through and returning a list of category names
  //keys are pulling from the same place and set to the id of each category
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
            <div className="card-column">

          {category.map((cat) => (
              <tr>
                <td >
                  <Category key={cat.id} cat={cat} />
                 
                    
                </td>
                <Button style={{appearance: 'none', WebkitAppearance: 'none', width: '250', border: 'solid 1px', margin: '3px', padding: '6px', fontWeight: '600' }} onClick={(event) => {
                  handleEdit(cat.id)}}>Edit</Button>
                  </tr>
              ))}
              </div>
        </div>
      </div>
    </>
  );
};


export default CategoryList;