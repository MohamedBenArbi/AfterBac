const express = require('express')
const mongoose = require('mongoose')
const Uni = require('../models/uniModel')
const asyncHandler = require('express-async-handler')

const getuni = asyncHandler(async(req,res)=>{
    const uni  = await Uni.find({"Bac":req.params.section})
    res.json(uni)
})


const getUniByScore = asyncHandler(async(req,res)=>{
    const uni  = await Uni.find({"ScoreDernierOriente2021": req.params.score})
    res.json(uni)
})



module.exports ={
    getuni
}