const properties = require('./nightwatch.props')
module.exports = {
  "src_folders": ["./scripts"],
  "page_objects_path": ["pageObjects", "pageObjects/focusAndExecute"],
  "selenium": {
    "start_process": true,
    "server_path": properties.resourcePath + properties.seleniumServer,
    "log_path": "",
    "port": 5858,
    "cli_args": {
      "webdriver.chrome.driver": properties.resourcePath + properties.chromedriver,
      "webdriver.edge.driver": properties.resourcePath + properties.msedgedriver,
    }
  },
  "test_settings": {
    "default": {
      "end_session_on_fail": false,
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "silent": true,
      // "retryAssertionTimeout": 10000,
      "screenshots": {
        "enabled": false,
        "path": ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "w3c": false,
          "args": [
            "window-size=1920,1080"
          ]
        }
      }
    },
    "fande_prod": {
      "launch_url": "https://www.focusandexecute.com",
    },
    "fande_testfocus": {
      "launch_url": "http://testfocus.thatoneplace.net",
    },
    "fande_testfocus2": {
      "launch_url": "http://testfocus2.thatoneplace.net",
    },
    "firefox": {
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true
      }
    },
    "edge": {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge",
        "ms:edgeOptions": {
          "w3c": false,
          "args": [
            "window-size=1920,1080"
          ]
        }
      }
    }
  }
}