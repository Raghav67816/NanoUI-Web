# NanoFS

NanoFS lets you interact with your devices seamlessly. It allows you to compile, upload and explore your assets during runtime so you don't have to manage your assets as raw C style arrays.

::: warning
NanoFS is only compatible with ESP32 based devices. Support for wider boards will be provided once development of file manager is complete and stable.
:::
## Starting NanoFS Shell

```bash
chmod +x /path/to/nanofs # allow to execute
./path/to/nanofs
```

You will see the following output:

```bash
Upload, create and manage assets
nanofs>
```

## Connect To Your Board
```bash
connect /port/name
```

for example:
```bash
connect /dev/ttyACM0
```

## List Partition & Set Flash Address

Before you uploading assets, you must specify flash address. 

Flash address depends on your board. So, you must list your partitions and check your SPISSF flash address. 


- List Partititions
```bash
nanofs> list_parts
```

Output will look like:
```
```

In this case the flash address TEMP_FLASH_ADDRESS

- Set Flash Address
```bash
nanofs> set_flash_addr TEMP_FLASH_ADDRESS
```


## Pack & Upload Assets

You cannot upload your assets as it is. They must be converted into a .bin file which the micro controller can understand.

```bash
nanofs> upload_pack /folder/containing/your/assets
```

::: info

You must specify flash address. It depends on your board. So, you must first call `list_parts` to list partitions and get the offset address of your SPIFSS partition

:::
