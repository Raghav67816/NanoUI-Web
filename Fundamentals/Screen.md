# Screen

A **Screen** is the root widget in a widget tree and is the top-most widget. By default the screen displays title bar, and has no layout. However, it is strongly recommended to use **Layouts either Column or Row**

The **App** instance can have multiple screens. Atleast 1 screen must be added to app. Further, we assume that you have an instance of App, Display and Graphics.

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

## Creating a screen

```cpp
Screen(Display* display, const char* title)
```

This creates a display object. You must add this screen using **addScreen()** method. Otherwise, you won't be able to access the screen.

Example

```cpp
Screen homeScreen(&display, "Home");

void setup(){
    app.addScreen(homeScreen);
}
```
::: warning
**App::addScreen()** must be called within **void setup()**. If called outside, it will fail
:::

## Changing Screen Title

```cpp
setTitle(Graphics *gfx, const char* title)
```

This changes the title of screen.

For example

```cpp
void loop(){
    if(something_happens){
        homeScreen.setTitle(gfx, "New Title");
    }
}
```

For more details. Please see API Reference For Screen
