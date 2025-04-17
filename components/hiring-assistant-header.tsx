"use client"

import { useState } from "react"
import { LucideUser, LogOut } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LoginDialog } from "@/components/auth/login-dialog"
import { useAuth } from "@/context/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function HiringAssistantHeader() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8">
            <Image
              src="/ai-ha-logo.svg"
              alt="AI-HA Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-none">AI-HA</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">AI Hiring Assistant</span>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <LucideUser className="h-4 w-4" />
                  <span>{user.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={logout} className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => setIsLoginOpen(true)}
            >
              <LucideUser className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
          )}
        </div>
      </div>

      <LoginDialog 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </header>
  )
}

