import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ToastContainer } from "react-toastify"

import AuthProvider from "../contexts/AuthContext"

import Private from "./Private"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Dashboard from "../pages/Dashboard"
import NotFound from "../pages/NotFound"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={6000} />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Private> <Dashboard /> </Private>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}