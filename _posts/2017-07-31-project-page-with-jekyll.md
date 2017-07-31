---
layout: post
title:  "Steps to Create Github Page for a Project with Jekyll"
date:   2017-07-31
desc: "Steps to make a project site with Jekyll"
keywords: "Jekyll,gh-pages,website,blog,easy"
categories: [Config]
tags: [Jekyll]
icon: icon-html
---

### Background

This tutorial assumes that there is a project `my_project` already in existence on your local computer and on Github at [https://github.com/username/my_project](https://github.com/username/my_project). It also assumes that the Jekyll environment has been put in place on your computer or please check my previous post for details.


### (Optional) Download one of the Jekyll themes

1. Choose one of your favorite Jekyll themes at [Jekyll Themes](http://jekyllthemes.org) or a similar site

2. `> git clone git://.....git` which creates a new folder say `theme`.

3. Typically, you don't care about the history of the theme project.

	`> cd theme; rm -rf .git`

### Create a new github page for your project
1. `> cd my_project`

	`> git checkout --orphan gh-pages` Pay attention to the name of the branch.

2. Remove everything.

	`> git rm -rf .`
	
3. (Optional) Copy everything from the `theme` folder into your project on the newly creately `gh-pages` branch.

	`> cp -r ../theme/. .`

4. If `Gemfile` is missing, copy one from [jekyllrb.com](https://jekyllrb.com/) and run `> bundle install`.

  
5. Launch the Jekyll server on your local computer

	`> bundle exec jekyll serve`

	Now go to [http://localhost:4000](http://localhost:4000) on your browswer to test it.

6. Work on your site. **This is where you should concentrate on the contents of your project's web page**.


### Publish the github page for your project

1. Simply push the `gh-pages` branch to Github

	`> git add -A`
	
	`> git commit -m "some message"`
	
	`> git push origin gh-pages`
	
2. Go to [https://username.github.io/my_project](https://username.github.io/my_project) on your browswer to test it.

> Reference: [Karl Broman's blog](http://kbroman.org/simple_site)
