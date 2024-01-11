var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://jyunci01.github.io/cad2023 \n \n https://s1511.cycu.org/~cad41123105/cad2023 \n', 'tags': '', 'url': 'About.html'}, {'title': '專案一', 'text': '', 'tags': '', 'url': '專案一.html'}, {'title': '設計繪圖', 'text': '\n 模擬影片 \n \n # 以下的 zmq 程式庫已經過修改, 可以在 IPv4 與 IPv6 環境下使用\n# 針對 CoppeliaSim 的 zmq 延伸程式, Python 需要安裝 cbor 與 pyzmq 等兩個模組\n# pip install cbor pyzmq\nfrom zmqRemoteApi_IPv6 import RemoteAPIClient\n# 由於在 zmq 程式執行時, 希望讓使用者可以透過鍵盤 (或其他電子電機訊號) 指令控制遠端的機電模擬場景\n# Python 程式環境還需要安裝 keyboard 模組, pip install keyboard\nimport keyboard\n\n# 利用以下程式碼連接 CoppeliaSim remote API server\n#第一個輸入變數若為 localhost 則只能控制與程式同在的場景\n# 但若第一輸入變數為可連外的 IPv4 或 IPv6 address, 則可用來控制遠端電腦上的模擬場景\n# 23000 為 CoppeliaSim 使用 ZMQ remote API 連線控制時內定的網路埠號\n# client 與 server 的防火牆或代理主機必須讓此埠號的封包 (socket) 通過\nclient = RemoteAPIClient(\'localhost\', 23000)\n\n# 利用 getObject 取得場景中的 "sim" 物件參考對應值\nsim = client.getObject(\'sim\')\n\n# 利用 sim 物件的 startSimulation() 方法啟動場景模擬\nsim.startSimulation()\n\n# 利用 getObject 取得 \'marble\' and \'sensor\'  物件的參考對應值\nmarble = sim.getObject(\'./marble\')\nsensor = sim.getObject(\'./sensor\')\n\n# 透過變數屬性設定方法將 marble 設為 non-static, 意即具有 dynamic 特性\nsim.setObjectInt32Param(marble, sim.shapeintparam_static, 0)\n\n# 主模擬程序\nwhile True:\n    if keyboard.is_pressed(\'q\'):\n        # 模擬執行期間, 將滑鼠停在場景, 鍵盤按下 q 可以終止模擬\n        break\n\n    r, dist, pt, obj, normal = sim.handleProximitySensor(sensor)\n    res, dist2, point, obj2, n = sim.readProximitySensor(sensor)\n    # Get the current position of the marble\n    current_position1 = sim.getObjectPosition(marble, -1)\n    current_position2 = sim.getObjectPosition(marble, -1)\n\n   \n    # 當鋼球碰觸感測器時\n    if res > 0:\n        if current_position1[0] < 1:\n            # 對鋼球質心施以一個向量力\n            sim.addForceAndTorque(marble, [-1000, 0,-100], [0, 0, 0])\n\n# Stop the simulation\nsim.stopSimulation() \n \n \n \n \n \n', 'tags': '', 'url': '設計繪圖.html'}, {'title': '尺寸設計', 'text': '底板(100*150mm) \n \n 底板洞尺寸 \n \n 柱子 \n \n 盤子 \n \n 盤子洞尺寸 \n \n 球( Φ 9.50mm) \n \n 滑軌尺寸 \n \n', 'tags': '', 'url': '尺寸設計.html'}, {'title': '專案二', 'text': '', 'tags': '', 'url': '專案二.html'}, {'title': '組合圖', 'text': '\n', 'tags': '', 'url': '組合圖.html'}, {'title': 'w15', 'text': '設計繪圖 \n \n 底板 \n \n 滑軌 \n \n', 'tags': '', 'url': 'w15.html'}, {'title': '考試', 'text': '\n', 'tags': '', 'url': '考試.html'}, {'title': '自評', 'text': '倉儲與網站評分項目: \n A: 是否 按照進度明確標示倉儲的改版歷程 \n \n B: 是否根據 \xa0 IPv4 與 IPv6 \xa0 網路環境設定進行作法討論 \n \n C: 是否就 \xa0 Replit、s.cycu.org 與 localhost \xa0 情境下對個人與分組倉儲進行設定操作 \n \xa0是 \n D: 是否就所分配的 \xa0 CAD 套件 從安裝設定到繪圖提供內容參考 \n \n E: 是否使用所分配的 CAD 套件完成 專案一零組件繪圖 , 並提供零組件下載 \n \n F: 是否將自行繪製的專案一零組件 轉入 CoppeliaSim \n 是 \n G: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案一轉入的零組件設定感測器, 並進行 鋼球永動模擬 \n 是 \n H: 是否實際操作 \xa0 Triangle 軌道系統 的鋼球永動模擬 \n 是 \n I: 是否完成 W15 的平面雙 U 迴路上的 鋼球永動系統繪圖、轉檔與系統模擬 \n 有畫圖，但還在用程式 \n J: 是否使用所分配的 CAD 套件完成 專案二 1D 平台零組件繪圖 , 並提供零組件下載 \n 是 \n K: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案二轉入的零組件設定感測器, 並進行鋼球永動模擬 \n 是 \n L: 是否針對專案二的 1D 平台鋼球平衡系統所需的 \xa0 PID 控制理論 進行資料收集與 ChatGPT 對答 \n 是', 'tags': '', 'url': '自評.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};