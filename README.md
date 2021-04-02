# Minesweeper

Simple implementation of Classic Minesweeper game  with React

Try it [online](https://oleggrishechkin.github.io/minesweeper)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can use `start`, `build`, `test`, `eject` and also `serve` scripts.

- Styling powered by `styled-components`
- State management powered by `react-tagged-state`

Project uses `prettier` with custom `eslint` configuration.

# Guide

1) To start the game you should left-click on any cell
2) Left-click to open a cell
3) Right-click to toggle a cell flag
4) Double-click on an opened cell to open all cells near
5) Smile button reset the game
6) You can enter you own settings for a board (width/height/bombCount). If you already started the game, you should press a Smile button

# Implementation

I use canvas for board rendering.
It's faster up to 10x than pure React solution.
