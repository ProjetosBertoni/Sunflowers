const express = require('express')
const router = express.Router()
const session = ("../app")

router.get('/', (req, res) => {
  const session = req.session;
  if(session.token){
    res.render(__dirname + "/../views/user/mapa", {title: "Mapa", layout: "mapa"})
  }else{
    res.redirect("/")
  }
  
  })

module.exports = router;