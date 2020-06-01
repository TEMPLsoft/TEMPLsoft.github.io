FROM ruby:2.7-alpine

RUN apk add --no-cache --update build-base libffi-dev linux-headers

WORKDIR /app

COPY . .

RUN bundle install

EXPOSE 4000

CMD ["jekyll", "serve"]
