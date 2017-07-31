---
layout: post
title:  "Extend Vim with Plugins"
date:   2017-07-31
desc: ""
keywords: "vim,blog,easy"
categories: [Config]
tags: [Vim]
icon: icon-html
---

## 0. `pathogen.vim` - a plugin manager
### 0.1. Install pathogen.vim
```
mkdir -p ~/.vim/autoload ~/.vim/bundle && \
curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim
```
### 0.2. Edit `~/.vimrc`
  `execute pathogen#infect()`

>Then basically, for any plugin that you would like to include in vim, simply git clone it to the `~/.vim/bundle` folder. The following are three popular ones.

## 1. NERDTree

### 1.1. Install NERDTree
  `git clone https://github.com/scrooloose/nerdtree.git ~/.vim/bundle/nerdtree`

### 1.2. Edit` ~/.vimrc`
  (skip this if using pathogen) `set runtimepath^=~/.vim/bundle/nerdtree`
  
  `map <C-n> :NERDTreeToggle<CR>`
  
### 1.3. Reload vim
  run `:helptags ~/.vim/bundle/nerdtree/doc/`, and check out `:help NERDTree.txt`

## 2. ctrlp (for fuzzy file search)

### 2.1. Clone the plugin
  `git clone https://github.com/kien/ctrlp.vim.git ~/.vim/bundle/ctrlp.vim`

### 2.2. Edit `~/.vimrc`
(skip this if using pathogen) `set runtimepath^=~/.vim/bundle/ctrlp.vim`

### 2.3. Reload vim
  run `:helptags ~/.vim/bundle/ctrlp.vim/doc/`, and check out `:help ctrlp.txt`

## 3. supertab
  `git clone git@github.com:ervandew/supertab.git ~/.vim/bundle/supertab`
