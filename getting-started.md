# Getting Started

NanoUI works with any build system, but we recommend using PlatformIO.

## Installation

 - Clone the repository
 ```bash
 git clone https://github.com/Raghav67816/NanoUI.git
 ```

 - Navigate to **lib/**
 ```bash
 cd NanoUI/lib
 ```

 - Move NanoUI folder to your **project's lib/** folder.
 ```bash
 mv ./NanoUI <dest>
 ```

## Your First NanoUI App

In this example we will be making a Hello, World! example in which pressing a GPIO button will change Hello, World to Hello, NanoUI

With NanoUI you can use any display driver. For example **SSD1306**, **SSH1106** etc. 
If the framework does not support your display driver. See *Custom Display Interfaces*

For this app we will be using a **480x320 SPI TFT Display** with [LovyanGFX](https://github.com/lovyan03/LovyanGFX)

::: info
Initialising the display driver is the responsibility of the developer. If you do not initialise the display yourself the application will not work.
:::

 - Initialising the display driver
 ```cpp
#include <LovyanGFX.hpp>

#define TFT_SCK  4
#define TFT_MOSI 6
#define TFT_MISO 5
#define TFT_CS   0

class LGFX : public lgfx::LGFX_Device 
{
    lgfx::Panel_ILI9488 _panel;
    lgfx::Bus_SPI _bus;

public:
    LGFX() 
    {
        // Bus configuration block
        {
            auto cfg = _bus.config();

            cfg.spi_host   = SPI2_HOST;
            cfg.spi_mode   = 0;
            cfg.freq_write = 40000000;
            cfg.freq_read  = 16000000;
            cfg.pin_sclk   = TFT_SCK;
            cfg.pin_mosi   = TFT_MOSI;
            cfg.pin_miso   = TFT_MISO;
            cfg.pin_dc     = 2;

            _bus.config(cfg);
            _panel.setBus(&_bus);
        }

        // Panel configuration block
        {
            auto cfg = _panel.config();

            cfg.pin_cs        = TFT_CS;
            cfg.pin_rst       = 10;
            cfg.pin_busy      = -1;
            cfg.memory_width  = 320;
            cfg.memory_height = 480;
            cfg.panel_width   = 320;
            cfg.panel_height  = 480;
            cfg.offset_x      = 0;
            cfg.offset_y      = 0;
            cfg.invert        = false;
            cfg.rgb_order     = true;

            _panel.config(cfg);
        }

        setPanel(&_panel);
    }
};

 ```

 - Interface display with the framework
 ```cpp
#include "core/Color.h"
#include "core/App.h"
#include "core/Theme.h"
#include "core/Graphics.h"
#include "core/TFTDisplay.h"

LGFX tft;
TFTDisplay tft_display(480, 320, &tft);

Graphics gfx(&tft_display, &size_policy);

void setup(){
    tft.init();
    tft.setRotation(1);
}

 ```

 - Define colors and theme
```cpp
Color white = {255, 255, 255};
Color black = {0, 0, 0};

Color bg = {30, 30, 30};
Color surface = {45, 45, 48};
Color blue = {0, 120, 215};
Color cyan = {0, 170, 255};
Color grey = {120, 120, 120};

SizeMetrics size_policy = {
    .button_height = 60,
    .title_bar_height = 48,
    .font_scale_factor = 2,
};

Theme appTheme = {
    .background = bg,
    .foreground = white,
    .primary = blue,
    .secondary = surface,
    .accent = cyan,
    .selection = {70, 110, 180},
    .selectionText = white,
    .disabled = grey};
```

 - Create your UI
```cpp

#include "widgets/Screen.h"
#include "widgets/Button.h"
#include "widgets/Label.h"
#include "widgets/ProgressBar.h"

#include "layouts/Column.h"

#include "input/GPIOButton.h>

App app(
    tft_display,
    gfx,
    appTheme,
    size_policy
);

Screen home_screen(
    &tft_display,
    "# SYSTEM STATUS #");

Column root(
    0, size_policy.title_bar_height,
    tft_display.getWidth(),
    tft_display.getHeight() - size_policy.title_bar_height);

GPIOButton btn(2); // Any GPIO pin you want to use.
Label label(120, 40, "Hello, World!");
```

 - Add widgets to layout
```cpp

void onBtnPressed(){
    label.setText("Hello, NanoUI");
}

void setup(){
    Serial.begin(115200);
    app.addScreen(home_screen);

    root.setSpacing(10);
    root.setContentSpacing(10);

    root.addChild(&label);
    root.addChild(&btn);
    home_screen.addChild(&root);

    btn.onPress.connect(onBtnPressed);

    app.goTo(
        tft_display,
        home_screen,
        gfx);
}
```

 - Start the rendering loop

```cpp
void loop(){

    bool btnPressed = btn.pressed();

    app.renderApp(gfx);
}
```

## Running Your First App

 Connect your micro-controller and make sure that your circuit is correct.
 
 ### PlatformIO
 - Press **Ctrl+Shit+P** and type **Upload & Monitor**
 - Wait for code to compile and upload.

 ### Arduino IDE
 Upload your code as usual


## Supported Hardware

The framework uses **std** for **vector**. If your board does not support vector the framework will not work.
In case of displays, we support the following displays by default.

 - Adafruit OLED Display (SSD1306)
 - Adafruit OLED Display (SSH1106)
 - TFT SPI Display

If your display is not listed above, see **Custom Display Interfaces**. It's super easy to get your display working with the framework.
