async function saveToLocalStorage(event){
        event.preventDefault();
      
        const chooseExpenseAmount=event.target.chooseExpenseAmount.value;
        const chooseDiscription=event.target.chooseDiscription.value;
        const chooseCategory=event.target.chooseCategory.value;   

        const obj={
          chooseExpenseAmount,
          chooseDiscription,
          chooseCategory,
        }
          
          try{
             let res = await axios.post("https://crudcrud.com/api/fd4114886b3242c5b06436ba1bc65487/AppointemntData", obj)
             
            showNewItemsOnScreen(res.data)
            console.log(res)
         
         } catch (error) {
          console.log(error)
         }
        }
     

      window.addEventListener("DOMContentLoaded", async() => {
      
       try {
         let res = await axios.get("https://crudcrud.com/api/fd4114886b3242c5b06436ba1bc65487/AppointemntData")
           for (let i = 0; i < res.data.length; i++) {
           showNewItemsOnScreen(res.data[i])
           }
       } catch (error) {
        console.log(error)
       }
      
    })

      function showNewItemsOnScreen(item) {
        

          document.getElementById('chooseExpenseAmount').value = '';
          document.getElementById('chooseDiscription').value = '';
          document.getElementById('chooseCategory').value = '';

          


          const parentNode = document.getElementById('listOfItems');
          const childHTML = `<li id=${item._id}> ${item.chooseExpenseAmount} - ${item.chooseDiscription} - ${item.chooseCategory}
                                        <button onclick=deleteItem('${item._id}')> Delete Item </button>
                                            <button onclick=editItemDetails('${item.chooseExpenseAmount}','${item.chooseDiscription}','${item.chooseCategory}','${item._id}')> Edit Item </button>
                                     </li>`

          parentNode.innerHTML = parentNode.innerHTML + childHTML;
       
         

     }
        // edit items
        function editItemDetails(chooseExpenseAmount, chooseDiscription, chooseCategory, itemId) {
           
          
           document.getElementById('chooseExpenseAmount').value = chooseExpenseAmount;
           document.getElementById('chooseDiscription').value = chooseDiscription;
           document.getElementById('chooseCategory').value = chooseCategory;
           
            
          deleteItem(itemId);

        }

        //delete Items
      async function deleteItem(itemId){
         
          try {
           
           await axios.delete(`https://crudcrud.com/api/fd4114886b3242c5b06436ba1bc65487/AppointemntData/${itemId}`)

             removeItemsFromScreen(itemId)
            
          
          } catch (error) {
            console.log(error)
          }  

       }
       
        //remove from screen
       function removeItemsFromScreen(itemId) {
          const parentNode = document.getElementById('listOfItems');
          const childNodeToBeDeleted = document.getElementById(itemId);

          parentNode.removeChild(childNodeToBeDeleted)
          
        }  