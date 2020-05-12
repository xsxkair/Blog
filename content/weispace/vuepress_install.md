# vuepress 安装

## 安装

* 确认**nodejs**版本，版本大于8才可使用！

  `node -v`

* 安装**yarn**

  `node install -g yarn`

* 修改**yarn**镜像为淘宝镜像

  ``` javascript
  #查看当前镜像
  yarn config get registry
  
  #设置为淘宝镜像
  yarn config set registry https://registry.npm.taobao.org/
  ```

* 安装 **vuepress**

  `yarn global add vuepress`

* 进入到写作目录，新建**README.md**，随便写点东西

* 构建静态文件

  `vuepress build .`

* 此时即可打开终端显示的网址访问网站

## 问题

### 1，*yarn*全局安装*vuepress*后在终端无法使用：找不到内部或外部

```
#查看yarn安装目录，命令如下，将路径添加到环境变量中
yarn global bin
D:\Program Files\nodejs\node_global\bin
```

### 2，*vuepress*命令无法使用：文件名，目录名或卷标语法不正确

```
#原因：yarn目录和安装的模块不在相同的硬盘分区里导致的

#查看yarn命令目录
yarn global bin
D:\Program Files\nodejs\node_global\bin

#查看yarn全局安装位置（此处已修改，默认在C盘用户目录内）
yarn global dir
D:\Program Files\yarn\global

#修改方法：修改yarn默认全局安装位置
yarn config set global-folder "D:\Program Files\yarn\global"
yarn config set cache-folder "D:\Program Files\yarn\cache"
```

