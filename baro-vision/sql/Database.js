import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('baro.db');

export const initDb = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tr => {
            tr.executeSql('CREATE TABLE IF NOT EXISTS baro (id INTEGER PRIMARY KEY NOT NULL,firstName TEXT NOT NULL,lastName TEXT NOT NULL,lat REAL,lng REAL);'
                , [],
                (trx, resultSet) => { resolve(resultSet) },
                (trx, err) => { reject(err) });
        });
    });
}

export const insertData=(firstName,lastName,lat,lng)=>{
    return new Promise((resolve, reject) => {
        db.transaction(tr => {
            tr.executeSql('INSERT INTO baro(firstName,lastName,lat,lng) VALUES(?,?,?,?);'
                , [firstName,lastName,lat,lng],
                (trx, resultSet) => { resolve(resultSet) },
                (trx, err) => { reject(err) });
        });
    });
}

export const fetchBaroData=()=>{
    return new Promise((resolve, reject) => {
        db.transaction(tr => {
            tr.executeSql('SELECT * FROM baro;'
                , [],
                (trx, resultSet) => { resolve(resultSet) },
                (trx, err) => { reject(err) });
        });
    });
}