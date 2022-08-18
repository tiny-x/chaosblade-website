---
id: blade create disk burn 
---

# 模拟磁盘IO负载实验
本文档介绍如何在物理主机下使用 ChaosBlade 模拟磁盘 IO 负载压力实验。

## 场景介绍
提升磁盘读写 IO 负载，可以指定受影响的目录，也可以通过调整读写的块大小提升 IO 负载，默认值是 10，单位是 M，块的数量固定为 100，即在默认情况下，写会占用 1000M 的磁盘空间，读会固定占用 600M 的空间，因为读操作会先创建一个 600M 的固定大小文件，预计 3s之内，在创建时写 IO 会升高。

验证磁盘 IO 高负载下对系统服务的影响，比如监控告警、服务稳定性等。

运行以下命令可查看模拟磁盘 IO 负载场景的帮助信息：
```
blade create disk burn -h
```

## 参数
|  参数名 |  说明 | 类型    | 值                            |
|  ----  | ---- |-------|------------------------------|
| `path` | 指定提升磁盘 IO 的目录，会作用于其所在的磁盘上 | string | 默认值是 /                       |
| `write` |  触发提升磁盘写 IO 负载 | bool  | 取值范围为`true/false`，默认为`false` |
| `read` | 触发提升磁盘读 IO 负载，会创建 600M 的文件用于读，销毁实验会自动删除 | bool  | 取值范围为`true/false`，默认为`false` |     
| `size` | 块大小 | int   | 默认值是 10 , 单位是MB              |

## 示例

### 创建磁盘读 IO 负载高场景

```bash
blade create disk burn --read --path /home
```
输出如下所示代表实验执行成功，result返回值表示实验的uid，在销毁实验中需要使用
```bash
{"code":200,"success":true,"result":"3383caddcd7c43f7"}
```

执行 iostat 命令可以看到读负载增大，使用率达 99.9%
````bash
Device:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util
vda               0.00     3.00  223.00    2.00 108512.00    20.00   964.73    11.45   50.82   51.19   10.00   4.44  99.90
````

实验生效，接下来销毁实验
````bash
blade destroy 3383caddcd7c43f7
````

### 创建磁盘写 IO 负载高场景
````bash
blade create disk burn --write --path /home
````

执行 iostat 命令可以看到写负载增大，使用率达 90.10%
````bash
Device:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util
vda               0.00    43.00    0.00  260.00     0.00 111572.00   858.25    15.36   59.71    0.00   59.71   3.47  90.10
````

### 同时创建读写 IO 负载场景
````bash
blade create disk burn --read --write
````

通过 iostat 命令可以看到，整个磁盘的 IO 使用率达到了 100%
````bash
Device:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util
vda               0.00    36.00  229.50  252.50 108512.00 107750.00   897.35    30.09   62.70   53.49   71.07   2.07 100.00
````

## 实现原理
使用 dd 命令实现