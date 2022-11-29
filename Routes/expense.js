const express = require('express');

const path=require('path');

const expenseController = require('../Controllers/admin')

const router=express.Router();

router.post('/add-expense', expenseController.postExpenses)

router.get('/get-expense', expenseController.getExpenses )

router.delete('/delete-expense/:id', expenseController.deleteExpenses)

module.exports=router;