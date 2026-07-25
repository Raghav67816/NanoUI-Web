# Progress Bar

Progress bar can be used to display progress of an operation in real-time.

Assuming you have the following setup:
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

## Creating a Progress Bar
```cpp
ProgressBar(int w, int h)
```

Progress bar is created using height and width only. The default max value is **100**.

```cpp
ProgressBar prog_bar(120, 40);

void setup(){
    // ...
    root.addChild(&prog_bar);
}
```

## Updating Progress
```cpp
setProgress(int progress);
```

Use this method to set progress of the progress bar.

```cpp
void loop(){
    if(something_happens){
        prog_bar.setProgress(prog_bar.getProgress() + 1);
    }
}
```

## Get the Current Progress
```cpp
int getProgress();
```

Returns an integer value of current progress value.

```cpp
int currentProg = prog_bar.getProgress();
```

## Events

### onValueChanged
```cpp
Event<int> onValueChanged;
```

The event is broadcasted when the progress value of the progress bar changes. The callback function **must accept** an integer as an argument.

For example:

```cpp
void onProgress(int progress){
    Serial.println("Current Progress: %d", progress);
}

void setup(){
    // ...
    prog_bar.onValueChanged.connect(onProgress);
}
```
