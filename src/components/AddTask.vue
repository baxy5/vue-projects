<template>
    <div class="tasks">
        <div v-for="task in tasks" :key="task.id">
            <p>{{task.name}}</p>
        </div>
        <div class="delete">
            <p>X</p>
        </div>
    </div>
    <input type="text" placeholder="Add task..." v-model="task">
    <button @click="addTask">+</button>
</template>

<script>
export default {
    data(){
        return{
            task: "",
            tasks: [
                { name: "Valami", id: 1}
            ],
        }
    },
    methods:{
        addTask(){
            this.tasks.push({
                name: this.task,
                id: this.tasks[this.tasks.length-1].id + 1
            })
            console.log(this.tasks)
        }
    }
}
</script>

<style>
.tasks{
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
</style>