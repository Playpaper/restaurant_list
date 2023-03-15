// Include express modules
const express = require('express')
const app = express()

// Include express-handlebars
const exphbs = require('express-handlebars')

// Include JSON
const restaurantList = require('./restaurant.json')

// Define server related variables
const port = 3000

// Restaurant category
const restaurant_category = getRestaurantCategory(restaurantList.results)

// Setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// the folder of static files
app.use(express.static('public'))

// Handle request and response
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.filter((item) => item.id === Number(req.params.restaurant_id))

  res.render('show', { restaurant: restaurant[0] })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim()
  // filtered "name" or "category" which is included keyword or "rating" which is >= keyword
  const restaurants = restaurantList.results.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()) || item.category.includes(keyword) || item.rating >= Number(keyword))

  res.render('index', { 
    restaurants: restaurants, 
    keyword: keyword,
    category: restaurant_category
  })
})

// Start and listen the server
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})

function getRestaurantCategory(list) {
  const aryCategory = []

  list.forEach(item => {
    if (!aryCategory.includes(item.category)){
      aryCategory.push(item.category)
    }
  })
  return aryCategory
}