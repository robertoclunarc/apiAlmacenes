#STAGE 0 COMPILE ON NODEJS
FROM node:12 as node

#Define working dir inside the container
WORKDIR /app

#Copy app into container
COPY ./app/ /app/

#Install dependencies in container
RUN npm install
# RUN npm install -g typescript
RUN npm run build

#Default arguments
ARG MYSQL_PORT=3306
ARG MYSQL_DB=intranet
ARG MYSQL_SERVER=10.10.0.7
ARG MYSQL_USER=root
ARG MYSQL_PW=.4C3r04dm1n
ARG DEPLOYMENT=dev
ARG PORT=3004
ARG SECRET_KEY=abc123

#Enviroment variables 
ENV MYSQL_SERVER=$MYSQL_SERVER
ENV MYSQL_PORT=$MYSQL_PORT
ENV MYSQL_DB=$MYSQL_DB
ENV MYSQL_USER=$MYSQL_USER
ENV MYSQL_PW=$MYSQL_PW
ENV DEPLOYMENT=$DEPLOYMENT
ENV PORT=$PORT
ENV SECRET_KEY=$SECRET_KEY

#Expose a port
EXPOSE $PORT 

# Start the application
CMD [ "node", "dist/app.js" ]
