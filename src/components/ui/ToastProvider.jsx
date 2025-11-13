import React, { createContext, useContext, useState, useCallback } from "react";
import { Card, CardBody } from "@heroui/react";
import { CheckCircle, X } from "lucide-react";

const ToastContext = createContext(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "success") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-3 pointer-events-none">
        {toasts.map((t) => (
          <div key={t.id} className="pointer-events-auto animate-in slide-in-from-top duration-200">
            <Card
              className={`min-w-[420px] md:min-w-[480px] shadow-lg border-l-4 ${
                t.type === "success" ? "bg-green-50 border-green-500" : "bg-red-50 border-red-500"
              }`}
            >
              <CardBody className="flex items-center gap-4 py-4 px-5">
                <CheckCircle className={t.type === "success" ? "text-green-600" : "text-red-600"} size={22} />
                <p className={`flex-1 text-base font-medium ${t.type === "success" ? "text-green-800" : "text-red-800"}`}>{t.message}</p>
                <button
                  onClick={() => removeToast(t.id)}
                  className={`${t.type === "success" ? "text-green-700" : "text-red-700"} hover:opacity-80`}
                >
                  <X size={18} />
                </button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
