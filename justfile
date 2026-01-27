# Homepage ogdowscy.pl

# Deploy to GitHub (push = automatic build)
deploy:
    git add -A
    git commit -m "Update site"
    git push

# Local preview (requires Jekyll)
up:
    bundle exec jekyll serve

# Install Jekyll locally (optional)
setup:
    gem install bundler jekyll
    bundle init
    echo 'gem "jekyll"' >> Gemfile
    echo 'gem "minima"' >> Gemfile
    bundle install

# Status
status:
    git status
