---
id: blade create mem load
---

# 模拟内存占用实验
内存占用

## 场景介绍
指定内存占用，注意，此场景触发内存占用满，即使指定了 --timeout 参数，也可能出现通过 blade 工具无法恢复的情况，可通过重启机器解决！！！推荐指定内存百分比！

由于目前内存大小计算通过 memory.stat 等文件计算，所以和 free 命令计算不一致，同 top 命令一致，验证时请使用 top 命令查看内存使用。后续会针对内存占用场景进行优化。


## 参数
|  参数名 | 说明                                     | 类型    | 值                           |
|  ----  |----------------------------------------|-------|-----------------------------|
| `mem-percent` | 内存使用率              | int | 取值范围为`0-100`                |
| `mode` | 内存占用模式，有 ram 和 cache 两种，例如 --mode ram。ram 采用代码实现，可控制占用速率，优先推荐此模式；cache 是通过挂载tmpfs实现；| string  | 取值范围为`cache/ram`，默认为`cache` |
| `reserve` | 保留内存的大小，单位是MB，如果 mem-percent 参数存在，则优先使用 mem-percent 参数 | int  | 100                         |     
| `rate` | 内存占用速率，仅在 --mode ram 时生效  | int   | 默认值是 10 , 单位是MB             |

## 案例
### 执行内存占用 50%
在执行命令之前，先使用 top 命令查看内存使用信息，如下，总内存大小是 8G，使用了 7.6%
````bash
KiB Mem :  7.6/8010196  
````

执行内存占用 50%
````bash
blade c mem load --mode ram --mem-percent 50
````

查看内存使用
````bash
KiB Mem : 50.0/8010196 
````

执行内存占用 100%
````bash
KiB Mem : 99.6/8010196
````

### 保留 200M 内存，总内存大小 1G
````bash
blade c mem load --mode ram --reserve 200 --rate 100
````

查看内存使用
````bash
KiB Mem :  1014744 total,    78368 free,   663660 used,   272716 buff/cache
KiB Swap:        0 total,        0 free,        0 used.   209652 avail Mem
KiB Mem : 79.7/1014744  [||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||                   ]
````

## 实现原理
ram 模式采用代码申请内存实现
cache 模式采用 dd、mount 命令实现，挂载 tmpfs 并且进行文件填充