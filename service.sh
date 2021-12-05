#!/bin/bash
read -r -p "Enter Service Name : " service
echo $service
ng g s services/$service/$service
