const TaskList = {
    props: ['tasks'],
    template: `
        <ul class="task-list">
            <li v-for="task in tasks" :key="task.id" class="task-item">
                <span :class="{ completed: task.completed }">{{ task.title }}</span>
                <input type="checkbox" v-model="task.completed">
            </li>
        </ul>
    `
};