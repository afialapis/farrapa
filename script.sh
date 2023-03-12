#!/bin/bash
# 

declare -a pkgs=("colors" "numbers" "commons" 
                 "checkers" "collections" "encoding"
                 "iter" "memoize" "objects" 
                 "pretty-console" "promises" 
                 "strings" "url" "index")

for i in "${pkgs[@]}"
do
  if [ $1 = "clean-lib" ]; then
    echo "Clean ./lib on $i"
    rm -rf packages/$i/lib && mkdir packages/$i/lib

  elif [ $1 = "clean-dist" ]; then
    echo "Clean ./dist on $i"
    rm -rf packages/$i/dist && mkdir packages/$i/dist

  elif [ $1 = "lint" ]; then
    echo "Linting $i"
    npx xeira lint --filter=./packages/$i --folder=./src   
    
  elif [ $1 = "lib" ]; then
    echo "Transpiling $i"
    npx xeira transpile --filter=./packages/$i --source_index=./src/index.mjs
    
  elif [ $1 = "dist" ]; then
    echo "Bundling $i"
    npx xeira bundle --filter=./packages/$i --source_index=./src/index.mjs
    
  elif [ $1 = "version" ]; then
    echo "Versioning on $i to $2"
    npx xeira version --filter=./packages/$i --number=$2
    
  elif [ $1 = "publish" ]; then
    echo "Publishing $i"
    pnpm publish --filter ./packages/$i
  fi

done







