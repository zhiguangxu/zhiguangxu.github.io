---
layout: post
title:  "Steps to Create a Personal Github Page with Jekyll"
date:   2017-07-29
desc: "Steps to get started with Jekyll"
keywords: "Jekyll,gh-pages,website,blog,easy"
categories: [Config]
tags: [Jekyll]
icon: icon-html
---

### Background

This tutorial assumes essential tools such as git, gem, and bundle, etc. have all been installed and configured on your computer.
 
Some quick facts about Jekyll:
> reads the configuration file `_config.yml`
> 
> reads all the other files then it checks for YAML front matter
> 
> uses the Liquid templating language to process the content and templates
> 
> reads the assets
> 
> generates the final output to the `_site` folder


### Install Jekyll 
1. `> gem install jekyll bundler`
2. `> bundle install`

### (Optional) Download one of the Jekyll themes
1. Choose one of your favorite Jekyll themes at [Jekyll Themes](http://jekyllthemes.org) or a similar site
2. `> git clone git://.....git`

### Create a new personal github page
1. `> jekyll new username.github.io; cd username.github.io`

2. (Optional) Delete everything except for `Gemfile` and `Gemfile.lock` and copy everything over from the Jekyll theme folder created in the previous step.

	If your Jekyll theme needs additonal gems as its dependencies

	* Add the following to the top of `Gemfile` if necessary:
	
		`source 'https://rubygems.org'`
		
	* Update `Gemfile` according to your Jekyll theme's website
	
	* `> bundle install`
  
   If it still fails due to for example `nokogiri`, run the following
    
    ```
    > gem uninstall nokogiri
    > xcode-select --install 
    > gem install nokogiri 
    > bundle install
    ```
   	 
	Sometimes, chances are `bourbon` is not in place. So install it:
	
    `> cd source/_sass; bourbon install`
  
3. Launch the Jekyll server on your local computer

	`> bundle exec jekyll serve`

	Now go to [http://localhost:4000](http://localhost:4000) on your browswer to test it.

4. Work on your site. **This is where you should concentrate on the contents of your personal web site**.

### Publish your personal github page
	
1. Create a new repository on Github by the name of `username.github.io` and copy its address

2. `> git init`

3. Link your local repository on the local computer and the remote one on Github

	`> git remote add origin git://....git`
	
	`> git remote -v` to verify.

4. Stage, commit, and push the `master` branch to Github

	`> git add -A`
	
	`> git commit -m "some message"`
	
	`> git push origin master`
	
5. Finally, go to [https://username.github.io](https://username.github.io) on your browswer to test it.

> Reference: [Karl Broman's blog](http://kbroman.org/simple_site)
