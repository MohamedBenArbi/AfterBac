const express = require('express')
const mongoose = require('mongoose')
const Uni = require('../models/uniModel')


const getuni = (async(req,res)=>{
    const uni  = await Uni.find()

    res.json(uni)
})


module.exports ={
    getuni
}