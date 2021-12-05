#!/bin/bash
read -r -p "Enter component name : " component
read -r -p "Enter module name : " module

if [ $module == "app" ]; then
    ng g c components/$component --module $module
else
    ng g c components/$module/$component --module $module
fi
