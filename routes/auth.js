const express = require("express");
const router = express.Router();
const User = require("../models/user")



const login = async (req, res) => {
    try {
      console.log("working..")
      const { mail , password } = req.body
      const user = await User.findOne({mail})
      if(!user) {
        return res.status(401).json({
            message: "Login not successful",
            error: "User not found",
          })
      }
      if ( password != user.password){
        return res.status(401).json({
            message: "Login not successful",
            error: "User not found",
          })

      }
      
      else {
        return res.status(200).json({
          message: "Login successful",
          user,
        })
      }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      })
    }
  }

  module.exports = login
