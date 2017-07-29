---
layout: post
title:  "How to Start with Jekyll"
date:   2017-07-29
desc: "Steps to get started with Jekyll"
keywords: "Jekyll,gh-pages,website,blog,easy"
categories: [Config]
tags: [Jekyll]
icon: icon-html
---

1. `gem install jekyll bundler`

2. If this is for a new site, do the following
  
    `jekyll new my-awesome-site; cd my-awesome-site`

    otherwise

    `cd my-awesome-site`

3. Add the following to the top of `Gemfile` if necessary:

    `source 'https://rubygems.org'`

4. `bundle install`
  
    If it fails due to nokogiri, run the following
    
    ```
    gem uninstall nokogiri 
    xcode-select --install 
    gem install nokogiri 
    bundle install
    ```

5. `cd source/_sass; bourbon install` which installs bourbon. 

6. `bundle exec jekyll serve`

	Now browse to `http://localhost:4000`

> Jekyll
>>- reads the configuration file `_config.yml`
>>- reads all the other files then it checks for YAML front matter
>>- uses the Liquid templating language to process the content and templates
>>- reads the assets
>>- generates the final output to the `_site` folder
