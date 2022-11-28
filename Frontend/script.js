async function saveToLocalStorage(event){
        event.preventDefault();
      
        const chooseExpenseAmount=event.target.chooseExpenseAmount.value;
        const chooseDescription=event.target.chooseDescription.value;
        const chooseCategory=event.target.chooseCategory.value;   

        const obj = {
          chooseExpenseAmount,
          chooseDescription,
          chooseCategory
        }
          
          try{
            
             const res = await axios.post('http://localhost:5000/expense/add-expense', obj)
             
             showNewItemsOnScreen(res.data)
          
         
         } 
         catch (error) {
          console.log(error)
         }
   }
     

      window.addEventListener("DOMContentLoaded", async() => {
      
       try {
         const res = await axios.get('http://localhost:5000/expense/get-expense')
           for (var i = 0; i < res.data.length; i++) {
           showNewItemsOnScreen(res.data[i])
           }
       } catch (error) {
        console.log(error)
       }
      
    })
  

      function showNewItemsOnScreen(item) {
        

          document.getElementById('chooseExpenseAmount').value = '';
          document.getElementById('chooseDescription').value = '';
          document.getElementById('chooseCategory').value = '';

          


          const parentNode = document.getElementById('listOfItems');
          const childHTML = `<li id=${item.id}> ${item.chooseExpenseAmount} - ${item.chooseDescription} - ${item.chooseCategory}
                                        <button onclick=deleteItem('${item.id}')> Delete Item </button>
                                            <button onclick=editItemDetails('${item.chooseExpenseAmount}','${item.chooseDescription}','${item.chooseCategory}','${item.id}')> Edit Item </button>
                                     </li>`

          parentNode.innerHTML = parentNode.innerHTML + childHTML;
       
         

     }
        // edit items
        function editItemDetails(chooseExpenseAmount,chooseDescription,chooseCategory,itemId) {
            
           document.getElementById('chooseExpenseAmount').value = chooseExpenseAmount;
           document.getElementById('chooseDescription').value = chooseDescription;
           document.getElementById('chooseCategory').value = chooseCategory;
           
          
          deleteItem(itemId);

        }

        //delete Items
      async function deleteItem(itemId){
         
          try {
           
          await axios.delete(`http://localhost:5000/expense/delete-expense/${itemId}`)

             removeItemsFromScreen(itemId)
            
          
          } 
          catch (error) {
            console.log(error)
          }  

       }
       
        //remove from screen
       function removeItemsFromScreen(itemId) {
          const parentNode = document.getElementById('listOfItems');
          const childNodeToBeDeleted = document.getElementById(itemId);

          parentNode.removeChild(childNodeToBeDeleted)
          
        }  