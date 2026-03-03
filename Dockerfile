FROM node:20.19.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npx prisma generate && node dist/src/main.js"]