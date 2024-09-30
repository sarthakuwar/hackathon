"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function Component() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Finish project proposal", completed: false },
    { id: 2, name: "Schedule team meeting", completed: false },
    { id: 3, name: "Research new design trends", completed: true },
    { id: 4, name: "Write blog post outline", completed: false },
    { id: 5, name: "Attend industry conference", completed: false },
  ])
  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Medical</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between gap-4 rounded-md px-4 py-2 hover:bg-muted">
            <div className="flex items-center gap-4">
              <Checkbox
                id={`task-${task.id}`}
                checked={task.completed}
                onCheckedChange={() => toggleTaskCompletion(task.id)}
              />
              <label
                htmlFor={`task-${task.id}`}
                className={`text-base font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}
              >
                {task.name}
              </label>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}