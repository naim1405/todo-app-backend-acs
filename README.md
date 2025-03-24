# **🔥 TODO BACKEND 🔥**
#### 🚀 Deployed : https://todo-app-backend-acs.onrender.com/api/

#### 🧪 Test Endpoint: https://todo-app-backend-acs.onrender.com/test
---
## 📋 Setup Instructions
- run `npm install`
- get database url from supabase
- create `.env` file from `.env.example`    
- fill in the missing values in the `.env` file
- execute `npm start`
---
## 📕 API Documentation
### **Auth Endpoints**
1. **Register**
   - **Method**: `POST`
   - **Endpoint**: `https://todo-app-backend-acs.onrender.com/api/auth/register`
   - **Body (Raw JSON)**:
     ```json
     {
         "name": string,
         "email": string,
         "password": string
     }
     ```

2. **Login**
   - **Method**: `POST`
   - **Endpoint**: `https://todo-app-backend-acs.onrender.com/api/auth/login`
   - **Body (Raw JSON)**:
     ```json
     {
         "email": string,
         "password": string
     }
     ```

3. **Refresh Token**
   - **Method**: `POST`
   - **Endpoint**: `https://todo-app-backend-acs.onrender.com/api/auth/refresh-token`
   -  **Cookies**:
      - `refreshToken`: `refresh token`


4. **Logout**
   - **Method**: `POST`
   - **Endpoint**: `https://todo-app-backend-acs.onrender.com/api/auth/logout`
   - **Request Headers**:
     - `Authorization`: `access token`

---

### **Todo Endpoints**
1. **Create Todo**
   - **Method**: `POST`
   - **Endpoint**: `/todo`
   - **Request Headers**:
      - `Authorization`: `access token`
   - **Body (Raw JSON)**:
     ```json
     {
         "title": string,
         "details": string,
         "isDone": boolean
     }
     ```
2. **Get All Todos**
   - **Method**: `GET`
   - **Endpoint**: `https://todo-app-backend-acs.onrender.com/api/todo/all`
   - **Request Headers**:
     - `Authorization`: `access token`


3. **Get Todo by ID**
   - **Method**: `GET`
   - **Endpoint**: `https://todo-app-backend-acs.onrender.com/api/todo/:id`
   - **Request Headers**:
     - `Authorization`: `access token`


4. **Update Todo**
   - **Method**: `PUT`
   - **Endpoint**: `https://todo-app-backend-acs.onrender.com/api/todo/:id`
   - **Request Headers**:
     - `Authorization`: `access token`
   - **Body (Raw JSON)**:
     ```json
     {
         "title": string,
         "details": string,
         "isDone": boolean
     }
     ```
5. **Delete Todo**
   - **Method**: `DELETE`
   - **Endpoint**: `https://todo-app-backend-acs.onrender.com/api/todo/:id`
   - **Request Headers**:
     - `Authorization`: `access token`
     



---

### **Other Endpoints**
1. **Test Server**
   - **Method**: `GET`
   - **Endpoint**: `https://todo-app-backend-acs.onrender.com/test`
   - **Status**: Online


