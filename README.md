# Anniversary

### 打包编译

执行命令

```shel
npm run build
```

执行完后，会在`build`目录生成打包后的网页，你可以直接把这个打包后的网页当场给你女朋友看。但这就不能远程访问了。

若要远程访问，有两个办法：

1. 部署到远程服务器，不推荐，因为如果要用自己域名的话，需要备案。
2. 部署到Github Pages 或 Coding Pages，推荐，因为域名可不备案，没那么复杂，成本也更低。

### 部署到Github Pages

网上有很多文章讲这个东西，我这里不做过多详细的介绍，简单讲一下流程。

1. 在Github上创建一个空的仓库，以 userName.github.io 作为仓库名。其中 userName 是你的用户名。

2. 将仓库克隆到本地
3. 将刚刚打包编译后的网页（`build`目录下所有文件），复制粘贴到仓库根目录。
4. 用git push 到远程仓库。
5. 在仓库的设置页面，启动Github Pages服务。大概1分钟左右打开 https://userName.github.io 即可。





