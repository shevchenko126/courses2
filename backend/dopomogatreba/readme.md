******* http://127.0.0.1:8000/adverts/viewAdverts/ ********
GET 
attribute = 'title'
object type = string
description = Select all data in advert table

******* http://127.0.0.1:8000/adverts/api/ ********
GET
attribute = 'title'
object type = string
description = get all Adverts data for current user (filter = Autor = Current User. Used Token autorization)

******* http://127.0.0.1:8000/adverts/api/<pk> ********
GET
attribute = <pk> = record ID in Adverts table
object type = integer
description = get <pk> Adverts row

******* http://127.0.0.1:8000/adverts/api/ ********
GET
attribute = token
object type = string
description = get user token for current user from the header