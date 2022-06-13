'use strict'

const persons = [
    {
        firstName : 'Ivan',
        lastName : 'Ius',
        email : 'ius6130@gmail.com',
        password : '12345',
        gender : 'Men',
    },
    {
        firstName : 'Anton',
        lastName : 'Potapenko',
        email : 'potap_enko@gmail.com',
        password : '54321',
        gender : 'Man',
    },
    {
        firstName : 'Michael',
        lastName : 'Mykolenko',
        email : 'mchl_mklnk@gmail.com',
        password : '67890',
        gender : 'Man',
    }
]


if(!localStorage.getItem('allPersons')){
    localStorage.setItem('allPersons',JSON.stringify(persons));
}

if(!localStorage.getItem('currentUserPosition')){
    localStorage.setItem('currentUserPosition',-1);
}