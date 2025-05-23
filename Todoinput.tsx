import React, { useState } from "react";
import { input } from "@/components/ui/input";
import { button } from "@/components/ui/button";
import { plus } from "lucide-react";
import { useTodoStore } from "@/stores/todoStore";

export const TodoInput = () => {
    const [text, setText] = useState("");
    const todos = useTodoStore((state) => state.settodos);
const { setTodos } = useTodoActions();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            const todo = {
                text: text.trim()
                id: Date.now().toString(),
                completed: false,
            }
            setTodos([...todos, todo]);
            setText("");
        }
    }
}