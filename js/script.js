"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

const a = prompt("Какой последний фильм вы посмотрели?", ""),
    b = prompt("На сколько оцените его ?", ""),
    c = prompt("Какой последний фильм вы посмотрели?", ""),
    d = prompt("На сколько оцените его ?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)


