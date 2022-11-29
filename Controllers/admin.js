 
const Expense = require('../Model/expenses');

 exports.getExpenses = ( async (req,res,next)=>{
  
  try{
    const data = await Expense.findAll()
    res.json(data);

  }
  catch(err){
   console.log(err);
  }

 })

 exports.postExpenses = ( async (req,res,next) =>{

  try{
   // console.log(req.body);
    const chooseExpenseAmount = req.body.chooseExpenseAmount;
    const chooseDescription = req.body.chooseDescription;
    const chooseCategory = req.body.chooseCategory;
    

      const data = await Expense.create({
        chooseExpenseAmount: chooseExpenseAmount,
        chooseDescription: chooseDescription,
        chooseCategory: chooseCategory
    })

    res.json(data);
  }
  catch(err){
    console.log(err);
  }
 });

 exports.deleteExpenses = ( async (req,res,next) => {
  try {
    const expId = req.params.id
    const data = await Expense.destroy({ where: {id: expId}});
      res.sendStatus(200);
     
     // res.destroy();   is direct user in try carch 
    } 
     catch(err){
        console.log(err);
     }
});

  