printf '\e[35m Staring the build process\n'

# Execute yarn build in react-app folder
printf '\e[34m Building react-app\n'
printf '\e[34m $cd react-app && yarn build && cd ..'

cd react-app && yarn build && cd ..

# Check if last command executed successfully
if [ $? -eq 0 ]
then
  printf '\e[32m `yarn build` succeeded \n'
else
  printf '\e[31m `yarn build` failed \n'
fi

# Copy build contents for chrome
printf '\e[34m Copying build contents for chrome extension \n'
printf '\e[34m $cp -r react-app/build/* chrome/ && rm chrome/service-worker.js \n'

cp -r react-app/build/* chrome/ && rm chrome/service-worker.js

# Check if last command executed successfully
if [ $? -eq 0 ]
then
  printf '\e[32m Chrome extension generated successfully \n'
else
  printf '\e[31m Chrome extenstion generation failed \n'
fi

# Copy build contents for firefox
printf '\e[34m Copying build contents for firefox add-on \n'
printf '\e[34m $cp -r react-app/build/* firefox/ && rm firefox/service-worker.js \n'

cp -r react-app/build/* firefox/ && rm firefox/service-worker.js

# Check if last command executed successfully
if [ $? -eq 0 ]
then
  printf '\e[32m Firefox add-on generated successfully \n'
else
  printf '\e[31m Firefox add-on generation failed \n'
fi
