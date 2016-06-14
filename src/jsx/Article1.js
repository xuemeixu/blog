var Article1=`

### 一、编译内核的基本步骤 ###
#### 1.获取内核源码，解压到/user/src ####
  \`\`\`
# tar xvf linux-3.13.5.tar.xz
# ln -sv /usr/src/linux-3.13.5 /usr/src/linux
\`\`\`
#### 2.配置内核特性(选择一种方法就可以了) ####
//遍历选择所要编译的内核特性
\`\`\` 
#make config
\`\`\`
//配置所有可编译的内核特性
\`\`\`
# make allyesconfig
\`\`\`
//并不是所有的都不编译
\`\`\` 
# make allnoconfig
\`\`\`
//这种就是打开一个文件窗口选择菜单
\`\`\` 
# make menuconfig
\`\`\`
//KDE桌面环境下，并且安装了qt开发环境
\`\`\`
# make kconfig
\`\`\`
//Gnome桌面环境，并且安装gtk开发环境
\`\`\`
# make gconfig
\`\`\`
#### 3.编译内核 ####
\`\`\`
#make [-j #]
\`\`\`
#### 4.安装内核模块 ####
\`\`\`
 #make moudles_install
 \`\`\`
#### 5.安装内核 ####
\`\`\`
#make install
\`\`\`
#### 6.验证并测试 ###
\`\`\` 
#cat /boot/grub/grub.conf
\`\`\`
查看新内核是否已经添加，然后重启系统并测试

`;