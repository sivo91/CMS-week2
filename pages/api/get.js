/* 
import fs from 'fs'; 
import path from 'path';

// all subdir and data name file
const dataDir = path.join( process.cwd(), "JSON1" );


export default function handler(req, res) {
  
  const filepath = path.join( dataDir, "id.json" );
  const jsondata = fs.readFileSync( filepath, "utf8" );
  const jsonObj = JSON.parse( jsondata );

  

  res.status(200).json( jsonObj );
} */