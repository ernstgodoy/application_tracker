# Base image
FROM ruby:2.6.5

# Install dependencies
RUN apt-get update -qq && apt-get install -y \
    build-essential \
    libpq-dev \
    curl

# Set working directory
WORKDIR /app

# Install Ruby gems
COPY Gemfile Gemfile.lock /app/
RUN gem install bundler -v 2.1.4
RUN bundle _2.1.4_ install

# Install Node.js (includes npm)
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Install Node modules for React frontend
COPY package.json yarn.lock /app/
RUN npm install -g yarn
RUN yarn install --check-files

# Copy the rest of the application code
COPY . /app

# Precompile assets for production
RUN bundle exec rails webpacker:install
RUN bundle exec rails assets:precompile

# Expose the Rails server port
EXPOSE 3000

# Start the server
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
