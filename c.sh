git add .

msg="update program `date`"
if [ $# -eq 1 ]
    then msg="$1"
fi

git commit -m "$msg"

git push origin master