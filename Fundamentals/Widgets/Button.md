# Button

The button is one of the most fundamental component of every UI framework. 

::: warning
The button in our framework does not support touch input at this point due to unavailability of testing hardware. You can use GPIOButton in combination with Button.

However, be assured that touch support will be added to the framework soon.
Track progress on touch input [here](https://github.com/Raghav67816/NanoUI/issues/6)
:::

The button supports text label only. Icon support will be added soon.

Assuming you have the following setup

```cpp
// ....

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

## Creating A Button

```cpp
Button(int w, int h, char* labelText)
```

This creates a button with provided arguments. If your text size is more than the size of the button itself. The size of the button will be changed. 

```cpp
Button btn(120, 40, "Click Me");

void setup(){
    // ...

    // Root is the root layout i.e either column or row
    root.addChild(&btn);
}
```

## Changing Button Text

```cpp
setText(char* text)
```

You can use setText to change the text of the button. We will cover an example down this page.

::: warning
When using **setText()** method, if the text width is more than the width of the button, the text will overflow instead of clipping. This bug has been noticed and is being worked on. Please track the status [here](https://github.com/Raghav67816/NanoUI/issues/9)
:::


## Events

### onPress<>
```cpp
Event<> onPress;
```

This event is called when the button is pressed/triggered. The callback broadcasts no data. So you can use a simple function to bind a function to the event.

For example, we will create an on and off button.

```cpp
bool isOn = false;

// ...
Button btn(120, 40, "Off");

void onButtonPressed(){
    if(isOn){
        btn.setText("Off");
        isOn = false;
    }
    else{
        btn.setText("On");
        isOn = true;
    }
}

void setup(){
    // ... 

    btn.onPress.connect(onButtonPressed);
}
```
