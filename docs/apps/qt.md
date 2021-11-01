---
id: qt    
title: PyQt Support
sidebar_label: PyQt
slug: /apps/qt
---

### Convert Any PyQt app 

Using your own app as part of the framework is remarkably easy. You can simply
add our MagicBar Widget to your PyQt app and specify which functions you want to
to provide for and voila: We handle dicovery of the server, authentication for
users that use your app, and registering of this functions.

```python

import sys
from PyQt5.QtCore import QSize, Qt
from PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton
from arkitekt.qt.widgets import MagicBar

# Subclass QMainWindow to customize your application's main window
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("My App")

        self.magic_bar = MagicBar()
        self.magic_bar.agent.register(self.open_dialog)

        self.setFixedSize(QSize(400, 300))

        # Set the central widget of the Window.
        self.setCentralWidget(self.magic_bar)


    def open_dialog(alert_message: str):
        """Open Dialog

        Opens a Dialog for the user to connect to
        
        Args:
            alert_message(str): The altert message
        """
        q = QtWidgets.QDialog(alert_message)
        q.show()


app = QApplication(sys.argv)

window = MainWindow()
window.show()

app.exec()

```


```python
import numpy as np
import xarray as xr
# What exists on your end already
def count_cells(image: np.array) -> np.array:
    # Do all of the tasks you want to do
    # to analaysis
    return image


# What the Wrapper looks like

def count_cells_xarray(image: xr.DataArray) -> xr.DataArray:
    np_image = np.array(image.data)
    out_np_image = count_cells(np_image)
    return xr.DataArray(np_image, dims=["x","y","z","t","c"])

```