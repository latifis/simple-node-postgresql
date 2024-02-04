# Simple Node PostgreSQL
This is a project for creating APIs with.
 - Get car brand name data
 - The `p_search` parameter may or may not be filled in, if it is filled in it will display the data according to the parameter, and if it is not filled in it will display all the data in the table
 - The request protected with `Special Characters` so that if a `Special Character` is found in the request, it will display `Invalid Input`
 - The request must be given a `MAX Char guard` of `10 characters`, so that if a `number of chars >10` is found in the request, it will display `Invalid Input`
## Getting Started
You can download this repo or clone using below command. (folder-name will be project folder in which you want to start your project).
```
git clone https://github.com/latifis/simple-node-postgresql.git <folder-name>
```
or from **Download Zip**
```
https://github.com/latifis/simple-node-postgresql 
```

### Installing And Running
1. Instalation

To install dependencies, run the following command in your terminal or command prompt:
```
> npm install
```
2. Setup Database

After installing dependencies, you need to configure the database settings. Open the `config` file and configure it according to the database you are using:
```
app/config/dbConfig.js
```
3. Running The Program

Once dependencies are installed and the database is configured, start the application with the following command:
```
> node server.js
```