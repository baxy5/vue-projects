<template>
    <div class="tasks" v-for="task in filteredTasks" :key="task.id">
        <div class="task">
            <div>
                <p>{{task.task}}</p>
            </div>
            <div class="delete">
                <p @click="deleteTask(task)">X</p>
            </div>
        </div>
    </div>
    <div class="input">
        <input type="text" placeholder="Add task..." v-model="input" @keypress="enterTask">
        <button @click="addTask">+</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            input: "",
            tasks: [
                {task: "base", id: 0, state: "done"}
            ],
        }
    },
    methods:{
        addTask(){
            this.tasks.push({
                task: this.input,
                id: this.tasks[this.tasks.length-1].id + 1,
                state: "finished"
            })
            this.input = ""
        },
        enterTask(e){
            if(e.key == "Enter"){
                this.tasks.push({
                task: this.input,
                id: this.tasks[this.tasks.length-1].id + 1,
                state: "finished"
                })
                this.input = ""
            }
        },
        deleteTask(task){
            task.state = "done"
        }
    },
    computed:{
        filteredTasks(){
            return this.tasks.filter(task => task.state == "finished")
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
.task{
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #000;
    background-color: rgba(103, 103, 121, 0.39);
    padding: 10px;
    border-start-end-radius: 10px;
    border-start-start-radius: 10px;
    color: #000;
}
.delete p{
    color: red;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
}
</style>