#STAGE 0 COMPILE ON NODEJS
FROM node:12 as node

#Define working dir inside the container
WORKDIR /app

#Copy app into container
COPY ./app/ /app/

#Install dependencies in container
#Para que funcione el transpilado de tsc, debe ejecutarse en la misma instancia del npm install como run build
RUN npm install && npm run build 

# Start the application
CMD [ "node", "dist/app.js" ]
