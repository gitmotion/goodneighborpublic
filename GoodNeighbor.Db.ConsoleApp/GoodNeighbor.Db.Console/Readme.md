

# Connectiong to DB with .Net

You should use the Console applicaiton in this project (Open Sabio.Db.ConsoleApp.sln) 
and write code using the included projects to call all the procs in the `/SqlInit/Sabio_Address.sql` file.

The instructors will help you with the first couple of procs and then you finish the rest on your own using the resources avaiable to you.

> :star: Be sure to get instructor help to run the `/SqlInit/Sabio_Address.sql` file.

Use the following Page to help you.

- [Working .Net Services Classes](http://code.sabio.la:8080/tfs/SabioCollection/Content-General/_wiki/wikis/Content-General.wiki?wikiVersion=GBwikiMaster&pagePath=%2FDATABASE%2FSQL%20Server%20101%2FAdo%20Wrapper%20(DataProvider%20Help))

  - [Videos](https://training.sabio.la/courses/c/lectures/8571457) to go with Data Accecss via Service Classes

- [How to Use DataProvider (ExecuteCmd)](http://code.sabio.la:8080/tfs/SabioCollection/Content-General/_wiki/wikis/Content-General.wiki?wikiVersion=GBwikiMaster&pagePath=%2FDATABASE%2FSQL%20Server%20101%2FAdo%20Wrapper%20(DataProvider%20Help)%2FHow%20to%20Use%20DataProvider%20(ExecuteCmd))

- [How to Use DataProvider (ExecuteNonQuery)](http://code.sabio.la:8080/tfs/SabioCollection/Content-General/_wiki/wikis/Content-General.wiki?wikiVersion=GBwikiMaster&pagePath=%2FDATABASE%2FSQL%20Server%20101%2FAdo%20Wrapper%20(DataProvider%20Help)%2FHow%20to%20Use%20DataProvider%20(ExecuteNonQuery))

---

# Background on Models


## Models

Models serve to carry data from one place to an other.

In many applications, Models are used in a variety of ways including partial updates, inserts and deletes.

In our application we will create a more refined architecture and create 4 different types of Models.

These four types will be named according to their utility or purpose

### Request Models
- These models will be used to pass data into a Controller or Service method 

- These models will participate in Model Binding where data from an in-comming request will be mapped to the properties of the given Model. 

- They will be used to perform updates, inserts or deletes. More often than not, they will contain partial list of all the properties of the entities that they represent.

> Located in `Sabio.Models.Requests`

> :key: They are **PASSED* into Service Method calls or Controller Methods

### Response Models
- These Models will be the objects passed **out** of Api Controllers. 

- Often times these Models will be used to wrap Domain models as they are passed out of the web application.

- All Response Models must inherit from BaseResponse.

> Located in `Sabio.Models.Responses`

> :key: They are returned from Controllers

### Domain Models
- These models will be used to most accurately represent the entities we store in our database. 
- When returned, they should be fully hydrated with the data in the database.
- These files are located here at the following path. You should inspect the files there for more information.

> Located in `Sabio.Models.Domain`

> :key: They are returned from Service Method calls