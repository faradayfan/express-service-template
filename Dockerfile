FROM node:12
WORKDIR /code
COPY . /code
RUN npm ci
EXPOSE 3000
ENTRYPOINT [ "npm",  "start" ]