# Birthday-Greeting-Kata

## Technologies
* Back-End Framework: Node.js, Express
* Database: MySQL, Google Cloud Firestore

---
## APIs
Method | URI  |  Response Format
------|-----|-----
POST | /api/birthday-greeting/v1  | JSON
POST | /api/birthday-greeting/v2  | JSON
POST | /api/birthday-greeting/v3  | JSON
POST | /api/birthday-greeting/v4  | JSON
POST | /api/birthday-greeting/v5  | XML

---
## Project Initialization 

### Insert data into MySQL Database
> Create a new table named members in your database
```
CREATE TABLE `members` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `gender` varchar(11) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
```
>Insert member data
```
INSERT INTO `members` (`id`, `first_name`, `last_name`, `gender`, `date_of_birth`, `email`)
VALUES
	(1,'Robert','Yen','Male','1975-08-08','robert.yen@linecorp.com'),
	(2,'Cid','Change','Male','1990-10-10','cid.change@linecorp.com'),
	(3,'Miki','Lai','Female','1993-04-05','miki.lai@linecorp.com'),
	(4,'Sherry','Chen','Female','1993-08-08','sherry.lai@linecorp.com'),
	(5,'Peter','Wang','Male','1950-12-22','peter.wang@linecorp.com');
```

### Clone this project and set configuration
> Install dependencies and start the server

```
npm install
npm start
```
> Create .env file
```
DB = mysql (or firestore)
USERNAME = 
PASSWORD = 
DBNAME = 
HOST = 127.0.0.1
MYSQL_PORT = 
FIRESTORE_COLLECTION = members
```
<b> Modify the "DB" variable in .env file to switch database from MySQL to Firestore without changing any codes</b>

### How to set up Firestore
1. Create a project on Firebase Console
2. Set up Firestore database
3. Generate your private key and store it in your project directory
4. Assign DB = firestore in .env
5. POST `http://localhost:3000/api/birthday-greeting/v4/init-data` via API testing tool such as Postman

## Visit http://localhost:3000

## Response Format

### API v1
> Simple Message
```
[
  {
    title: 'Subject: Happy birthday!',
    content: 'Happy birthday, dear Robert!'
  },
  {
    title: 'Subject: Happy birthday!',
    content: 'Happy birthday, dear Sherry!'
  }
]
```

### API v2
> Tailer-made Message for different gender
```
[
  {
    title: 'Subject: Happy birthday!',
    content: 'Happy birthday, dear Robert!<br/>We offer special discount 20% off for the following items:<br/>White Wine,iPhone X'
  },
  {
    title: 'Subject: Happy birthday!',
    content: 'Happy birthday, dear Sherry!<br/>We offer special discount 50% off for the following items:<br/>Cosmetic,LV Handbags'
  }
]
```

### API v3
> send message with an image to those who aged 49 or above
```
[
  {
    title: 'Subject: Happy birthday!',
    content: 'Happy birthday, dear Peter!<div><img src="/images/cake.png" alt="" width="400px"></div>'
  }
]
```

### API v4
> Simple Message with full name
```
[
  {
    title: 'Subject: Happy birthday!',
    content: 'Happy birthday, dear Yen, Robert!'
  },
  {
    title: 'Subject: Happy birthday!',
    content: 'Happy birthday, dear Chen, Sherry!'
  }
]
```
### API v5
> XML response format
```
<root>
  <row>
    <title>Subject: Happy birthday!</title>
    <content>Happy birthday, dear Robert!</content>
  </row>
  <row>
    <title>Subject: Happy birthday!</title>
    <content>Happy birthday, dear Sherry!</content>
  </row>
</root>
```