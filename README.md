## 我的餐廳清單 (S2-3)
這是一個使用 Node.js + Express 打造的餐廳美食網站，若您對某間餐廳感興趣，可點擊餐廳小卡查看更詳細的資訊，或可依 "餐廳名稱、分類、評分" 等關鍵字搜尋出我們為您提供的餐廳名單，若您搜尋的關鍵字沒有相對應的餐廳，可以參考看看我們幫您分類的餐廳名單。

## 專案畫面

![This is an image](https://github.com/Playpaper/restaurant_list/blob/main/public/img/index.png)
![This is an image](https://github.com/Playpaper/restaurant_list/blob/main/public/img/description.png)
![This is an image](https://github.com/Playpaper/restaurant_list/blob/main/public/img/notFind.png)

## Features - 產品功能
1. 使用者可以瀏覽所有的餐廳。
2. 使用者可以點擊餐廳小卡，進一步瀏覽餐廳的詳細資訊。
3. 使用者可以依 "餐廳名稱、分類、評分" 等關鍵字搜尋。
4. 若使用者搜尋的關鍵字沒有相對應的餐廳，會提供所有分類的餐廳名單。

## Environment SetUp - 環境建置
- Node.js
- Express @4.16.4
- Express-handlebars @3.0.0

## Installing - 專案安裝流程
1. 開啟終端機, 複製此專案至本機電腦:
```
git clone https://github.com/Playpaper/restaurant_list.git
```
2. 進入存放此專案的資料夾
```
cd restaurant_list
```
3. 安裝 express
```
npm i express@4.16.4
```
4. 安裝 handlebars
```
npm i express-handlebars@3.0.0
```
5. 安裝 nodemon (如已安裝可跳過此步驟)
```
npm install -g nodemon
```
6. 啟動伺服器
```
npm nodemon app.js 
```
7. 當終端機出現以下字樣，表示伺服器已啟動
```
The server is running on http://localhost:3000
```
