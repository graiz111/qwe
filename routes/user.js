var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"iphone 11",
      category:"phone",
      description:"ram : 128gb,rom :10gb",
      image:"https://www.digitaltrends.com/wp-content/uploads/2019/09/iphone11-review.jpg?resize=625%2C417&p=1",
      price:"60000.00"
    },
    {
      name:"iphone 12",
      category:"phone",
      description:"ram : 128gb,rom :10gb",
      image:"https://ik.imagekit.io/3dqckpw4d/upload/iphone_12___Purple1657182290iphone-12-purple.png",
      price:"70000.00"
    },
    {
      name:"iphone 13",
      category:"phone",
      description:"ram : 128gb,rom :10gb",
      image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS_ehKGqneoP4dZBdrZ2EA_WI1UTcTjgV6hlONTuX3SkR_YXlbXFI6Eb-SG8TIneX-1PTylP-v07wTyiCIteT8K7CAuN7_OV7VcFSwxOw&usqp=CAc",
      price:"90000.00"
    },
    {
      name:"iphone 14",
      category:"phone",
      description:"ram : 128gb,rom :10gb",
      image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=90&crop=false",
      price:"110000.00"
    }
  ]
  res.render('index', {products});
  next()
});

module.exports = router;
