# Label

Label is another fundamental UI component in every UI component.


Assuming you have following setup

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

## Creating a Label
```cpp
Label(int w, int h, const char* text);
```

This creates a label with given width and height. If your text width is more than the width of the label. The width of the label with the changed automatically.

For example:

```cpp
Label label(120, 40, "Hello, World!");
```


## Changing Label Text
```cpp
setText(char* text)
```

Using this method you can change the text of label.

```cpp
void loop(){
    if(something_happens){
        label.setText("Label Text Changed");
    }
}
```

## Changing Color of Label

```cpp
setColor(Color color);
```

Use this method to change the color of the label.

For example:

```cpp
Color newColor = {255, 0, 0}; // red color

void loop(){
    if(something_happens){
        label.setText(newColor);
    }
}
```
