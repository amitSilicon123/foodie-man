FROM node:20.19.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

# 👇 YAHAN dono run honge (container start ke time)
CMD ["sh", "-c", "npx prisma generate && node dist/src/main.js"]