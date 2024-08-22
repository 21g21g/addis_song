FROM node:20-alpine
#This sets the working directory inside the Docker container to /app
WORKDIR /app
#This command copies the package.json file from your local machine (where the Docker build is being executed) to the /app directory inside the Docker container.
COPY package.json .
#his command runs npm install in the /app directory of the Docker container, installing all the dependencies specified in the package.json file.
RUN npm install
#This command copies all files and directories from your local machine's project directory to the /app directory inside the Docker container.
COPY . .
ENV PORT=5000
#: This tells Docker that the container will listen on port 5000 at runtime. 
EXPOSE 5000
# CMD ["npm", "start"]: This specifies the command to run when the container starts. It runs npm start, which should start your Node.js application.
CMD ["npm", "start"]