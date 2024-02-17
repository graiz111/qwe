var express = require('express');
var router = express.Router();

/* GET users listing. */
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
      image:"https://lh3.googleusercontent.com/spp/AE_ITi3VcS4umVcn-RE0YwxJU80io2jZhXxxi2Tc-PZmMupfkS_1DgTrvnQn6w-UHkCYnUApUw7PZ-VA_4LSzOHbFBQSLdNaqjmKebg2Lp6arolOhE2bB3puwZPQKKKsuG8dM8HSYTc4AdPENeXPDusD0Nl5nS_CQ-Njkk4FiTdIEA7TjmT49B0HkCjcXydu2jW5T5KFlRT1af4=s512-rw-pd-pc0x00ffffff",
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
  res.render('admin/viewproducts',{admin:true,products})
});
router.get('/add-product',function(req,res){
 res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{
  
})

module.exports = router;
