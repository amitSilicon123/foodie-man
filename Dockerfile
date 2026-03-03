FROM node:20.19.0

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npx prisma generate && npm run start:prod"]