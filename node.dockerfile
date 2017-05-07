######### OPTION ONE #########

#LINKING USING LEGACY LINKING:
#BUILD: docker build -f node.dockerfile -t tweetjudo/node .

#START: MongodDB
# docker run -d --name tweetjudodb mongo

#START NODE AND LINK TO MONGODB CONTAINER:
#docker run -d -p 3030:3030 --link tweetjudodb:mongodb tweetjudo/node 

######### OPTION TWO #########

# LINKING USING A NETWORK:
# Build: docker build -f node.dockerfile -t tweetjudo/node .

# OPTION 2: Create a custom bridge network and add containers into it
# STEP ONE: Create local network bridge
# docker network create --driver bridge isolated_network

# STEP TWO: Run mongoDB on isolated network:
# docker run -d --net=isolated_network --name mongodb mongo

# STEP THREE: Run node app:
# docker run -d --net=isolated_network --name tweetjudo -p 3000:3000 tweetjudo/node


FROM node:latest

MAINTAINER Andrew Meiling

ENV NODE_ENV=production
ENV PORT=3000

COPY . /var/www
WORKDIR /var/www

#VOLUME ["/var/www"]

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]



