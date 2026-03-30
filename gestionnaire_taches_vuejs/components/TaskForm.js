const TaskForm = {
    template: `
        <div class="form-container">
            <input v-model="newTask" placeholder="Nom de la tâche..." @keyup.enter="submitTask">
            <button @click="submitTask" class="btn-add">+</button>
        </div>
    `,
    data() {
        return { newTask: '' }
    },
    methods: {
        submitTask() {
            if (this.newTask.trim()) {
                this.$emit('add-task', this.newTask);
                this.newTask = '';
            }
        }
    }
};