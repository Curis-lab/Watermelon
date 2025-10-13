## 📁 `hooks/api` Directory Overview

This directory organizes **API-related React hooks** for clean separation of data logic.

### Structure

- **`actions/`**
  - Contains hooks for **writing or updating data**.
  - Typical operations: `POST`, `PUT`, `DELETE`.
  - Example: `useAddUser`, `useUpdateSettings`.

- **`getters/`**
  - Contains hooks for **reading or fetching data**.
  - Typical operation: `GET`.
  - Example: `useGetUser`, `useFetchProjects`.

### 🧠 Purpose
Helps maintain a clear distinction between **data fetching** and **data mutation** logic within the `hooks/api` folder, promoting cleaner and more maintainable code.