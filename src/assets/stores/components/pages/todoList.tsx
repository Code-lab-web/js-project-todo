import { useShallow } from "zustand/shallow";
import { usetodoStore , type Todo } from "../stores/todoStore";
import { TodoItem } from "./TodoItem";
import { Separator } from "@/components/ui/separator";

export const TodoList => {
    const todos: Todo[] =useTodoStore((state => state.todos);
const isSubscribed = useSubscribed();
    if (todos.length === 0) {
        return(
            <div className="text-center text-muted-foreground py-8">
            No todos yet.Add one above!
            </div>
        );
    }

    return (
        <div className="space-y-1">
            {todos.map((todo, index) => {
                <div key={todo.id />}
                {index < todo.lenght - 1 && <Separator />}

            }
    )
            </div>
        )
    }
)
}