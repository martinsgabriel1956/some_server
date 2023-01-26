FROM node:16-alpine

WORKDIR /usr/src

COPY package*.json ./
# generated prisma files

# COPY prisma ./prisma/
# COPY tsconfig.json file
COPY tsconfig.json ./
# COPY ENV variable
COPY .env ./
RUN npm install

COPY . .

RUN npx prisma generate

# Run and expose the server on port 3000
EXPOSE 3333

# A command to start the server
CMD npm run dev