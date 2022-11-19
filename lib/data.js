//import fs from 'fs';
//import path from 'path';
import got from 'got'
//const axios = require('axios').default;


//const dataDir2 = path.join(process.cwd(), 'JSON1');

//const dataURL = 'https://dev-cms-srjc-fall.pantheonsite.io/wp-json/twentytwentyone-child/v1/latest-posts/1'

const dataURL = 'https://dev-cms-srjc-fall.pantheonsite.io/wp-json/twentytwentyone-child/v1/special';

 
export async function getAllIds() {

  //const filePath = path.join(dataDir2, 'id.json');
  //const jsonString = fs.readFileSync(filePath, 'utf8');
  //const jsonObj = JSON.parse(jsonString);

  let jsonString;
  try {
    jsonString = await got(dataURL)
    //console.log(jsonString.body)
  } catch (error) {
    jsonString.body = []
    console.log(error)
  }

   const jsonObj = JSON.parse(jsonString.body)

  return jsonObj.map(item => {
    return {
      params: {
        id: item.ID.toString()
      }
    }
  }); 
} 

  // dava info do link
 export async function getSortedList() {

  //const filePath = path.join(dataDir2, 'content.json');
  //const jsonString = fs.readFileSync(filePath, 'utf8');
  //const jsonObj = JSON.parse(jsonString);

  let jsonString;
  try {
    jsonString = await got(dataURL)
    console.log(jsonString.body)
  } catch (error) {
    jsonString.body = []
    console.log(error)
  }

  const jsonObj = JSON.parse(jsonString.body)
 
  return jsonObj.map(item => {
    return {
      id: item.ID.toString(),
      title: item.post_title,
      //img: item.img
      
    }
  });
} 

// dava data novej stranke
export async function getData(id) {

  //const filePath = path.join(dataDir2, 'content.json');
  //const jsonString = fs.readFileSync(filePath, 'utf8');
  //const jsonObj = JSON.parse(jsonString);
  // find object value in array that has matching id

  let jsonString;
  try {
    jsonString = await got(dataURL)
    //console.log(jsonString.body)
  } catch (error) {
    jsonString.body = []
    console.log(error)
  }

  const jsonObj = JSON.parse(jsonString.body);

  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === id;
  });


  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }

  return objReturned;
}