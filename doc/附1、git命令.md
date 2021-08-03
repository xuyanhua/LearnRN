git显示中文
`git config --global core.quotepath false`

git上传的文件中有要忽略的文件
```shell
git rm -r --cache .
git add .
git commit -m 'xxx'
```