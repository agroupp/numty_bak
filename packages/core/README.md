# NumTy Core

The fundamental package for scientific computing with Typescript or Javascript.

How many times you was looking at your code and thought: *"I can do it in one line of code on Python using NumPy*. The main purpose of this package is to create something similar on Typescript.

Of course, Typescript code cannot be a performance competitor to Python library that actually is a C compiled code. However, Typescript is the language we use for many things and it needs data processing. Much functionality was implemented by JavaScript engine as native code in `Array`, `Math` and `String` classes and it doesn’t make sense to re-implement it. Therefore, at first step I took the fundamental routines of [NumPy](https://numpy.org/), that not overlapping with native code and implemented it as operators in the package.

Package architecture designed to be highly tree shakable, you don’t need to import the whole library, just take what you actually need only. Because library wrote in Typescript, it shows good support to vanilla JavaScript projects and to [Angular](https://angular.io/), [React](https://reactjs.org/) or [NestJS](https://nestjs.com/) in the same way.

In the Core package you will find basic array creation and manipulation operators and mathematical functions.

## Credits
* [NumPy](https://numpy.org/) for the greatest inspiration
* [sentdex ](https://www.youtube.com/c/sentdex) for great lessons on Python and data analysis.

## Installing
```shell
npm install --save @numty/core
```

## Running unit tests

Run `nx test core` to execute the unit tests via [Jest](https://jestjs.io).
