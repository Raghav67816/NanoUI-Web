# ListWidget

ListWidget allows you to create menus and options. The ListWidget is a set ListItem. Please do note that ListItem can only work with ListWidget

Assuming you the following setup:
```cpp
Graphics gfx(&tft_display, &size_policy);

YOUR_DISPLAY display(
    480,
    320,
    &YOUR_DISPLAY_DRIVER_OBJECT);

App app(
    display,
    gfx,
    app_theme,
    size_policy
);
```

## Creating a ListWidget
```cpp

// ...

ListItem(const char* text);
ListWidget(int x, int y, int w, int h);
```

::: info
If you are using a Layout i.e Column or Row as parent of the ListWidget you can enter int x and int y as anything. It will be handled by the layout internally. However, if you are not using a layout as the root of the ListWidget you must specify correct cordinates on your own.
:::

Use the above method to create a ListWidget

```cpp
ListItem item_a("Item A");
ListItem item_b("Item B");
ListItem item_c("Item C");
ListItem item_d("Item D");

/*
for this example a layout will be the root of the list widget so geometery will be handled internally by the layout.
*/
ListWidget listWidget(0, 0, 0, 0);

void setup(){
    // ... 

    listWidget.addItem(&item_a);
    listWidget.addItem(&item_b);
    listWidget.addItem(&item_c);
    listWidget.addItem(&item_d);
}
```

Duplicate ListItem(s) are automatically ignored.

## Get Focused Item
```
ListItem* getFocusedItem();
```

Returns a ListItem that is currently focused.

```cpp
void loop(){
    if(something_happens){
        ListItem* active = listWidget.getFocusedItem();
        Serial.print("Focused Item Text: ");
        Serial.println(active->_text);
    };
}
```

By default the first item in the ListWidget is focused.


## Get Focused Item Index
```cpp
int getFocusedItemIndex();
```

Returns index of currently focused item.

```cpp
void loop(){
    if(something_happens){
        int index = listWidget.getFocusedItemIndex();
        Serial.println("Focused Item Index: %d");
    }
}
```

## Events
```cpp
Event<ListItem*> onCurrentItemChanged
```

This event is broadcasted when active item is changed. The callback function must accept a pointer to ListItem as an argument.

For example

```cpp
void onItemChanged(ListItem* item){
    Serial.println(item->_text);
}

void setup(){
    // ...

    listWidget.onCurrentItemChanged.connect(onItemChanged);
}
```
