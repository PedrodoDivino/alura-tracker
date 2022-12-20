import  Tarefas from '../views/Tarefas.vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const rotas: RouteRecordRaw[] = [{
    path: "/",
    name: 'Tarefas',
    component: Tarefas

}];

const reteador = createRouter({
    history: createWebHashHistory(),
    routes:rotas,
})

export default reteador; 