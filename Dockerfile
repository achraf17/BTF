FROM node:12.14.1

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./

# Copying source files
COPY . .

# Building app
RUN npm i

# Expose port
EXPOSE 3000
ENV PORT 3000

# Running the app
CMD [ "npm", "start" ]