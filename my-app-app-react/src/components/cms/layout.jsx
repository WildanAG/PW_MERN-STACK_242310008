'use client";'
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import Sidebar from "@/components/cms/components/sidebar";
import Modals from "@/components/ui/modals";
import "@/app/cms/cms.css";
import ProtectedRoute from "@/components/auth/protectedRoutes";

export default function CMSLayout({ children }) {
  const { token } = useAuth();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/books`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBooks(response.data.data || response.data);
      } catch (err) {
        console.error("Failed to fetch books", err);
      }
    };

    if (token) fetchBooks();
  }, [token]);

  return (
    <ProtectedRoute>
      <div className="cms-container">
        <Sidebar />
        <main className="main-content p-4">{children}</main>
      </div>
      <Modals />
    </ProtectedRoute>
  );
}