$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/product.feature");
formatter.feature({
  "line": 2,
  "name": "Product_Store Website",
  "description": "",
  "id": "product-store-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with valid and invalid details",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "product-store-website;login-into-product-store-website;;1"
    },
    {
      "cells": [
        "anwesh",
        "anwi@12"
      ],
      "line": 14,
      "id": "product-store-website;login-into-product-store-website;;2"
    },
    {
      "cells": [
        "anweshd",
        "anwi@123"
      ],
      "line": 15,
      "id": "product-store-website;login-into-product-store-website;;3"
    },
    {
      "cells": [
        "danwesh",
        "anwi@1234"
      ],
      "line": 16,
      "id": "product-store-website;login-into-product-store-website;;4"
    },
    {
      "cells": [
        "muni",
        "123"
      ],
      "line": 17,
      "id": "product-store-website;login-into-product-store-website;;5"
    },
    {
      "cells": [
        "munib",
        "1234"
      ],
      "line": 18,
      "id": "product-store-website;login-into-product-store-website;;6"
    },
    {
      "cells": [
        "bmuni",
        "12345"
      ],
      "line": 19,
      "id": "product-store-website;login-into-product-store-website;;7"
    },
    {
      "cells": [
        "gunneri",
        "1234"
      ],
      "line": 20,
      "id": "product-store-website;login-into-product-store-website;;8"
    },
    {
      "cells": [
        "gsaipriya",
        "sai@12"
      ],
      "line": 21,
      "id": "product-store-website;login-into-product-store-website;;9"
    },
    {
      "cells": [
        "saipriyag",
        "sai@123"
      ],
      "line": 22,
      "id": "product-store-website;login-into-product-store-website;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"anwesh\" and \"anwi@12\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 53832197700,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 2427015500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anwesh",
      "offset": 22
    },
    {
      "val": "anwi@12",
      "offset": 35
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 9728730700,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 2171289600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"anweshd\" and \"anwi@123\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 11881118200,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 1164071700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anweshd",
      "offset": 22
    },
    {
      "val": "anwi@123",
      "offset": 36
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 11045835700,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 1027852100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"danwesh\" and \"anwi@1234\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 12977851700,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 186118400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "danwesh",
      "offset": 22
    },
    {
      "val": "anwi@1234",
      "offset": 36
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8511321700,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 526410800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"muni\" and \"123\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 12078690300,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 163381700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "muni",
      "offset": 22
    },
    {
      "val": "123",
      "offset": 33
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8435826800,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 642077500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"munib\" and \"1234\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 9378240800,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 130291600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "munib",
      "offset": 22
    },
    {
      "val": "1234",
      "offset": 34
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8504702900,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 138282500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"bmuni\" and \"12345\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 8306916900,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 129998200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bmuni",
      "offset": 22
    },
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8458524500,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 294383900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"gunneri\" and \"1234\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 6577937000,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 127804100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gunneri",
      "offset": 22
    },
    {
      "val": "1234",
      "offset": 36
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8432217400,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 181519300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"gsaipriya\" and \"sai@12\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 6315156800,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 182103600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gsaipriya",
      "offset": 22
    },
    {
      "val": "sai@12",
      "offset": 38
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 9462524100,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 457330700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"saipriyag\" and \"sai@123\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 6568819300,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 148959700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saipriyag",
      "offset": 22
    },
    {
      "val": "sai@123",
      "offset": 38
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8472561400,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 189693800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Fill contact in Product_Store",
  "description": "",
  "id": "product-store-website;fill-contact-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@TC_02_contact"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Clicking on contact to navigate contact Page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The user filling contactdetails using email as \"anwesh@gmail.com\" and name as \"anwesh1\" and message as \"hello\" details",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Clicking on close button",
  "keyword": "Then "
});
formatter.match({
  "location": "contactdetailstep.user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 6676158700,
  "status": "passed"
});
formatter.match({
  "location": "contactdetailstep.clicking_on_contact_to_navigate_contact_Page()"
});
formatter.result({
  "duration": 120451900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anwesh@gmail.com",
      "offset": 48
    },
    {
      "val": "anwesh1",
      "offset": 79
    },
    {
      "val": "hello",
      "offset": 104
    }
  ],
  "location": "contactdetailstep.the_user_filling_contactdetails_using_email_as_and_name_as_message_as_details(String,String,String)"
});
formatter.result({
  "duration": 17717950800,
  "status": "passed"
});
formatter.match({
  "location": "contactdetailstep.click_on_close_Button()"
});
formatter.result({
  "duration": 3114998600,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Add to cart in Product_Store",
  "description": "",
  "id": "product-store-website;add-to-cart-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@TC_03_add"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Clicking on product to navigate product Page",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "The user clicks add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Clicking on close browser button",
  "keyword": "Then "
});
formatter.match({
  "location": "Addtocartstep.launch_the_chrome_application()"
});
formatter.result({
  "duration": 9740375400,
  "status": "passed"
});
formatter.match({
  "location": "Addtocartstep.clicking_on_product_to_navigate_product_Page()"
});
formatter.result({
  "duration": 740604100,
  "status": "passed"
});
formatter.match({
  "location": "Addtocartstep.the_user_clicks_add_to_cart()"
});
formatter.result({
  "duration": 16140396100,
  "status": "passed"
});
formatter.match({
  "location": "Addtocartstep.click_on_close_browser_Button()"
});
formatter.result({
  "duration": 3115737400,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Navigate in Product_Store",
  "description": "",
  "id": "product-store-website;navigate-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@TC_04_next"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "To launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Clicking on next to navigate next Page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Clicking on browser button",
  "keyword": "Then "
});
formatter.match({
  "location": "Nextpagestep.to_launch_the_chrome_application()"
});
formatter.result({
  "duration": 6811521500,
  "status": "passed"
});
formatter.match({
  "location": "Nextpagestep.clicking_on_next_to_navigate_next_Page()"
});
formatter.result({
  "duration": 7935244500,
  "status": "passed"
});
formatter.match({
  "location": "Nextpagestep.click_on_browser_Button()"
});
formatter.result({
  "duration": 3181159900,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Selecting category",
  "description": "",
  "id": "product-store-website;selecting-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@TC_05_category"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "For launching the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Clicking on category to navigate laptop Page",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "The user clicking on category",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Click on close button",
  "keyword": "Then "
});
formatter.match({
  "location": "Categorystep.for_launching_the_chrome_application()"
});
formatter.result({
  "duration": 8347052600,
  "status": "passed"
});
formatter.match({
  "location": "Categorystep.clicking_on_category_to_navigate_laptop_Page()"
});
formatter.result({
  "duration": 218636100,
  "status": "passed"
});
formatter.match({
  "location": "Categorystep.the_user_clicking_on_category()"
});
formatter.result({
  "duration": 15846169500,
  "status": "passed"
});
formatter.match({
  "location": "Categorystep.click_on_close_Button()"
});
formatter.result({
  "duration": 3146406100,
  "status": "passed"
});
});