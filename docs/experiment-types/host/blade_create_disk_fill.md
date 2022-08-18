---
id: blade create disk fill 
---

# 模拟磁盘填充实验
磁盘填充混沌实验

## 场景介绍
模拟磁盘填充，可以指定填充的目录和填充大小。

验证磁盘满下对系统服务的影响，比如监控告警、服务稳定性等。

## 参数
|  参数名 | 说明                                                                    | 类型     | 值                          |
|  ----  |-----------------------------------------------------------------------|--------|----------------------------|
| `path` | 指定填充的目录                                                               | string | 默认值是 /                     |
| `size` | 需要填充的文件大小，如果 size、percent、reserve 参数都存在，优先级是 percent > reserve > size | int    | 100      | 
| `reserve` | 保留磁盘大小，如果 size、percent、reserve 参数都存在，优先级是 percent > reserve > size    | int    | 100     | 
| `percent` | 指定磁盘使用率，如果 size、percent、reserve 参数都存在，优先级是 percent > reserve > size   | int    | 取值范围为``0-100`              |
| `retain-handle` | 是否保留填充                                                                | bool   | 取值为`true/false`，默认为`falase` |
      
## 案例
### 执行磁盘填充，填充 40G
执行实验之前，先看下 /home 所在磁盘的大小
````bash
df -h /home

Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1        40G  4.0G   34G  11% /
````

执行磁盘填充，填充 40G，即达到磁盘满的效果（可用34G）
````bash
blade create disk fill --path /home --size 40000
````

返回结果
````bash
{"code":200,"success":true,"result":"7a3d53b0e91680d9"}
````

查看磁盘大小
````bash
df -h /home

Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1        40G   40G     0 100% /
````

销毁实验
````bash
blade destroy 7a3d53b0e91680d9
````


### 执行按百分比填充磁盘，并且保留填充磁盘的文件句柄

执行前查看磁盘大小
````bash
df -h /home

Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1        40G  4.0G   34G  11% /
````

执行演练
````bash
blade c disk fill --path /home --percent 80 --retain-handle
````

返回结果
````bash
{"code":200,"success":true,"result":"f1fa65e70950d0eb"}
````

查看磁盘大小
````bash
df -h
/dev/vda1        40G   30G  8.1G  79% /
````

查看文件句柄
````bash
lsof /home/chaos_filldisk.log.dat
COMMAND     PID USER   FD   TYPE DEVICE    SIZE/OFF   NODE NAME
chaos_fil 19297 root    3r   REG  253,1 17697865728 394174 /home/chaos_filldisk.log.dat
````

### 执行保留固定大小实验场景
````bash
blade c disk fill --path /home --reserve 1024
````

查看磁盘大小
````bash
df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1        40G   37G  1.1G  98% /
````

## 实验原理
使用 fallocate、dd 命令实现