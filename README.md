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

### Preview

- Search By Content
 ![alt text](https://github.com/latifis/etc/blob/main/simple-node-postgresql/search-by-content.png?raw=true)
 - Search Without Content
 ![alt text](https://github.com/latifis/etc/blob/main/simple-node-postgresql/search-without-content.png?raw=true)
 - With Special Character
 ![alt text](https://github.com/latifis/etc/blob/main/simple-node-postgresql/with-special-character.png?raw=true)
 - Excess Character
 ![alt text](https://github.com/latifis/etc/blob/main/simple-node-postgresql/excess-character.png?raw=true)
 - Header Requirements
 ![alt text](https://github.com/latifis/etc/blob/main/simple-node-postgresql/header-requirements.png?raw=true)

### API Documentation
To view documentation for using this program, you can go to the [documentation](https://documenter.getpostman.com/view/19724773/2s9Yywddwf), or at the following link:
```
https://documenter.getpostman.com/view/19724773/2s9Yywddwf
```