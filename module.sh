#!/bin/bash

read -r -p "Enter Module Name [ name must be small case ]: " module
read -r -p "Create Component on module name (y/N) ?" mode
echo $mode
if [ module == "" ]; then
    echo "Empty module name not allowed"
elif [ $mode == "y" ]; then
    ng g module components/$module && ng g c components/$module --module $module
else
    ng g module components/$module
fi
