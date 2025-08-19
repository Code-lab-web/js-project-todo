import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useTodoStore } from "@/stores/todoStore";

interface TodoItemProps {
    id: string;   
}
export const TodoItem = ({ id }: TodoItemProps) => {
    const todo = useTodoStore((state) =>
    state.todos.find((todo) =>todo.id === id
);

if (!todo) return null;

return (
    <div className="flex items-center space-x-4 py-2">
        <Checkbox checked={todo.completed} onCheckeckedChange={( =>
            <span
            className={'flex-1 ${
                }
        }
)
}