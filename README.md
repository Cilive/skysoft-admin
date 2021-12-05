# SkysoftAdmin
Two Modules `admin` and `owner`

To create modules, services and component use `npm run gen:<module | component| services>`

To login there two temporary accounts
```javascript
Admin
user: admin@gmail.com
password: 1234
Owner
user: owner@gmail.com
password: 1234
```
For persistant data use StoreService

For success alerts use AlertService

Use boxicons for icons link for https://boxicons.com

for form validation use 
```typescript 
validateForm(formId:string)
```
which uses default validation control and adds boostrap validation theme
