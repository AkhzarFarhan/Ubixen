# usage: make git m="your comment"
git:
	git add .
	git commit -m "$m"
	git push